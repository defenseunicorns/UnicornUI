import type { TypographyElements, TypographyVariant } from './typography.types';

export function getVariantClass(variant: TypographyVariant): string {
  let className = 'mdc-typography--';
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      className += `headline${variant[1]}`;
      break;
    default:
      className += variant;
  }
  return className;
}

export const typographyElementMapping: TypographyElements = {
  h1: { element: 'h1', class: getVariantClass('h1') },
  h2: { element: 'h2', class: getVariantClass('h2') },
  h3: { element: 'h3', class: getVariantClass('h3') },
  h4: { element: 'h4', class: getVariantClass('h4') },
  h5: { element: 'h5', class: getVariantClass('h5') },
  h6: { element: 'h6', class: getVariantClass('h6') },
  body1: { element: 'p', class: getVariantClass('body1') },
  body2: { element: 'p', class: getVariantClass('body2') },
  subtitle1: { element: 'h6', class: getVariantClass('subtitle1') },
  subtitle2: { element: 'h6', class: getVariantClass('subtitle2') },
  overline: { element: 'span', class: getVariantClass('overline') },
  caption: { element: 'span', class: getVariantClass('caption') },
  inherit: { element: 'span', class: getVariantClass('inherit') },
  button: { element: 'span', class: getVariantClass('button') }
};
