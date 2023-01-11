import type { CssObject } from '../config/theme-config.types';

export type ThemeTypography = TypographyPalette;

export interface TypographyConfig {
  vars: TypographyVars;
  classes: CssObject;
}

export interface TypographyVars {
  [key: string]: string;
}

export interface TypographyPalette {
  global?: { fontFamily: string };
  h1?: TypographyPaletteValues;
  h2?: TypographyPaletteValues;
  h3?: TypographyPaletteValues;
  h4?: TypographyPaletteValues;
  h5?: TypographyPaletteValues;
  h6?: TypographyPaletteValues;
  body1?: TypographyPaletteValues;
  body2?: TypographyPaletteValues;
  subtitle1?: TypographyPaletteValues;
  subtitle2?: TypographyPaletteValues;
  caption?: TypographyPaletteValues;
  overline?: TypographyPaletteValues;
  inherit?: TypographyPaletteValues;
  button?: TypographyPaletteValues;
  [key: string]: TypographyPaletteValues;
}

export interface TypographyPaletteValues {
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textDecoration?: string;
  textTransform?: string;
  color?: string;
}
