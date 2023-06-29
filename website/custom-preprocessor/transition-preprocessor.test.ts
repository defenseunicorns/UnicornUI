import { TransitionPreprocessor } from './transition-preprocessor';

describe('turning transition: directives into style tags on Custom Components', () => {
  let tPreproc: TransitionPreprocessor;

  beforeEach(() => {
    tPreproc = new TransitionPreprocessor();
  });

  // it('does not find InlineComponent', () => {
  //   const content = '<script></script>' + '<div>Element</div>' + '<button>InlineComponent</button>';
  //   const result = transitionPreprocessor({ content });
  //   expect(result).toBe(false);
  // });

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
    const content = '<Button transition:fade={params}>InlineComponent</Button>';
    const result = tPreproc.getTransition(content, 8);
    expect(result).toBe('transition:fade={params}');
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

  it('finds style attribute in content', () => {
    const openingCompTag = '<Button transition:fade style="width: 1rem;">';
    const result = tPreproc.hasStyleAttr(openingCompTag);
    expect(result).toBe(true);
  });

  // it('finds InlineComponent and transition: directive', () => {
  //   const content =
  //     '<script></script>' +
  //     '<div>Element</div>' +
  //     '<Button transition:fade style="width: 1rem;">InlineComponent</Button>' +
  //     '<style></style>';
  //   const result = transitionPreprocessor({ content });
  //   expect(result).toBe(true);
  // });

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
});
