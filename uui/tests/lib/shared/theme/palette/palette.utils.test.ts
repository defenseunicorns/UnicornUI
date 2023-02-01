import { UUI_PALETTES } from '../../../../../src/lib/shared/theme/palette/default-palettes';
import type { Palettes } from '../../../../../src/lib/shared/theme/palette/palette.types';
import {
  createPaletteMap,
  mergePalettes,
  paletteToCssVars
} from '../../../../../src/lib/shared/theme/palette/palette.utils';

describe('createPaletteMap', () => {
  it('creates a map with key (name) and value (ThemeVars) given Palettes', () => {
    const paletteMap = createPaletteMap({
      test: { primary: 'pink', on: { primary: 'black' } },
      test2: { primary: 'purple', on: { primary: 'white' } }
    });
    expect(paletteMap.get('test')).toStrictEqual({
      '--primary': 'pink',
      '--mdc-theme-primary': 'var(--primary)',
      '--on-primary': 'black',
      '--mdc-theme-on-primary': 'var(--on-primary)'
    });
    expect(paletteMap.get('test2')).toStrictEqual({
      '--primary': 'purple',
      '--mdc-theme-primary': 'var(--primary)',
      '--on-primary': 'white',
      '--mdc-theme-on-primary': 'var(--on-primary)'
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
      '--primary': '#68c4ff',
      '--mdc-theme-primary': 'var(--primary)',
      '--secondary': '#787ff6',
      '--mdc-theme-secondary': 'var(--secondary)'
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
      '--on-primary': 'black',
      '--mdc-theme-on-primary': 'var(--on-primary)',
      '--on-secondary': 'white',
      '--mdc-theme-on-secondary': 'var(--on-secondary)'
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
      '--on-primary': 'black',
      '--mdc-theme-on-primary': 'var(--on-primary)',
      '--on-secondary': 'white',
      '--mdc-theme-on-secondary': 'var(--on-secondary)',
      '--text-primary-on-dark': 'pink',
      '--mdc-theme-text-primary-on-dark': 'var(--text-primary-on-dark)',
      '--text-primary-on-light': 'black',
      '--mdc-theme-text-primary-on-light': 'var(--text-primary-on-light)',
      '--text-secondary-on-dark': 'yellow',
      '--mdc-theme-text-secondary-on-dark': 'var(--text-secondary-on-dark)'
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
      '--text-primary-on-dark': 'white',
      '--mdc-theme-text-primary-on-dark': 'var(--text-primary-on-dark)',
      '--text-primary-on-light': 'black',
      '--mdc-theme-text-primary-on-light': 'var(--text-primary-on-light)',
      '--text-primary-on-background': 'white',
      '--mdc-theme-text-primary-on-background': 'var(--text-primary-on-background)'
    });
  });
});

describe('mergePalettes', () => {
  it('applies the base palettes first', () => {
    const basePalettes: Palettes = {
      shared: { primary: 'pink' },
      dark: { secondary: 'purple' },
      light: { primary: 'yellow' }
    };
    const customPalettes: Palettes = {
      shared: { primary: 'purple' },
      dark: { secondary: 'blue' },
      light: { primary: 'pink' }
    };

    expect(mergePalettes(customPalettes, basePalettes)).toEqual({
      shared: { primary: 'purple' },
      dark: { secondary: 'blue' },
      light: { primary: 'pink' }
    });
  });
  it('adds the missing base palettes', () => {
    const basePalettes: Palettes = {
      shared: { primary: 'pink' },
      dark: { secondary: 'purple' },
      light: { primary: 'yellow' }
    };
    const customPalettes: Palettes = { shared: { primary: 'purple' }, dark: { secondary: 'blue' } };

    expect(mergePalettes(customPalettes, basePalettes).light).toEqual({ primary: 'yellow' });
  });

  it('adds the missing base fields', () => {
    const basePalettes: Palettes = {
      shared: { primary: 'pink' },
      dark: { secondary: 'purple' },
      light: { primary: 'yellow', secondary: 'blue' }
    };
    const customPalettes: Palettes = {
      shared: { primary: 'purple' },
      dark: { secondary: 'blue' },
      light: { primary: 'pink' }
    };

    expect(mergePalettes(customPalettes, basePalettes)).toEqual({
      shared: { primary: 'purple' },
      dark: { secondary: 'blue' },
      light: { primary: 'pink', secondary: 'blue' }
    });
  });

  it('returns the base if the override and base reference the same object', () => {
    const basePalettes: Palettes = {
      shared: { primary: 'pink' },
      dark: { secondary: 'purple' },
      light: { primary: 'yellow' }
    };
    expect(mergePalettes(basePalettes, basePalettes)).toBe(basePalettes);
  });

  it('uses UUI_Palettes as the default base', () => {
    expect(mergePalettes(UUI_PALETTES)).toBe(UUI_PALETTES);
  });
});
