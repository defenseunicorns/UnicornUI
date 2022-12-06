import {
	createPaletteMap,
	paletteToCssVars,
	textPaletteToCssVars
} from '../../../../src/lib/shared/theme/palette/palette';

describe('createPaletteMap', () => {
	it('creates a map with key (name) and value (ThemeVars) given Palettes', () => {
		const paletteMap = createPaletteMap({
			test: { primary: 'pink', on: { primary: 'black' } },
			test2: { primary: 'purple', on: { primary: 'white' } }
		});
		expect(paletteMap.get('test')).toStrictEqual({
			'--mdc-theme-primary': 'pink',
			'--mdc-theme-on-primary': 'black'
		});
		expect(paletteMap.get('test2')).toStrictEqual({
			'--mdc-theme-primary': 'purple',
			'--mdc-theme-on-primary': 'white'
		});
	});
});
describe('paletteToCssVars', () => {
	it('converts DefaultPalette values into a css string given a Palette Object', () => {
		const paletteVars = paletteToCssVars({
			primary: '#68c4ff',
			secondary: '#787ff6'
		});
		expect(paletteVars).toStrictEqual({
			'--mdc-theme-primary': '#68c4ff',
			'--mdc-theme-secondary': '#787ff6'
		});
	});

	it('converts on-values to the correct css variables', () => {
		const paletteVars = paletteToCssVars({
			on: {
				primary: 'black',
				secondary: 'white'
			}
		});
		expect(paletteVars).toStrictEqual({
			'--mdc-theme-on-primary': 'black',
			'--mdc-theme-on-secondary': 'white'
		});
	});

	it('converts text-values to the correct css variables', () => {
		const paletteVars = paletteToCssVars({
			text: {
				primary: {
					dark: 'white',
					light: 'black',
					background: 'white'
				}
			}
		});

		expect(paletteVars).toStrictEqual({
			'--mdc-theme-text-primary-on-dark': 'white',
			'--mdc-theme-text-primary-on-light': 'black',
			'--mdc-theme-text-primary-on-background': 'white'
		});
	});
});

describe('textPaletteToCssVars', () => {
	it('converts a text palette to css variable', () => {
		const textPaletteCssString = textPaletteToCssVars({
			primary: {
				dark: 'white',
				light: 'black',
				background: 'white'
			}
		});

		expect(textPaletteCssString).toStrictEqual({
			'--mdc-theme-text-primary-on-dark': 'white',
			'--mdc-theme-text-primary-on-light': 'black',
			'--mdc-theme-text-primary-on-background': 'white'
		});
	});
});
