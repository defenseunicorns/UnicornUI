import type { BoxProps } from '$lib/Box/box.types';
import type { Colors, TextColors } from '$lib/shared/theme/default-colors/colors.types';

export type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2'
	| 'caption'
	| 'button'
	| 'overline'
	| 'inherit'
	| string;

export type TypographyElement = {
	element: string;
	class: string;
};
export type TypographyElements = {
	[key in TypographyVariant]: TypographyElement;
};

export interface TypographyProps<T extends EventTarget> extends BoxProps<T> {
	variant?: TypographyVariant;
	color?: TextColors;
}
