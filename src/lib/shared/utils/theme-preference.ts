import type { PreferredTheme } from '../theme/palette/palette.types';

export function getPreferredTheme(window: Window): PreferredTheme {
	let preferredTheme: PreferredTheme;
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		preferredTheme = 'dark';
	} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		preferredTheme = 'light';
	}
	return preferredTheme;
}
