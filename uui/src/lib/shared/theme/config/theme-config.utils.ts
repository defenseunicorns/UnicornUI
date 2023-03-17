import type { SupportedThemes } from '../palette/palette.types';
import type { BaseScopedStyle, CssProperties } from './theme-config.types';

export function updateThemeStyle(themeStyle: BaseScopedStyle, document?: Document) {
  document && addThemeStyleToHead(document, makeStyles(themeStyle));
}

export function updateDataTheme(document: Document, theme: SupportedThemes): void {
  document && (document.documentElement.dataset.theme = theme);
}

export function addThemeStyleToHead(
  document: Document,
  typographyCss: string,
  elementId = 'uui-theme-css'
) {
  let style = document.getElementById(elementId);
  if (style) {
    style.innerHTML = typographyCss;
  } else {
    style = document.createElement('style');
    style.setAttribute('id', elementId);
    style.setAttribute('type', 'text/css');
    style.innerHTML = typographyCss;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}

export function makeStyles(cssObj: BaseScopedStyle, prefix = ''): string {
  let css = '';
  Object.entries(cssObj).forEach(([key, val]: [string, BaseScopedStyle]) => {
    const classProperties = jsToCSS(val as CssProperties);
    css += `${key}{${classProperties}}`.replaceAll('$self', prefix);
  });
  return css;
}

// # Deprecated
// Keeping for now until replacement from StyleBuilder.
export function jsToCSS(js: CssProperties) {
  return Object.entries(js).reduce(
    (prev: string, [key, val]: [string, string]) => `${prev}${camelBackToDash(key)}:${val};`,
    ''
  );
}

export function camelBackToDash(camelBack: string): string {
  return camelBack.replaceAll(/[A-Z]/g, '-$&').trim().toLowerCase();
}
