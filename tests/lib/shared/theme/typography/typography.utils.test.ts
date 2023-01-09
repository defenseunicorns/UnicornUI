import type {
  ThemeTypography,
  TypographyConfig
} from '../../../../../src/lib/shared/theme/typography-config/typography-config.types';
import {
  createTypographyConfig,
  makeStyles,
  jsToCSS
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
describe('createTypographyConfig', () => {
  it('returns a TypographyConfig given a Typography object', () => {
    expect(typographyConfig.classes).toBeDefined();
    expect(typographyConfig.vars).toBeDefined();
  });

  it('creates mdc typography vars from the given Typography object', () => {
    expect(Object.entries(typographyConfig.vars)[1]).toStrictEqual([
      '--mdc-typography-h1-font-family',
      'roboto'
    ]);
  });

  describe('Create TypographyConfig.classes', () => {
    it('replaces "h" tags with headline to match mdc classes', () => {
      expect(Object.keys(typographyConfig.classes)[1]).toBe('.mdc-typography--headline1');
    });

    it('creates custom css classes from the given typography object', () => {
      expect(Object.entries(typographyConfig.classes)[2]).toStrictEqual([
        '.mdc-typography--custom-typography',
        {
          'font-family': 'var(--mdc-typography-custom-typography-font-family, roboto)',
          'font-size': 'var(--mdc-typography-custom-typography-font-size, 6rem)',
          'font-style': 'var(--mdc-typography-custom-typography-font-style, normal)',
          'font-weight': 'var(--mdc-typography-custom-typography-font-weight, 300)',
          'letter-spacing': 'var(--mdc-typography-custom-typography-letter-spacing, -.015625em)',
          'line-height': 'var(--mdc-typography-custom-typography-line-height, 6rem)',
          'text-decoration': 'var(--mdc-typography-custom-typography-text-decoration, inherit)',
          'text-transform': 'var(--mdc-typography-custom-typography-text-transform, inherit)'
        }
      ]);
    });
  });
});

describe('makeStyles', () => {
  it('creates a css class string from cssObject', () => {
    expect(makeStyles({ '.mdc-typography--custom-typography': { 'font-size': '1.2px' } })).toBe(
      '.mdc-typography--custom-typography{font-size:1.2px;}'
    );
  });

  it('creates a css style from cssObject', () => {
    expect(makeStyles({ 'body > h1': { color: 'pink', backgroundColor: 'red' } })).toBe(
      'body > h1{color:pink;background-color:red;}'
    );
  });
});

describe('jsToCss', () => {
  const js: Record<string, string> = {
    fontSize: '16px',
    color: 'pink',
    backgroundColor: 'blue',
    paddingLeft: '10px'
  };
  it('Converts js properties to a css string', () => {
    expect(jsToCSS(js)).toBe('font-size:16px;color:pink;background-color:blue;padding-left:10px;');
  });
});
