import type {
  ThemeTypography,
  TypographyConfig
} from '../../../../../src/lib/shared/theme/typography-config/typography-config.types';
import {
  createMDCTypographyClassName,
  createTypographyConfig,
  createTypographyConfigClass,
  createUUITypographyClassName
} from '../../../../../src/lib/shared/theme/typography-config/typography-config.utils';

let typographyConfig: TypographyConfig;
const testTypography: ThemeTypography = {
  global: { fontFamily: 'roboto' },
  h1: {
    fontFamily: 'roboto',
    fontSize: '6rem',
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: '-.015625em',
    lineHeight: '6rem',
    textDecoration: 'inherit',
    textTransform: 'inherit'
  },
  customTypography: {
    fontFamily: 'roboto',
    fontSize: '6rem',
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: '-.015625em',
    lineHeight: '6rem',
    textDecoration: 'inherit',
    textTransform: 'inherit'
  }
};

beforeAll(() => {
  typographyConfig = createTypographyConfig(testTypography);
});

describe.concurrent('createTypographyConfig', () => {
  it('returns a TypographyConfig given a Typography object', () => {
    expect(typographyConfig.classes).toBeDefined();
    expect(typographyConfig.vars).toBeDefined();
  });

  it('creates theme typography vars from given typography object', () => {
    expect(Object.entries(typographyConfig.vars)[2]).toStrictEqual(['--h1-font-family', 'roboto']);
  });

  it('creates mdc typography vars from the given Typography object', () => {
    expect(Object.entries(typographyConfig.vars)[3]).toStrictEqual([
      '--mdc-typography-h1-font-family',
      'var(--h1-font-family)'
    ]);
  });

  describe('Create TypographyConfig.classes', () => {
    it('creates mdc and uui typography classes', () => {
      expect(Object.keys(typographyConfig.classes)[1]).toBe('.mdc-typography--headline1,.h1');
    });

    it('creates custom css classes from the given typography object', () => {
      expect(Object.entries(typographyConfig.classes)[2]).toStrictEqual([
        '.mdc-typography--custom-typography,.custom-typography',
        {
          'font-family': 'var(--custom-typography-font-family, roboto)',
          'font-size': 'var(--custom-typography-font-size, 6rem)',
          'font-style': 'var(--custom-typography-font-style, normal)',
          'font-weight': 'var(--custom-typography-font-weight, 300)',
          'letter-spacing': 'var(--custom-typography-letter-spacing, -.015625em)',
          'line-height': 'var(--custom-typography-line-height, 6rem)',
          'text-decoration': 'var(--custom-typography-text-decoration, inherit)',
          'text-transform': 'var(--custom-typography-text-transform, inherit)'
        }
      ]);
    });
  });
});

describe('Creating Typography Classnames', () => {
  describe('createConfigTypographyClass', () => {
    it('creates a class name with the mdc and uui shorthand typography class', () => {
      expect(createTypographyConfigClass('h1')).toBe('.mdc-typography--headline1,.h1');
    });
  });

  describe('createUUIClassName', () => {
    it('returns the dashed name of the provided typography from typography config', () => {
      expect(createUUITypographyClassName('someCustomTypography')).toBe('some-custom-typography');
      expect(createUUITypographyClassName('h1')).toBe('h1');
    });
  });

  describe('createMDCClassName', () => {
    it('returns the dashed name of provided typography with the mdc prefix', () => {
      expect(createMDCTypographyClassName('body')).toBe('mdc-typography--body');
    });

    it('transforms headline values to match the MDC syntax', () => {
      expect(createMDCTypographyClassName('h1')).toBe('mdc-typography--headline1');
    });
  });
});
