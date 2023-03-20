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
  return mergeDeep(base, override) as Palettes;
}

/**
 * https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mergeDeep(...objects: any[]): object {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isObject = (obj: any) => obj && typeof obj === 'object';

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
}
