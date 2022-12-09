import {
  createPaletteMap,
  paletteToCssVars,
  camelBackToDash
} from '../../../../../src/lib/shared/theme/palette/palette.utils';

describe('camelBackToDash', () => {
  it('inserts dashes before capital letters', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });

  it('returns the dash separated string as lowercase.', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });
});
describe('createPaletteMap', () => {
  it('creates a map with key (name) and value (ThemeVars) given Palettes', () => {
    const paletteMap = createPaletteMap({
      test: { primary: 'pink', on: { primary: 'black' } },
      test2: { primary: 'purple', on: { primary: 'white' } }
    });
    expect(paletteMap.get('test')).toStrictEqual({
      '--mdc-theme-primary': 'pink',
      '--mdc-theme-on-primary': 'black'
    });
    expect(paletteMap.get('test2')).toStrictEqual({
      '--mdc-theme-primary': 'purple',
      '--mdc-theme-on-primary': 'white'
    });
  });
});
describe('paletteToCssVars', () => {
  it('converts DefaultPalette values into a css string given a Palette Object', () => {
    const paletteVars = paletteToCssVars({
      primary: '#68c4ff',
      secondary: '#787ff6'
    });
    expect(paletteVars).toStrictEqual({
      '--mdc-theme-primary': '#68c4ff',
      '--mdc-theme-secondary': '#787ff6'
    });
  });

  it('converts on-values to the correct css variables', () => {
    const paletteVars = paletteToCssVars({
      on: {
        primary: 'black',
        secondary: 'white'
      }
    });
    expect(paletteVars).toStrictEqual({
      '--mdc-theme-on-primary': 'black',
      '--mdc-theme-on-secondary': 'white'
    });
  });

  it('handles nested or camelBack fields', () => {
    const paletteVars = paletteToCssVars({
      onPrimary: 'black',
      onSecondary: 'white',
      text: {
        primary: {
          onDark: 'pink',
          on: {
            light: 'black'
          }
        },
        secondaryOnDark: 'yellow'
      }
    });
    expect(paletteVars).toStrictEqual({
      '--mdc-theme-on-primary': 'black',
      '--mdc-theme-on-secondary': 'white',
      '--mdc-theme-text-primary-on-dark': 'pink',
      '--mdc-theme-text-primary-on-light': 'black',
      '--mdc-theme-text-secondary-on-dark': 'yellow'
    });
  });

  it('converts text-values to the correct css variables', () => {
    const paletteVars = paletteToCssVars({
      text: {
        primary: {
          onDark: 'white',
          onLight: 'black',
          onBackground: 'white'
        }
      }
    });

    expect(paletteVars).toStrictEqual({
      '--mdc-theme-text-primary-on-dark': 'white',
      '--mdc-theme-text-primary-on-light': 'black',
      '--mdc-theme-text-primary-on-background': 'white'
    });
  });
});
