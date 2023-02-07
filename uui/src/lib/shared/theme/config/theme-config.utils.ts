import type { BaseScopedStyle, ScopedStyles } from './theme-config.types';

export function updateThemeStyle(themeStyle: ScopedStyles, document?: Document) {
  document && addThemeStyleToHead(document, makeStyles(themeStyle));
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

export function makeStyles(cssObj: ScopedStyles, prefix = ''): string {
  let css = '';
  Object.entries(cssObj).forEach(([key, val]: [string, BaseScopedStyle]) => {
    const classProperties = jsToCSS(val);
    css += `${key}{${classProperties}}`.replaceAll('$self', prefix);
  });
  return css;
}

export function jsToCSS(js: BaseScopedStyle) {
  return Object.entries(js).reduce((prev: string, [key, val]: [string, BaseScopedStyle]) => {
    if (typeof val === 'object') {
      return `${prev}${makeStyles({ $self: val }, key)}`;
    }
    return `${prev}${camelBackToDash(key)}:${val};`;
  }, '');
}

export function camelBackToDash(camelBack: string): string {
  return camelBack.replaceAll(/[A-Z]/g, '-$&').trim().toLowerCase();
}
