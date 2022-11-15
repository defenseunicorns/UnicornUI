import type { BoxProps } from '$lib/Box/box.types';

type ChipElement = 'a' | 'button';
export interface ChipProps<T extends EventTarget> extends BoxProps<T> {
	clickable?: boolean;
	element?: ChipElement;
}
