export type PreferredTheme = SupportedThemes | undefined;

export type SupportedThemes = 'light' | 'dark';

export type Palettes = {
  dark?: Palette;
  light?: Palette;
};

export type Palette = {
  primary?: PaletteField;
  secondary?: PaletteField;
  surface?: PaletteField;
  background?: PaletteField;
  success?: PaletteField;
  warning?: PaletteField;
  info?: PaletteField;
  error?: PaletteField;
} & { [key: string]: PaletteField };

export type PaletteField = (
  | string
  | { [key: string]: string }
  | { [key: string]: PaletteField }
  | { [key: string]: TextColor }
) &
  Palette;

export type TextColor =
  | (
      | {
          onLight?: string;
          onDark?: string;
          onBackground?: string;
        }
      | {
          on?: {
            dark?: string;
            light?: string;
            background?: string;
          };
        }
    ) &
      PaletteField;

export interface ThemeVars {
  [key: string]: string;
}
