import {
  makeStyles,
  jsToCSS,
  camelBackToDash
} from '../../../../../src/lib/shared/theme/config/theme-config.utils';
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

describe('camelBackToDash', () => {
  it('inserts dashes before capital letters', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });

  it('returns the dash separated string as lowercase.', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });
});
