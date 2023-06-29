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
  markup(options: {
    content: string;
    filename?: string;
  }): void | Processed | Promise<void | Processed> {
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
    const hasParamsPos = content.substring(startSearchInd).search(/={/);

    return hasParamsPos > -1
      ? content.substring(
          startSearchInd,
          startSearchInd + content.substring(startSearchInd).search(/}/) + 1
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

  hasStyleAttr(content: string): boolean {
    return content.search(/style=/) > -1;
  }

  // addToStyleAttr(content: string): void {};

  // makeStyleAttr(content: string): void  {};

  removeTransFromCompTag(content: string, transition: string) {
    return content.replace(transition, '');
  }
}
