import type { CssObject, CssProperties } from '../config/theme-config.types';

export type ThemeTypography = TypographyPalette;

export interface TypographyConfig {
  vars: TypographyVars;
  classes: CssObject;
}

export interface TypographyVars {
  [key: string]: string;
}

export interface TypographyPalette {
  global?: CssProperties;
  h1?: CssProperties;
  h2?: CssProperties;
  h3?: CssProperties;
  h4?: CssProperties;
  h5?: CssProperties;
  h6?: CssProperties;
  body1?: CssProperties;
  body2?: CssProperties;
  subtitle1?: CssProperties;
  subtitle2?: CssProperties;
  caption?: CssProperties;
  overline?: CssProperties;
  inherit?: CssProperties;
  button?: CssProperties;
  [key: string]: CssProperties;
}
