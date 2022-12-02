import type { BaseColors, BaseTextColors, PaletteField, Palette, Palettes } from './palette.types';

export function createThemeStyle(palettes: Palettes): Map<string, string> {
	const paletteMap = new Map<string, string>();
	palettes.forEach((palette: Palette) => {
		paletteMap.set(palette.id, paletteToCss(palette));
	});
	return paletteMap;
}

export function paletteToCss(palette: Palette, prefix = '--mdc-theme-') {
	let paletteCss = '';
	Object.entries(palette).forEach((value: [string, PaletteField]) => {
		const [key, val] = value;
		// Field type string
		if (key === 'id') return;
		if (typeof val === 'string') {
			paletteCss += createVarString(`${prefix}${key}`, val);
		}
		// Field types BaseColors<string> | BaseColors<BaseTextColors>
		else if (isBaseColorType(val)) {
			paletteCss += baseColorsToCss(val, `${prefix}${key}-`);
		}
	});
	return paletteCss;
}

export function baseColorsToCss(baseColors: BaseColors<string | BaseTextColors>, prefix: string) {
	let baseColorsCss = '';
	if (isBaseTextColor(baseColors)) {
		baseColorsCss += textPaletteToCss(baseColors);
	} else {
		baseColorsCss += paletteToCss(baseColors as Palette, prefix);
	}
	return baseColorsCss;
}

export function textPaletteToCss(
	palette: BaseColors<BaseTextColors>,
	prefix = '--mdc-theme-text-'
) {
	let paletteCss = '';
	Object.entries(palette).forEach((value: [string, BaseTextColors]) => {
		const [baseColorKey, baseTextColors] = value;
		Object.entries(baseTextColors).forEach((baseTextColor: [string, string]) => {
			const [textColorKey, textColorValue] = baseTextColor;
			paletteCss += createVarString(`${prefix}${baseColorKey}-on-${textColorKey}`, textColorValue);
		});
	});
	return paletteCss;
}

export function createVarString(name: string, value: string) {
	return `${name}: ${value};`;
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
