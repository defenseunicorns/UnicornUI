import type {
	ColorFields,
	TextColorFields,
	PaletteField,
	Palette,
	Palettes,
	ThemeVars
} from './palette.types';

export function createThemeStyle(palettes: Palettes): Map<string, ThemeVars> {
	const paletteMap = new Map<string, ThemeVars>();
	palettes.forEach((palette: Palette) => {
		paletteMap.set(palette.id, paletteToCssVars(palette));
	});
	return paletteMap;
}

export function paletteToCssVars(palette: Palette, prefix = '--mdc-theme-'): ThemeVars {
	let paletteCss: ThemeVars = {};
	Object.entries(palette).forEach((value: [string, PaletteField]) => {
		const [key, val] = value;
		// Field type string
		if (key === 'id') return;
		if (typeof val === 'string') {
			paletteCss[`${prefix}${key}`] = val;
		}
		// Field types BaseColors<string> | BaseColors<BaseTextColors>
		else if (isColorFields(val)) {
			paletteCss = { ...paletteCss, ...baseColorsToCssVars(val, `${prefix}${key}-`) };
		}
	});
	return paletteCss;
}

export function baseColorsToCssVars(
	baseColors: ColorFields<string | TextColorFields>,
	prefix: string
): ThemeVars {
	let baseColorsCss: ThemeVars = {};
	if (isTextColorFields(baseColors)) {
		baseColorsCss = { ...baseColorsCss, ...textPaletteToCssVars(baseColors) };
	} else {
		baseColorsCss = { ...baseColorsCss, ...paletteToCssVars(baseColors as Palette, prefix) };
	}
	return baseColorsCss;
}

export function textPaletteToCssVars(
	palette: ColorFields<TextColorFields>,
	prefix = '--mdc-theme-text-'
): ThemeVars {
	const paletteCss: ThemeVars = {};
	Object.entries(palette).forEach((value: [string, TextColorFields]) => {
		const [baseColorKey, baseTextColors] = value;
		Object.entries(baseTextColors).forEach((baseTextColor: [string, string]) => {
			const [textColorKey, textColorValue] = baseTextColor;
			paletteCss[`${prefix}${baseColorKey}-on-${textColorKey}`] = textColorValue;
		});
	});
	return paletteCss;
}

function isColorFields(
	object: Record<string, PaletteField>
): object is ColorFields<string | TextColorFields> {
	const objectValue = Object.values(object).at(0);
	return (
		objectValue !== undefined && (typeof objectValue === 'string' || isTextColorFields(object))
	);
}

export function isTextColorFields(
	object: Record<string, PaletteField>
): object is ColorFields<TextColorFields> {
	const objectValue = Object.values(object).at(0);
	return (
		objectValue !== undefined &&
		typeof objectValue === 'object' &&
		typeof Object.values(objectValue).at(0) === 'string'
	);
}
