import { TransitionPreprocessor } from './transition-preprocessor';

describe('preprocessing transition directives passed to custom components (i.e. <Box>)', () => {
  describe('helper functions', () => {
    let tPreproc: TransitionPreprocessor;

    beforeEach(() => {
      tPreproc = new TransitionPreprocessor();
    });

    it('finds InlineComponent', () => {
      const content =
        '<script></script>' +
        '<div>Element</div>' +
        '<Button>InlineComponent</Button>' +
        '<style></style>';
      const result = tPreproc.getInlineCompOpenTag(content);
      expect(result).toBe('<Button>');
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
      const content =
        '<script></script>' +
        '<div>Element</div>' +
        '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
        '<style></style>';
      const cleanedContent =
        '<script></script>' +
        '<div>Element</div>' +
        '<Button  style="width: 1rem;">InlineComponent</Button>' +
        '<style></style>';
      const result = tPreproc.removeTransFromCompTag(content, 'transition:fade');
      expect(result).toEqual(cleanedContent);
    });

    it('adds generic svelte internal import at top of <script>', () => {
      const content =
        '<script>' +
        "\n import {Box} from '@uui'" +
        '\n</script>' +
        '<div>Element</div>' +
        '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
        '<style></style>';
      const finalContent =
        '<script>' +
        "\n import * as internal from 'svelte/internal'" +
        "\n import {Box} from '@uui'" +
        '\n</script>' +
        '<div>Element</div>' +
        '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
        '<style></style>';
      const result = tPreproc.addImports(content);
      expect(result).toEqual(finalContent);
    });

    it('writes onMount with a function from svelte/internal that calls the transition function', () => {
      const content =
        '<script></script>' +
        '<div>Element</div>' +
        '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
        '<style></style>';
      const finalContent =
        '<script>' +
        "\n import * as internal from 'svelte/internal'" +
        '\n internal.onMount(() => {' +
        '\n const trans = boxRef && internal.create_bidirectional_transition(boxRef, fade, {}, true);' +
        '\n trans.run(1);' +
        '\n });' +
        '\n</script>' +
        '<div>Element</div>' +
        '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
        '<style></style>';
      const result = tPreproc.writeToScript(content, 'transition:fade');
      expect(result).toEqual(finalContent);
    });

    // it('adds to already existing onMount()', () => {
    //   const content =
    //     '<script>' +
    //     "\n import {onMount} from 'svelte/internal'" +
    //     '\n onMount(() => {' +
    //     "\n   console.log('mounting'); " +
    //     '\n   const trans = boxRef && internal.create_bidirectional_transition(boxRef, fade, {}, true);' +
    //     '\n   trans.run(1);' +
    //     '\n });' +
    //     '</script>' +
    //     '<div>Element</div>' +
    //     '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
    //     '<style></style>';

    //   const finalContent =
    //     '<script>' +
    //     "\n import * as internal from 'svelte/internal'" +
    //     "\n import {onMount} from 'svelte/internal'" +
    //     '\n onMount(() => {' +
    //     "\n   console.log('mounting'); " +
    //     '\n   const trans = boxRef && internal.create_bidirectional_transition(boxRef, fade, {}, true);' +
    //     '\n   trans.run(1);' +
    //     '\n });' +
    //     '\n</script>' +
    //     '<div>Element</div>' +
    //     '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
    //     '<style></style>';

    //   const result = tPreproc.writeToScript(content, 'transition:fade');
    //   expect(result).toEqual(finalContent);
    // });
  });

  // describe('markup tests', () => {
  //   let tPreproc: TransitionPreprocessor;
  //   beforeEach(() => {
  //     tPreproc = new TransitionPreprocessor();
  //   });

  //   it('finds InlineComponents Recursively', () => {
  //     const content =
  //       '<script></script>' +
  //       '<div>Element</div>' +
  //       '<Button>InlineComponent</Button>' +
  //       '<Box>InlineComponent</Box>' +
  //       '<style></style>';
  //     const result = tPreproc.markup({ content });
  //     expect(result).toBe('<Button>');
  //   });
  // });
});
