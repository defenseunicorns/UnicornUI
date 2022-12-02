export type Palettes = Palette[];

export type PaletteField = string | BaseColors<BaseTextColors> | BaseColors<string>;
export interface Palette extends BaseColors<string> {
	on?: BaseColors<string>;
	text?: BaseColors<BaseTextColors>;
	id: string;
	[key: string]: PaletteField;
}

export type BaseColorType = string | BaseTextColors;
export interface BaseColors<BaseColorType> {
	primary?: BaseColorType;
	secondary?: BaseColorType;
	surface?: BaseColorType;
	background?: BaseColorType;
	success?: BaseColorType;
	warning?: BaseColorType;
	info?: BaseColorType;
	error?: BaseColorType;
	[key: string]: BaseColorType;
}

export interface BaseTextColors {
	light?: string;
	dark?: string;
	background?: string;
	[key: string]: string;
}
