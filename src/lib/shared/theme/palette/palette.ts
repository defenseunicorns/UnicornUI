import type { BaseColors, BaseTextColors, PaletteField, Palette, Palettes } from './palette.types';

export function createThemeStyle(palettes: Palettes): Map<string, Record<string, string>> {
	const paletteMap = new Map<string, Record<string, string>>();
	palettes.forEach((palette: Palette) => {
		paletteMap.set(palette.id, paletteToCssVars(palette));
	});
	return paletteMap;
}

export function paletteToCssVars(
	palette: Palette,
	prefix = '--mdc-theme-'
): Record<string, string> {
	let paletteCss: Record<string, string> = {};
	Object.entries(palette).forEach((value: [string, PaletteField]) => {
		const [key, val] = value;
		// Field type string
		if (key === 'id') return;
		if (typeof val === 'string') {
			paletteCss[`${prefix}${key}`] = val;
		}
		// Field types BaseColors<string> | BaseColors<BaseTextColors>
		else if (isBaseColorType(val)) {
			paletteCss = { ...paletteCss, ...baseColorsToCssVars(val, `${prefix}${key}-`) };
		}
	});
	return paletteCss;
}

export function baseColorsToCssVars(
	baseColors: BaseColors<string | BaseTextColors>,
	prefix: string
): Record<string, string> {
	let baseColorsCss: Record<string, string> = {};
	if (isBaseTextColor(baseColors)) {
		baseColorsCss = { ...baseColorsCss, ...textPaletteToCssVars(baseColors) };
	} else {
		baseColorsCss = { ...baseColorsCss, ...paletteToCssVars(baseColors as Palette, prefix) };
	}
	return baseColorsCss;
}

export function textPaletteToCssVars(
	palette: BaseColors<BaseTextColors>,
	prefix = '--mdc-theme-text-'
): Record<string, string> {
	const paletteCss: Record<string, string> = {};
	Object.entries(palette).forEach((value: [string, BaseTextColors]) => {
		const [baseColorKey, baseTextColors] = value;
		Object.entries(baseTextColors).forEach((baseTextColor: [string, string]) => {
			const [textColorKey, textColorValue] = baseTextColor;
			paletteCss[`${prefix}${baseColorKey}-on-${textColorKey}`] = textColorValue;
		});
	});
	return paletteCss;
}

function isBaseColorType(
	object: Record<string, PaletteField>
): object is BaseColors<string | BaseTextColors> {
	const objectValue = Object.values(object).at(0);
	return objectValue !== undefined && (typeof objectValue === 'string' || isBaseTextColor(object));
}

export function isBaseTextColor(
	object: Record<string, PaletteField>
): object is BaseColors<BaseTextColors> {
	const objectValue = Object.values(object).at(0);
	return (
		objectValue !== undefined &&
		typeof objectValue === 'object' &&
		typeof Object.values(objectValue).at(0) === 'string'
	);
}
