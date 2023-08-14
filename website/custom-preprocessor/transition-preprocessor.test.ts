import TransitionPreprocessor from './transition-preprocessor';

describe('preprocessing transition directives passed to custom components (i.e. <Box>)', () => {
  describe('helper functions', () => {
    let tPreproc: TransitionPreprocessor;

    beforeEach(() => {
      tPreproc = new TransitionPreprocessor();
    });

    it('finds InlineComponent', () => {
      const content =
        '<Button>InlineComponent</Button>' + '<Box>InlineComponent</Box>' + '<style></style>';
      const result = tPreproc.getComponent(content);
      expect(result).toBe('<Button>InlineComponent</Button>');
    });

    it('finds transition: directive with params', () => {
      const content = '<Button transition:fade={{params}}>InlineComponent</Button>';
      const result = tPreproc.getTransition(content, 8);
      expect(result).toBe('transition:fade={{params}}');
    });

    it('finds transition: directive with no params and ending with >', () => {
      const content = '<Button transition:fade>InlineComponent</Button>';
      const result = tPreproc.getTransition(content, 8);
      expect(result).toBe('transition:fade');
    });

    it('finds transition: directive with no params and ending with white space', () => {
      const content = '<Button transition:fade style="">InlineComponent</Button>';
      const result = tPreproc.getTransition(content, 8);
      expect(result).toBe('transition:fade');
    });

    it('removes transition from content', () => {
      const content = '<Button transition:fade style="width: 1rem;">InlineComponent</Button>';
      const cleanedContent = '<Button  style="width: 1rem;">InlineComponent</Button>';
      const result = tPreproc.removeTransFromCompTag(content, 'transition:fade');
      expect(result).toEqual(cleanedContent);
    });

    it('adds generic svelte internal import at top of <script>', () => {
      const content = '<script>' + "\n import {Box} from '@uui'" + '\n</script>';
      const finalContent =
        '<script>' +
        "\n import * as internal from 'svelte/internal'" +
        "\n import {Box} from '@uui'" +
        '\n</script>';
      const result = tPreproc.addImports(content);
      expect(result).toEqual(finalContent);
    });

    it('checks if svelte internal import already exists', () => {
      const content =
        '<script>' +
        "\n import * as internal from 'svelte/internal'" +
        "\n import {Box} from '@uui'" +
        '\n</script>';
      expect(tPreproc.checkForInternalImport(content)).toBe(true);
    });

    it('writes onMount with a function from svelte/internal that calls the transition function', () => {
      const content = '<script></script>';
      const finalContent =
        '<script>' +
        '\n internal.onMount(() => {' +
        '\n   const trans = transRef && internal.create_bidirectional_transition(transRef, fade, {}, true);' +
        '\n   trans.run(1);' +
        '\n });' +
        '\n</script>';
      const result = tPreproc.writeTransFnToScript(content, 'transition:fade', 'transRef');
      expect(result).toEqual(finalContent);
    });

    it('adds to already existing onMount()', () => {
      const content =
        '<script>' +
        "\n import {onMount} from 'svelte/internal'" +
        '\n onMount(() => {' +
        "\n   console.log('mounting');" +
        '\n });' +
        '\n</script>';

      const finalContent =
        '<script>' +
        "\n import {onMount} from 'svelte/internal'" +
        '\n onMount(() => {' +
        '\n   const trans = transRef && internal.create_bidirectional_transition(transRef, fade, {}, true);' +
        '\n   trans.run(1);\n' +
        "\n   console.log('mounting');" +
        '\n });' +
        '\n</script>';

      const result = tPreproc.writeTransFnToScript(content, 'transition:fade', 'transRef');
      expect(result).toEqual(finalContent);
    });

    it('finds ref already bounded to component', () => {
      const content = '<Button transition:fade bind:ref={refName}>InlineComponent</Button>';
      expect(tPreproc.getRef(content)).toEqual('refName');
    });

    it('adds a new ref to the script tag', () => {
      const content =
        '<script>' +
        "\n import {onMount} from 'svelte/internal'" +
        '\n onMount(() => {' +
        "\n   console.log('mounting');" +
        '\n });' +
        '\n</script>';

      const finalContent =
        '<script>' +
        "\n import {onMount} from 'svelte/internal'" +
        '\n onMount(() => {' +
        "\n   console.log('mounting');" +
        '\n });' +
        '\n' +
        '\n let transRef: HTMLElement;' +
        '\n</script>';
      const result = tPreproc.addRefToScript(content, 'transRef');
      expect(result).toEqual(finalContent);
    });

    it('adds a new ref to component tag', () => {
      const content = '<Box style="width: 1rem;">InlineComponent</Box>';
      const finalContent = '<Box style="width: 1rem;" bind:ref={transRef1}>InlineComponent</Box>';
      const result = tPreproc.addRefToCompTag(content, 'transRef1');
      expect(result).toEqual(finalContent);
    });
  });

  describe('markup tests', () => {
    let tPreproc: TransitionPreprocessor;
    beforeEach(() => {
      tPreproc = new TransitionPreprocessor();
    });

    it('handles multiple InlineComponents with transitions', () => {
      const content =
        '<script></script>' +
        '<div>Element</div>' +
        '<Button>InlineComponent</Button>' +
        '<Box transition:fade>InlineComponent</Box>' +
        '<Box transition:fade>InlineComponent</Box>' +
        '<style></style>';

      const final = {
        code:
          '<script>' +
          "\n import * as internal from 'svelte/internal'" +
          '\n let transRef1: HTMLElement;' +
          '\n' +
          '\n internal.onMount(() => {' +
          '\n   const trans = transRef2 && internal.create_bidirectional_transition(transRef2, fade, {}, true);' +
          '\n   trans.run(1);' +
          '\n' +
          '\n   const trans = transRef1 && internal.create_bidirectional_transition(transRef1, fade, {}, true);' +
          '\n   trans.run(1);' +
          '\n });' +
          '\n' +
          '\n let transRef2: HTMLElement;' +
          '\n</script>' +
          '<div>Element</div>' +
          '<Button>InlineComponent</Button>' +
          '<Box  bind:ref={transRef1}>InlineComponent</Box>' +
          '<Box  bind:ref={transRef2}>InlineComponent</Box>' +
          '<style></style>'
      };
      const result = tPreproc.markup({ content });
      expect(result).toEqual(final);
    });
  });
});
