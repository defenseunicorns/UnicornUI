import type { current_component } from 'svelte/internal';

export interface BoxProps<T extends EventTarget> extends svelte.JSX.HTMLAttributes<T> {
	element?: string;
	ref?: HTMLElement;
	additionalEvents?: string[];
	eventComponent?: typeof current_component;
}
