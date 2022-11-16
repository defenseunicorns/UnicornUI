import type { BoxProps } from '$lib/Box/box.types';

export type ChipElement = 'a' | 'button';
export type ChipVariant = 'outlined' | 'filled';
export type ChipColor = 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'inherit';
export interface ChipProps<T extends EventTarget> extends BoxProps<T> {
	clickable?: boolean;
	element?: ChipElement;
	variant?: ChipVariant;
	color?: ChipColor;
}

export interface ChipIconProps extends svelte.JSX.HTMLAttributes<HTMLButtonElement> {
	clickable?: boolean;
	slot?: 'primary' | 'trailing';
	padding?: string;
}
