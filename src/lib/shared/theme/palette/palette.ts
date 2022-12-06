import type {
	ColorFields,
	TextColorFields,
	PaletteField,
	Palette,
	Palettes,
	ThemeVars
} from './palette.types';

const MDC_THEME_PREFIX = '--mdc-theme-';
const MDC_THEME_TEXT_PREFIX = `${MDC_THEME_PREFIX}text-`;

export function createPaletteMap(palettes: Palettes): Map<string, ThemeVars> {
	const paletteMap = new Map<string, ThemeVars>();
	Object.entries(palettes).forEach(([key, palette]: [string, Palette]) => {
		paletteMap.set(key, paletteToCssVars(palette));
	});
	return paletteMap;
}

export function paletteToCssVars(palette: Palette, prefix = MDC_THEME_PREFIX): ThemeVars {
	let paletteCss: ThemeVars = {};
	Object.entries(palette).forEach((value: [string, PaletteField]) => {
		const [key, val] = value;
		// Field type string
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
	prefix = MDC_THEME_TEXT_PREFIX
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
