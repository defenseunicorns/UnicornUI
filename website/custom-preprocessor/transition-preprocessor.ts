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
        if (transition) result = this.removeTransFromCompTag(options.content, transition);
      }
    }

    return { code: result };
  }

  getInlineCompOpenTag(content: string): string {
    const tagOpenPos = content.search(/<[A-Z]/);
    const tagClosePos = content.substring(tagOpenPos).search(/>/);
    return content.substring(tagOpenPos, tagOpenPos + tagClosePos + 1);
  }

  getTransPos(content: string): number {
    return content.search(/transition:/);
  }

  getTransParams(content: string, startSearchInd: number): string {
    const hasParamsPos = content.substring(startSearchInd).search(/={{/);

    return hasParamsPos > -1
      ? content.substring(
          startSearchInd,
          startSearchInd + content.substring(startSearchInd).search(/}}/) + 2
        )
      : '';
  }

  getTransNoParams(content: string, startSearchInd: number): string | undefined {
    return content.substring(
      startSearchInd,
      startSearchInd + content.substring(startSearchInd).search(/\s|>/)
    );
  }

  getTransition(content: string, transPos: number): string | undefined {
    const transParams = this.getTransParams(content, transPos);
    const transNoParams = this.getTransNoParams(content, transPos);
    return transParams ? transParams : transNoParams;
  }

  addImports(content: string) {
    const openScriptPos = content.search(/<script>/);
    return (
      content.slice(0, openScriptPos + 8) +
      "\n import * as internal from 'svelte/internal'" +
      content.slice(openScriptPos + 8)
    );
  }

  // checkForOnMount(content: string) {
  //   const onMountPos = content.search(/onMount\(/)
  //   if(onMountPos > -1) {
  //     content.substring(onMountPos).search(/};/);
  //   }

  //   return
  // }

  writeToScript(content: string, transition: string) {
    content = this.addImports(content);
    const end_script_tag = content.search(/<\/script>/);
    const transFunc = `\n internal.onMount(() => {\n    const trans = boxRef && internal.create_bidirectional_transition(boxRef, ${
      transition.split(':')[1]
    }, {}, true);\n   trans.run(1);\n });\n`;
    const newContent = content.slice(0, end_script_tag) + transFunc + content.slice(end_script_tag);
    return newContent;
  }

  removeTransFromCompTag(content: string, transition: string) {
    return content.replace(transition, '');
  }
}
