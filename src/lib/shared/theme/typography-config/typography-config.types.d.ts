export type ThemeTypography = TypographyPalette & {
  [key: string]: TypographyPaletteValues;
};

export interface TypographyConfig {
  vars: TypographyVars;
  classes: TypographyClasses;
}

export interface TypographyVars {
  [key: string]: string;
}
export interface TypographyClasses {
  [key: string]: Record<string, string>;
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
}
