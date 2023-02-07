import type {
  BaseScopedStyle,
  ScopedStyles
} from '../../../../../src/lib/shared/theme/config/theme-config.types';
import {
  makeStyles,
  jsToCSS,
  camelBackToDash
} from '../../../../../src/lib/shared/theme/config/theme-config.utils';
describe('makeStyles', () => {
  it('creates a css class string from ScopedStyles', () => {
    expect(makeStyles({ '.mdc-typography--custom-typography': { fontSize: '1.2px' } })).toBe(
      '.mdc-typography--custom-typography{font-size:1.2px;}'
    );
  });

  it('creates a css style from ScopedStyles', () => {
    expect(makeStyles({ 'body > h1': { color: 'pink', backgroundColor: 'red' } })).toBe(
      'body > h1{color:pink;background-color:red;}'
    );
  });

  it('replaces $self with the provided prefix', () => {
    const scopedStyle: ScopedStyles = {
      $self: {
        color: 'pink'
      }
    };
    expect(makeStyles(scopedStyle, '.prefix')).toBe('.prefix{color:pink;}');
  });

  it('handles nested css values', () => {
    const scopedStyle: ScopedStyles = {
      '@media screen (max-width: 600px)': {
        $self: {
          color: 'pink'
        },
        '.someClass': {
          color: 'blue'
        }
      }
    };
    expect(makeStyles(scopedStyle, '.prefix')).toBe(
      `@media screen (max-width: 600px){.prefix{color:pink;}.someClass{color:blue;}}`
    );
  });
});

describe('jsToCss', () => {
  const js: BaseScopedStyle = {
    fontSize: '16px',
    color: 'pink',
    backgroundColor: 'blue',
    paddingLeft: '10px'
  };
  it('Converts js properties to a css string', () => {
    expect(jsToCSS(js)).toBe('font-size:16px;color:pink;background-color:blue;padding-left:10px;');
  });
});

describe('camelBackToDash', () => {
  it('inserts dashes before capital letters', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });

  it('returns the dash separated string as lowercase.', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });
});
