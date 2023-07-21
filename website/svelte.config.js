import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const transitionPreprocessor = {
  markup({ content, filename }) {
    console.log('transition pre-processing ', filename);
    let result = content;
    const compOpeningTag = getInlineCompOpenTag(content);

    if (compOpeningTag) {
      const transPos = getTransPos(compOpeningTag);
      if (transPos > -1) {
        const transition = getTransition(compOpeningTag, transPos);
        if (transition) result = removeTransFromCompTag(content, transition);
        result = writeTransFnToScript(result, transition);
        console.log('***** FILE: ', filename, '\n', transition, '\n', result);
      }
    }

    return { code: result };
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    transitionPreprocessor,
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

function addImports(content) {
  const openScriptPos = content.search(/<script>/);
  const endOfOpenTag = content.substring(openScriptPos).search(/>/);
  return (
    content.slice(0, endOfOpenTag + 1) +
    "\n import * as internal from 'svelte/internal'" +
    content.slice(endOfOpenTag + 1)
  );
}

function getOnMountPos(content) {
  return content.search(/onMount\(/);
}

function writeToOnMount(content, startingInd, transition) {
  const transFn = `\n   const trans = boxRef && internal.create_bidirectional_transition(boxRef, ${
    transition.split(':')[1]
  }, {}, true);\n   trans.run(1);\n`;
  return content.slice(0, startingInd) + transFn + content.slice(startingInd);
}

function createRef(content) {
  const end_script_tag = content.search(/<\/script>/);
  // TODO: check if lang=ts before adding typing
  let newContent =
    content.slice(0, end_script_tag) +
    ' let transRef: HTMLElement;\n' +
    content.slice(end_script_tag);

  const compTag = newContent.search(getInlineCompOpenTag(newContent));
  const tagClosePos = newContent.substring(compTag).search(/>/);

  newContent =
    newContent.slice(0, compTag + tagClosePos) +
    ' bind:ref={transRef}' +
    newContent.slice(compTag + tagClosePos);

  return newContent;
}

function getRef(content) {
  const refPos = content.search(/bind:ref/);
  if (refPos > -1) {
    const openStache = content.substring(refPos).search(/{/);
    const closeStache = content.substring(refPos).search(/}/);
    return content.substring(refPos + openStache + 1, refPos + closeStache);
  }
}


function writeTransFnToScript(content, transition) {
  content = addImports(content);
  let ref = getRef(getInlineCompOpenTag(content));
  if (!ref) {
    // TODO: when potentially handling multiple custom components with transition directives we'll need unique ref names for each
    ref = 'transRef';
    content = createRef(content);
  }
  const onMountPos = getOnMountPos(content);
  if (onMountPos > -1) {
    const startStache = onMountPos + content.substring(onMountPos).search(/{/);
    return writeToOnMount(content, startStache + 1, transition, ref);
  } else {
    const end_script_tag = content.search(/<\/script>/);
    const onMount = `\n internal.onMount(() => {\n   const trans = ${ref} && internal.create_bidirectional_transition(${ref}, ${
      transition.split(':')[1]
    }, {}, true);\n   trans.run(1);\n });\n`;
    return content.slice(0, end_script_tag) + onMount + content.slice(end_script_tag);
  }
}

function getInlineCompOpenTag(content) {
  const tagOpenPos = content.search(/<[A-Z]/);
  const tagClosePos = content.substring(tagOpenPos).search(/>/);
  return content.substring(tagOpenPos, tagOpenPos + tagClosePos + 1);
}

function getTransPos(content) {
  return content.search(/transition:/);
}

function getTransParams(content, startSearchInd) {
  const hasParamsPos = content.substring(startSearchInd).search(/={{/);

  return hasParamsPos > -1
    ? content.substring(
        startSearchInd,
        startSearchInd + content.substring(startSearchInd).search(/}}/) + 2
      )
    : '';
}

function getTransNoParams(content, startSearchInd) {
  return content.substring(
    startSearchInd,
    startSearchInd + content.substring(startSearchInd).search(/\s|>/)
  );
}

function getTransition(content, transPos) {
  const transParams = getTransParams(content, transPos);
  const transNoParams = getTransNoParams(content, transPos);
  return transParams ? transParams : transNoParams;
}

function removeTransFromCompTag(content, transition) {
  return content.replace(transition, '');
}
