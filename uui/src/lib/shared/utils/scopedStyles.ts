import type { ScopedStyles } from '../theme/config/theme-config.types';
import { addThemeStyleToHead } from '../theme/config/theme-config.utils';
import { v4 as uuid } from 'uuid';
import { StyleBuilder } from '../theme/config/StyleBuilder';

// https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
function hashCode(str: string) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export function scopedStyles(el: Element, jss?: ScopedStyles) {
  // Generate element instance uuid (hash to shorten)
  const scopedClass = `uui-${hashCode(uuid())}`;
  // Conditional classes remove the hashed uuid. when applied
  // need to watch for changes to the elements class attribute.
  let mutationObserver: MutationObserver;

  // Executes when there is a change to the el class.
  function callback() {
    // Only add the scoped class back in if it is missing.
    if (!el.className.includes(scopedClass))
      el.setAttribute('class', `${el.className} ${scopedClass}`);
  }

  if (jss) {
    // create the styles from the provided jss
    const styles = new StyleBuilder(jss, scopedClass).parse();
    // initially updated the with the scoped class.
    el.setAttribute('class', `${el.className} ${scopedClass}`);
    // add style to head with id="hash"
    addThemeStyleToHead(document, styles, scopedClass);
    // instantiate the mutation observer with callback;
    mutationObserver = new MutationObserver(callback);
    // set the mutation observer to look for changes to the class attribute
    mutationObserver.observe(el, { attributeFilter: ['class'] });
  }

  return {
    destroy: () => {
      // Remove the listener
      mutationObserver?.disconnect();
      // Remove the generated css from the head
      document.getElementById(scopedClass)?.remove();
    }
  };
}
