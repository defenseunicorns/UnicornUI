import type { CssProperties, CssObject } from './theme-config.types';

export function updateThemeStyle(themeStyle: CssObject, document?: Document) {
  document && addThemeStyleToHead(document, makeStyles(themeStyle));
}

export function addThemeStyleToHead(document: Document, typographyCss: string) {
  const ELEMENT_ID = 'uui-theme-css';
  let style = document.getElementById(ELEMENT_ID);
  if (style) {
    style.innerHTML = typographyCss;
  } else {
    style = document.createElement('style');
    style.setAttribute('id', ELEMENT_ID);
    style.setAttribute('type', 'text/css');
    style.innerHTML = typographyCss;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}

export function makeStyles(cssObj: CssObject): string {
  let css = '';
  Object.entries(cssObj).forEach(([key, val]: [string, CssProperties]) => {
    const classProperties = jsToCSS(val);
    css += `${key}{${classProperties}}`;
  });
  return css;
}

export function jsToCSS(js: CssProperties) {
  return Object.entries(js).reduce((prev: string, [key, val]: [string, string]) => {
    return `${prev}${camelBackToDash(key)}:${val};`;
  }, '');
}

export function camelBackToDash(camelBack: string): string {
  return camelBack.replaceAll(/[A-Z]/g, '-$&').trim().toLowerCase();
}
