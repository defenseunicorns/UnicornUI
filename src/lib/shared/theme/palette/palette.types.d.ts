export type PreferredTheme = 'light' | 'dark' | undefined;

export interface Palettes {
	dark?: Palette;
	light?: Palette;
	shared?: Palette;
	[key: string]: Palette;
}
export type PaletteField = string | ColorFields<TextColorFields> | ColorFields<string>;
export interface Palette extends ColorFields<string> {
	on?: ColorFields<string>;
	text?: ColorFields<TextColorFields>;
	[key: string]: PaletteField;
}

export type ColorField = string | TextColorFields;
export interface ColorFields<ColorField> {
	primary?: ColorField;
	secondary?: ColorField;
	surface?: ColorField;
	background?: ColorField;
	success?: ColorField;
	warning?: ColorField;
	info?: ColorField;
	error?: ColorField;
	[key: string]: ColorField;
}

export interface TextColorFields {
	light?: string;
	dark?: string;
	background?: string;
	[key: string]: string;
}

export interface ThemeVars {
	[key: string]: string;
}
