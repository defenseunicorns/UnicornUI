/** @type {import('node_modules/svelte/types/compiler/preprocess').types.d.ts} */
export const transitionPreprocessor = {
  markup: (options: { content: string; filename?: string }) => {
    let result = options.content;
    const compOpeningTag = getInlineCompOpenTag(options.content);

    if (compOpeningTag) {
      const transPos = getTransPos(compOpeningTag);
      if (transPos > -1) {
        const transition = getTransition(compOpeningTag, transPos);
        if (transition) result = removeTransFromCompTag(options.content, transition);
      }
    }

    return result;
  }
};

export const getInlineCompOpenTag = (content: string): string => {
  const tagOpenPos = content.search(/<[A-Z]/);
  const tagClosePos = content.substring(tagOpenPos).search(/>/);
  return content.substring(tagOpenPos, tagOpenPos + tagClosePos + 1);
};

const getTransPos = (content: string): number => {
  return content.search(/transition:/);
};

const getTransParams = (content: string, startSearchInd: number): string => {
  const hasParamsPos = content.substring(startSearchInd).search(/={/);

  return hasParamsPos > -1
    ? content.substring(
        startSearchInd,
        startSearchInd + content.substring(startSearchInd).search(/}/) + 1
      )
    : '';
};

const getTransNoParams = (content: string, startSearchInd: number): string | undefined => {
  return content.substring(
    startSearchInd,
    startSearchInd + content.substring(startSearchInd).search(/\s|>/)
  );
};

export const getTransition = (content: string, transPos: number): string | undefined => {
  const transParams = getTransParams(content, transPos);
  const transNoParams = getTransNoParams(content, transPos);
  return transParams ? transParams : transNoParams;
};

export const hasStyleAttr = (content: string): boolean => {
  return content.search(/style=/) > -1;
};

export const addToStyleAttr = (content: string): void => {};

export const makeStyleAttr = (content: string): void => {};

export const removeTransFromCompTag = (content: string, transition: string) => {
  return content.replace(transition, '');
};
