import type { TextColors } from './colors.types';

export function themeColorBuilder(color: TextColors): string {
	let colorVar: string;
	if (color == 'inherit') {
		colorVar = color;
	} else {
		colorVar = `var(--mdc-theme-${color}, var(--uui-default-colors-${color}), inherit)`;
	}
	return colorVar;
}
