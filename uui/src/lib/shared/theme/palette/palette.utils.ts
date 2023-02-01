import { camelBackToDash } from '../config/theme-config.utils';
import { UUI_PALETTES } from './default-palettes';
import type { PaletteField, Palette, Palettes, ThemeVars } from './palette.types';

const MDC_THEME_PREFIX = '--mdc-theme';

export function createPaletteMap(palettes: Palettes): Map<string, ThemeVars> {
  const paletteMap = new Map<string, ThemeVars>();
  Object.entries(palettes).forEach(([key, palette]: [string, Palette]) => {
    paletteMap.set(key, paletteToCssVars(palette));
  });
  return paletteMap;
}

export function paletteToCssVars(palette: Palette, prefix = ''): ThemeVars {
  let paletteCss: ThemeVars = {};
  Object.entries(palette).forEach((value: [string, PaletteField]) => {
    const [key, val] = value;
    const newPrefix = `${prefix}${camelBackToDash(key)}`;
    // Field type string
    if (typeof val === 'string') {
      paletteCss['--' + newPrefix] = val;
      paletteCss[`${MDC_THEME_PREFIX}-${newPrefix}`] = `var(--${newPrefix})`;
      // Field type palette recurse.
    } else {
      paletteCss = { ...paletteCss, ...paletteToCssVars(val, newPrefix + '-') };
    }
  });
  return paletteCss;
}
export function mergePalettes(override: Palettes, base: Palettes = UUI_PALETTES): Palettes {
  if (override === base) return base;
  for (const palette in base) {
    override[palette] = { ...base[palette], ...(override[palette] || {}) };
  }
  return override;
}
