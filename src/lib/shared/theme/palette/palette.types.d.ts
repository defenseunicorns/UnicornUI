export type PreferredTheme = 'light' | 'dark' | undefined;

export type Palettes = {
  dark?: Palette;
  light?: Palette;
  shared?: Palette;
} & {
  [key: string]: Palette;
};

export type Palette =
  | string
  | (BasePalette & {
      on?: Palette;
      text?: Palette;
    } & { [key: string]: Palette });

export type BasePalette = (
  | string
  | { [key: string]: string }
  | { [key: string]: BasePalette }
  | { [key: string]: TextColor }
) &
  ColorFields;

export type ColorFields =
  | {
      primary?: BasePalette;
      secondary?: BasePalette;
      surface?: BasePalette;
      background?: BasePalette;
      success?: BasePalette;
      warning?: BasePalette;
      info?: BasePalette;
      error?: BasePalette;
    }
  | { [key: string]: TextColor };

export type TextColor =
  | ({
      onLight?: string;
      onDark?: string;
      onBackground?: string;
    } & { [key: string]: string })
  | {
      on: {
        dark?: string;
        light?: string;
        background?: string;
      } & { [key: string]: string };
    };

export interface ThemeVars {
  [key: string]: string;
}
