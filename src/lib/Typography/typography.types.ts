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
	| 'inherit';

export type TypographyElement = {
	element: string;
	class: string;
};
export type TypographyElements = {
	[key in TypographyVariant]: TypographyElement;
};
