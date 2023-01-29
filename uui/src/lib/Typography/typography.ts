import { createMDCTypographyClassName } from '../shared/theme/typography-config/typography-config.utils';
import type { TypographyElements } from './typography.types';

export const typographyElementMapping: TypographyElements = {
  h1: { element: 'h1', class: createMDCTypographyClassName('h1') },
  h2: { element: 'h2', class: createMDCTypographyClassName('h2') },
  h3: { element: 'h3', class: createMDCTypographyClassName('h3') },
  h4: { element: 'h4', class: createMDCTypographyClassName('h4') },
  h5: { element: 'h5', class: createMDCTypographyClassName('h5') },
  h6: { element: 'h6', class: createMDCTypographyClassName('h6') },
  body1: { element: 'p', class: createMDCTypographyClassName('body1') },
  body2: { element: 'p', class: createMDCTypographyClassName('body2') },
  subtitle1: { element: 'h6', class: createMDCTypographyClassName('subtitle1') },
  subtitle2: { element: 'h6', class: createMDCTypographyClassName('subtitle2') },
  overline: { element: 'span', class: createMDCTypographyClassName('overline') },
  caption: { element: 'span', class: createMDCTypographyClassName('caption') },
  inherit: { element: 'span', class: createMDCTypographyClassName('inherit') },
  button: { element: 'span', class: createMDCTypographyClassName('button') }
};
