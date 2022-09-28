import type { TypographyElements, TypographyVariant } from './typography.types';

function getVariantClass(variant: TypographyVariant): string {
	let className = 'mdc-typography--';
	switch (variant) {
		case 'h1':
		case 'h2':
		case 'h3':
		case 'h4':
		case 'h5':
		case 'h6':
			className += `headline${variant[1]}`;
			break;
		default:
			className += variant;
	}
	return className;
}

export const typographyElementMapping: TypographyElements = {
	h1: { this: 'h1', class: getVariantClass('h1') },
	h2: { this: 'h2', class: getVariantClass('h2') },
	h3: { this: 'h3', class: getVariantClass('h3') },
	h4: { this: 'h4', class: getVariantClass('h4') },
	h5: { this: 'h5', class: getVariantClass('h5') },
	h6: { this: 'h6', class: getVariantClass('h6') },
	body1: { this: 'p', class: getVariantClass('body1') },
	body2: { this: 'p', class: getVariantClass('body2') },
	subtitle1: { this: 'h6', class: getVariantClass('subtitle1') },
	subtitle2: { this: 'h6', class: getVariantClass('subtitle2') },
	overline: { this: 'span', class: getVariantClass('overline') },
	caption: { this: 'span', class: getVariantClass('caption') },
	inherit: { this: 'span', class: getVariantClass('inherit') },
	button: { this: 'span', class: getVariantClass('button') }
};
