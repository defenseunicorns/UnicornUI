import {
	paletteToCssVars,
	textPaletteToCssVars
} from '../../../../src/lib/shared/theme/palette/palette';

describe('paletteToCssVars', () => {
	it('converts DefaultPalette values into a css string given a Palette Object', () => {
		const paletteVars = paletteToCssVars({
			name: 'test',
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
			name: 'test',
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
			name: 'test',
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
