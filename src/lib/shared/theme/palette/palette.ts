import type { BaseColors, BaseTextColors, Palette, ThemedPalette } from './palette.types';

export function themeColorsToCssString(themeColors: ThemedPalette) {
	return {
		light: paletteToCss(themeColors.light || {}),
		dark: paletteToCss(themeColors.dark || {})
	};
}

export function paletteToCss(palette: Palette, prefix = '--mdc-theme-') {
	let paletteCss = '';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Object.entries(palette).forEach((value: [string, any]) => {
		const [key, val] = value;
		if (typeof val === 'string') {
			paletteCss += createVarString(`${prefix}${key}`, val);
		} else if (isBaseColorType(val)) {
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
	// Disabling no-explicit-any because it makes no sense in a type check.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	object: Record<string, any>
): object is BaseColors<string | BaseTextColors> {
	const objectValue = Object.values(object).at(0);
	return objectValue !== undefined && (typeof objectValue === 'string' || isBaseTextColor(object));
}

// Disabling no-explicit-any because it makes no sense in a type check.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isBaseTextColor(object: Record<string, any>): object is BaseColors<BaseTextColors> {
	const objectValue = Object.values(object).at(0);
	return (
		objectValue &&
		typeof objectValue === 'object' &&
		typeof Object.values(objectValue).at(0) === 'string'
	);
}
