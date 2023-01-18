import { createTypographyVariantClass } from '../shared/theme/typography-config/typography-config.utils';
import type { TypographyElements } from './typography.types';

export const typographyElementMapping: TypographyElements = {
  h1: { element: 'h1', class: createTypographyVariantClass('h1') },
  h2: { element: 'h2', class: createTypographyVariantClass('h2') },
  h3: { element: 'h3', class: createTypographyVariantClass('h3') },
  h4: { element: 'h4', class: createTypographyVariantClass('h4') },
  h5: { element: 'h5', class: createTypographyVariantClass('h5') },
  h6: { element: 'h6', class: createTypographyVariantClass('h6') },
  body1: { element: 'p', class: createTypographyVariantClass('body1') },
  body2: { element: 'p', class: createTypographyVariantClass('body2') },
  subtitle1: { element: 'h6', class: createTypographyVariantClass('subtitle1') },
  subtitle2: { element: 'h6', class: createTypographyVariantClass('subtitle2') },
  overline: { element: 'span', class: createTypographyVariantClass('overline') },
  caption: { element: 'span', class: createTypographyVariantClass('caption') },
  inherit: { element: 'span', class: createTypographyVariantClass('inherit') },
  button: { element: 'span', class: createTypographyVariantClass('button') }
};
