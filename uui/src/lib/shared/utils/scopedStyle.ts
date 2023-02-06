import type { ScopedStyles } from '../theme/config/theme-config.types';
import { addThemeStyleToHead, makeStyles } from '../theme/config/theme-config.utils';
import { v4 as uuid } from 'uuid';

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export function scopedStyles(el: Element, css?: ScopedStyles) {
  const hash = `uui-${hashCode(uuid())}`;
  let mutationObserver: MutationObserver;

  function callback() {
    if (!el.className.includes(hash)) el.setAttribute('class', `${el.className} ${hash}`);
  }

  if (css) {
    el.setAttribute('class', `${el.className} ${hash}`);
    const styles = makeStyles(css, `.${hash}`);
    addThemeStyleToHead(document, styles, hash);
    mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(el, { attributeFilter: ['class'] });
  }

  return {
    destroy: () => {
      mutationObserver?.disconnect();
      document.getElementById(hash)?.remove();
    }
  };
}
