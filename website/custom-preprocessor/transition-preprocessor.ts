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

export class TransitionPreprocessor {
  // content: string;

  markup(options: {
    content: string;
    filename?: string;
  }): void | Processed | Promise<void | Processed> {
    // this.content = options.content;
    let result = options.content;
    const compOpeningTag = this.getInlineCompOpenTag(options.content);

    if (compOpeningTag) {
      const transPos = this.getTransPos(compOpeningTag);
      if (transPos > -1) {
        const transition = this.getTransition(compOpeningTag, transPos);
        result = this.removeTransFromCompTag(options.content, transition);
        result = this.writeTransFnToScript(result, transition);
      }
    }

    return { code: result };
  }

  getInlineCompOpenTag(content: string) {
    const tagOpenPos = content.search(/<[A-Z]/);
    const tagClosePos = content.substring(tagOpenPos).search(/>/);
    return content.substring(tagOpenPos, tagOpenPos + tagClosePos + 1);
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

  addImports(content: string) {
    const openScriptPos = content.search(/<script>/);
    const endOfOpenTag = content.substring(openScriptPos).search(/>/);
    return (
      content.slice(0, endOfOpenTag + 1) +
      "\n import * as internal from 'svelte/internal'" +
      content.slice(endOfOpenTag + 1)
    );
  }

  getOnMountPos(content: string) {
    return content.search(/onMount\(/);
  }

  writeToOnMount(content: string, startingInd: number, transition: string) {
    const transFunc = `\n   const trans = boxRef && internal.create_bidirectional_transition(boxRef, ${
      transition.split(':')[1]
    }, {}, true);\n   trans.run(1);\n`;
    return content.slice(0, startingInd) + transFunc + content.slice(startingInd);
  }

  writeTransFnToScript(content: string, transition: string) {
    content = this.addImports(content);
    const onMountPos = this.getOnMountPos(content);
    if (onMountPos > -1) {
      const startStache = onMountPos + content.substring(onMountPos).search(/{/);
      return this.writeToOnMount(content, startStache + 1, transition);
    } else {
      const end_script_tag = content.search(/<\/script>/);
      const onMount = `\n internal.onMount(() => {\n   const trans = boxRef && internal.create_bidirectional_transition(boxRef, ${
        transition.split(':')[1]
      }, {}, true);\n   trans.run(1);\n });\n`;
      return content.slice(0, end_script_tag) + onMount + content.slice(end_script_tag);
    }
  }

  removeTransFromCompTag(content: string, transition: string) {
    return content.replace(transition, '');
  }
}
