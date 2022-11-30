export interface ThemeColors extends Palette {
	dark?: Palette;
	light?: Palette;
}

export interface Palette extends DefaultPalette {
	on?: DefaultPalette;
	text?: {
		primary?: TextPalette;
		secondary?: TextPalette;
		hint?: TextPalette;
		disabled?: TextPalette;
		icon?: TextPalette;
	};
}

export interface DefaultPalette {
	primary?: string;
	secondary?: string;
	surface?: string;
	background?: string;
	success?: string;
	warning?: string;
	info?: string;
}

export interface TextPalette {
	light?: string;
	dark?: string;
	background?: string;
}
