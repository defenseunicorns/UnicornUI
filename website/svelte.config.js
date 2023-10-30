import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

let scriptContent = '';
  let styleContent = '';
  const transitionRefs = [];

  const transitionPreprocessor = { markup({content, filename}) {
    scriptContent = content.slice(0, content.search(/<\/script>/) + '</script>'.length);
    styleContent = content.slice(content.search(/<style>/));
    const markup = content.slice(
      content.search(/<\/script>/) + '</script>'.length,
      content.search(/<style>/)
    );

    const html = process(markup);
    const code = scriptContent + html + styleContent;

    return { code: code };
  }
}


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


/**
 * 
export interface Processed {
    code;
    map? | object;
    dependencies?[];
    toString?: () => string;
}
 */


  // TODO: look for in: and out: as well
  // TODO: handle custom functions instead of using Svelte Internal Transition functions

  function process(markup) {
    const inlineCompTagPos = markup.search(/<[A-Z]/);
    let result = '';

    if (inlineCompTagPos > -1) {
      result = markup.slice(0, inlineCompTagPos);
      let component = getComponent(markup.slice(inlineCompTagPos));
      let origComp = component;
      const transPos = getTransPos(component);

      if (transPos > -1) {
        const transition = getTransition(component, transPos);
        component = removeTransFromCompTag(component, transition);

        let ref = getRef(component);
        if (!ref) {
          ref = createRef();
          scriptContent = addRefToScript(scriptContent, ref);
          component = addRefToCompTag(component, ref);
        }

        scriptContent = addImports(scriptContent);
        scriptContent = writeTransFnToScript(scriptContent, transition, ref);

        result += component;
        result += process(
          markup.slice(inlineCompTagPos + getComponentCloseTagEnd(origComp) + 1)
        );
      } else {
        result += component;
        result += process(
          markup.slice(inlineCompTagPos + getComponentCloseTagEnd(component) + 1)
        );
      }
    } else {
      result = markup;
    }

    return result;
  }

  function getComponent(content) {
    const endPos = getComponentCloseTagEnd(content);
    return content.substring(0, endPos + 1);
  }

  function getComponentCloseTagEnd(content) {
    const closeTagStartPos = content.search(/<\//);
    const closeTagEndPos = content.substring(closeTagStartPos).search(/>/);

    return closeTagStartPos + closeTagEndPos;
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

  function checkForInternalImport(scriptContent) {
    const t = scriptContent.search(/'svelte\/internal'/);
    return t === -1 ? false : true;
  }

  function addImports(scriptContent) {
    if (!checkForInternalImport(scriptContent)) {
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

  function createRef() {
    transitionRefs.push(`transRef${transitionRefs.length + 1}`);
    return transitionRefs[transitionRefs.length - 1];
  }

  function addRefToScript(scriptContent, ref) {
    //TODO: check for typescript before adding typing to ref
    const end_script_tag = scriptContent.search(/<\/script>/);
    let newContent =
      scriptContent.slice(0, end_script_tag) +
      `\n let ${ref}: HTMLElement;\n` +
      scriptContent.slice(end_script_tag);

    return newContent;
  }

  function addRefToCompTag(tag, ref) {
    const tagClose = tag.search(/>/);
    return tag.slice(0, tagClose) + ` bind:ref={${ref}}` + tag.slice(tagClose);
  }

  function getRef(content) {
    const refPos = content.search(/bind:ref/);
    if (refPos > -1) {
      const openStache = content.substring(refPos).search(/{/);
      const closeStache = content.substring(refPos).search(/}/);
      return content.substring(refPos + openStache + 1, refPos + closeStache);
    }
  }

  function writeToOnMount(content, startingInd, transition, ref) {
    const transFunc = `\n   const transFor${ref} = ${ref} && internal.create_bidirectional_transition(${ref}, ${
      transition.split(':')[1]
    }, {}, true);\n   transFor${ref}.run(1);\n`;
    return content.slice(0, startingInd) + transFunc + content.slice(startingInd);
  }

  function createOnMount(scriptContent, transition, ref) {
    const end_script_tag = scriptContent.search(/<\/script>/);
    const onMount = `\n internal.onMount(() => {\n   const transFor${ref} = ${ref} && internal.create_bidirectional_transition(${ref}, ${
      transition.split(':')[1]
    }, {}, true);\n   transFor${ref}.run(1);\n });\n`;
    return scriptContent.slice(0, end_script_tag) + onMount + scriptContent.slice(end_script_tag);
  }

  function getOnMountPos(content) {
    return content.search(/onMount\(/);
  }

  function writeTransFnToScript(scriptContent, transition, ref) {
    const onMountPos = getOnMountPos(scriptContent);
    if (onMountPos > -1) {
      const startStache = onMountPos + scriptContent.substring(onMountPos).search(/{/);
      return writeToOnMount(scriptContent, startStache + 1, transition, ref);
    } else {
      return createOnMount(scriptContent, transition, ref);
    }
  }

  function removeTransFromCompTag(tag, transition) {
    return tag.replace(transition, '');
  }
