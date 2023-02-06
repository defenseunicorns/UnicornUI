import type { current_component } from 'svelte/internal';

export interface BoxProps<T extends EventTarget> extends svelte.JSX.HTMLAttributes<T> {
  element?: string;
  ref?: Node;
  eventComponent?: typeof current_component;
}
