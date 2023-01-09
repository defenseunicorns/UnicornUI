import { camelBackToDash } from '../config/theme-config.utils';
import type { Palette, Palettes, ThemeVars } from './palette.types';

const MDC_THEME_PREFIX = '--mdc-theme';

export function createPaletteMap(palettes: Palettes): Map<string, ThemeVars> {
  const paletteMap = new Map<string, ThemeVars>();
  Object.entries(palettes).forEach(([key, palette]: [string, Palette]) => {
    paletteMap.set(key, paletteToCssVars(palette));
  });
  return paletteMap;
}

export function paletteToCssVars(palette: Palette, prefix = MDC_THEME_PREFIX): ThemeVars {
  let paletteCss: ThemeVars = {};
  Object.entries(palette).forEach((value: [string, Palette]) => {
    const [key, val] = value;
    const newPrefix = `${prefix}-${camelBackToDash(key)}`;
    // Field type string
    if (typeof val === 'string') {
      paletteCss[newPrefix] = val;
      // Field type palette recurse.
    } else {
      paletteCss = { ...paletteCss, ...paletteToCssVars(val, newPrefix) };
    }
  });
  return paletteCss;
}
