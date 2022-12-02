import {
	createVarString,
	paletteToCss,
	textPaletteToCss
} from '../../../../src/lib/shared/theme/palette/palette';

describe('createVarString', () => {
	it('creates a css var string given a prefix, key, and value', () => {
		const varString = createVarString('--mdc-theme-primary', '#787ff6');
		expect(varString).toBe('--mdc-theme-primary: #787ff6;');
	});
});

describe('paletteToCss', () => {
	it('converts DefaultPalette values into a css string given a Palette Object', () => {
		const paletteCssString = paletteToCss({
			primary: '#68c4ff',
			secondary: '#787ff6'
		});
		expect(paletteCssString).toBe('--mdc-theme-primary: #68c4ff;--mdc-theme-secondary: #787ff6;');
	});

	it('converts on-values to the correct css variables', () => {
		const paletteCssString = paletteToCss({
			on: {
				primary: 'black',
				secondary: 'white'
			}
		});
		expect(paletteCssString).toBe('--mdc-theme-on-primary: black;--mdc-theme-on-secondary: white;');
	});

	it('converts text-values to the correct css variables', () => {
		const paletteCssString = paletteToCss({
			text: {
				primary: {
					dark: 'white',
					light: 'black',
					background: 'white'
				}
			}
		});

		expect(paletteCssString).toBe(
			'--mdc-theme-text-primary-on-dark: white;--mdc-theme-text-primary-on-light: black;--mdc-theme-text-primary-on-background: white;'
		);
	});
});

describe('textPaletteToCss', () => {
	it('converts a text palette to css variable', () => {
		const textPaletteCssString = textPaletteToCss({
			primary: {
				dark: 'white',
				light: 'black',
				background: 'white'
			}
		});

		expect(textPaletteCssString).toBe(
			'--mdc-theme-text-primary-on-dark: white;--mdc-theme-text-primary-on-light: black;--mdc-theme-text-primary-on-background: white;'
		);
	});
});
