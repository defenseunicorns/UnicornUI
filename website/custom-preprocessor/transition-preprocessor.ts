import type { Processed } from 'svelte/types/compiler/preprocess';

/**
 * 
export interface Processed {
    code: string;
    map?: string | object;
    dependencies?: string[];
    toString?: () => string;
}
 */

export default class TransitionPreprocessor {
  // TODO: look for in: and out: as well
  // TODO: handle custom functions instead of using Svelte Internal Transition functions

  private scriptContent = '';
  private styleContent = '';
  private transitionRefs: string[] = [];

  markup(options: {
    content: string;
    filename?: string;
  }): void | Processed | Promise<void | Processed> {
    const { content } = options;
    this.scriptContent = content.slice(0, content.search(/<\/script>/) + '</script>'.length);
    this.styleContent = content.slice(content.search(/<style>/));
    const markup = content.slice(
      content.search(/<\/script>/) + '</script>'.length,
      content.search(/<style>/)
    );

    const html = this.process(markup);
    const code = this.scriptContent + html + this.styleContent;

    return { code: code };
  }

  process(markup: string) {
    const inlineCompTagPos = markup.search(/<[A-Z]/);
    let result = '';

    if (inlineCompTagPos > -1) {
      result = markup.slice(0, inlineCompTagPos);
      let component = this.getComponent(markup.slice(inlineCompTagPos));
      let origComp = component;
      const transPos = this.getTransPos(component);

      if (transPos > -1) {
        const transition = this.getTransition(component, transPos);
        component = this.removeTransFromCompTag(component, transition);

        let ref = this.getRef(component);
        if (!ref) {
          ref = this.createRef();
          this.scriptContent = this.addRefToScript(this.scriptContent, ref);
          component = this.addRefToCompTag(component, ref);
        }

        this.scriptContent = this.addImports(this.scriptContent);
        this.scriptContent = this.writeTransFnToScript(this.scriptContent, transition, ref);

        result += component;
        result += this.process(
          markup.slice(inlineCompTagPos + this.getComponentCloseTagEnd(origComp) + 1)
        );
      } else {
        result += component;
        result += this.process(
          markup.slice(inlineCompTagPos + this.getComponentCloseTagEnd(component) + 1)
        );
      }
    } else {
      result = markup;
    }

    return result;
  }

  getComponent(content: string) {
    const endPos = this.getComponentCloseTagEnd(content);
    return content.substring(0, endPos + 1);
  }

  getComponentCloseTagEnd(content: string) {
    const closeTagStartPos = content.search(/<\//);
    const closeTagEndPos = content.substring(closeTagStartPos).search(/>/);

    return closeTagStartPos + closeTagEndPos;
  }

  getTransPos(content: string) {
    return content.search(/transition:/);
  }

  getTransParams(content: string, startSearchInd: number) {
    const hasParamsPos = content.substring(startSearchInd).search(/={{/);

    return hasParamsPos > -1
      ? content.substring(
          startSearchInd,
          startSearchInd + content.substring(startSearchInd).search(/}}/) + 2
        )
      : '';
  }

  getTransNoParams(content: string, startSearchInd: number) {
    return content.substring(
      startSearchInd,
      startSearchInd + content.substring(startSearchInd).search(/\s|>/)
    );
  }

  getTransition(content: string, transPos: number) {
    const transParams = this.getTransParams(content, transPos);
    const transNoParams = this.getTransNoParams(content, transPos);
    return transParams ? transParams : transNoParams;
  }

  checkForInternalImport(scriptContent: string) {
    const t = scriptContent.search(/'svelte\/internal'/);
    return t === -1 ? false : true;
  }

  addImports(scriptContent: string) {
    if (!this.checkForInternalImport(scriptContent)) {
      const endOfScriptOpenTag = scriptContent.search(/>/);
      return (
        scriptContent.slice(0, endOfScriptOpenTag + 1) +
        "\n import * as internal from 'svelte/internal'" +
        scriptContent.slice(endOfScriptOpenTag + 1)
      );
    } else {
      return scriptContent;
    }
  }

  createRef() {
    this.transitionRefs.push(`transRef${this.transitionRefs.length + 1}`);
    return this.transitionRefs[this.transitionRefs.length - 1];
  }

  addRefToScript(scriptContent: string, ref: string) {
    //TODO: check for typescript before adding typing to ref
    const end_script_tag = scriptContent.search(/<\/script>/);
    let newContent =
      scriptContent.slice(0, end_script_tag) +
      `\n let ${ref}: HTMLElement;\n` +
      scriptContent.slice(end_script_tag);

    return newContent;
  }

  addRefToCompTag(tag: string, ref: string) {
    const tagClose = tag.search(/>/);
    return tag.slice(0, tagClose) + ` bind:ref={${ref}}` + tag.slice(tagClose);
  }

  getRef(content: string) {
    const refPos = content.search(/bind:ref/);
    if (refPos > -1) {
      const openStache = content.substring(refPos).search(/{/);
      const closeStache = content.substring(refPos).search(/}/);
      return content.substring(refPos + openStache + 1, refPos + closeStache);
    }
  }

  writeToOnMount(content: string, startingInd: number, transition: string, ref: string) {
    const transFunc = `\n   const trans = ${ref} && internal.create_bidirectional_transition(${ref}, ${
      transition.split(':')[1]
    }, {}, true);\n   trans.run(1);\n`;
    return content.slice(0, startingInd) + transFunc + content.slice(startingInd);
  }

  createOnMount(scriptContent: string, transition: string, ref: string) {
    const end_script_tag = scriptContent.search(/<\/script>/);
    const onMount = `\n internal.onMount(() => {\n   const trans = ${ref} && internal.create_bidirectional_transition(${ref}, ${
      transition.split(':')[1]
    }, {}, true);\n   trans.run(1);\n });\n`;
    return scriptContent.slice(0, end_script_tag) + onMount + scriptContent.slice(end_script_tag);
  }

  getOnMountPos(content: string) {
    return content.search(/onMount\(/);
  }

  writeTransFnToScript(scriptContent: string, transition: string, ref: string) {
    const onMountPos = this.getOnMountPos(scriptContent);
    if (onMountPos > -1) {
      const startStache = onMountPos + scriptContent.substring(onMountPos).search(/{/);
      return this.writeToOnMount(scriptContent, startStache + 1, transition, ref);
    } else {
      return this.createOnMount(scriptContent, transition, ref);
    }
  }

  removeTransFromCompTag(tag: string, transition: string) {
    return tag.replace(transition, '');
  }
}
