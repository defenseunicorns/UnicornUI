export interface ThemedPalette {
	dark?: Palette;
	light?: Palette;
}

export interface Palette extends BaseColors<string> {
	on?: BaseColors<string>;
	text?: BaseColors<BaseTextColors>;
	[key: string]: string | BaseColors<BaseTextColors> | BaseColors<string>;
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
