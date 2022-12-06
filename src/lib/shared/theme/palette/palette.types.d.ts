export type PreferredTheme = 'light' | 'dark' | undefined;

export interface Palettes {
	dark?: Palette;
	light?: Palette;
	shared?: Palette;
	[key: string]: Palette;
}
export type PaletteField = string | Palette;
export interface Palette extends ColorFields<ColorField> {
	on?: ColorFields<ColorField>;
	text?: ColorFields<ColorField>;
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
	on?: PaletteField;
	onLight?: string;
	onDark?: string;
	onBackground?: string;
	[key: string]: PaletteField;
}

export interface ThemeVars {
	[key: string]: string;
}
