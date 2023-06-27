import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export const transitionPreprocessor = {
  markup({ content, filename }) {
    let result = content;
    const compOpeningTag = getInlineCompOpenTag(content);

    if (compOpeningTag) {
      const transPos = getTransPos(compOpeningTag);
      if (transPos > -1) {
        const transition = getTransition(compOpeningTag, transPos);
        if (transition) result = removeTransFromCompTag(content, transition);
      }
    }

    return result;
  }
};

export const getInlineCompOpenTag = (content) => {
  const tagOpenPos = content.search(/<[A-Z]/);
  const tagClosePos = content.substring(tagOpenPos).search(/>/);
  return content.substring(tagOpenPos, tagOpenPos + tagClosePos + 1);
};

const getTransPos = (content) => {
  return content.search(/transition:/);
};

const getTransParams = (content, startSearchInd) => {
  const hasParamsPos = content.substring(startSearchInd).search(/={/);

  return hasParamsPos > -1
    ? content.substring(
        startSearchInd,
        startSearchInd + content.substring(startSearchInd).search(/}/) + 1
      )
    : '';
};

const getTransNoParams = (content, startSearchInd) => {
  return content.substring(
    startSearchInd,
    startSearchInd + content.substring(startSearchInd).search(/\s|>/)
  );
};

export const getTransition = (content, transPos) => {
  const transParams = getTransParams(content, transPos);
  const transNoParams = getTransNoParams(content, transPos);
  return transParams ? transParams : transNoParams;
};
export const removeTransFromCompTag = (content, transition) => {
  return content.replace(transition, '');
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        includePaths: ['../node_modules']
      }
    })
  ],
  kit: {
    adapter: adapter(),
    alias: {
      '@uui': '../node_modules/@defense-unicorns/unicorn-ui/src/lib',
      '@uui/*': '../node_modules/@defense-unicorns/unicorn-ui/src/lib/*'
    }
  }
};

export default config;

/** 
 * // v4
const myPreprocessor = {
  markup({ content }) {
    return { code: content.replace('foo', 'bar') };
  },
};

// later in your config
{
  preprocess: [myPreprocessor, sveltePreprocess()];
}
 */
