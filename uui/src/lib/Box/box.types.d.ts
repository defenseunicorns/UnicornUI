import type { SSX } from '$lib/shared/theme/config/theme-config.types';
import type { current_component } from 'svelte/internal';

export interface BoxProps<T extends EventTarget> extends svelte.JSX.HTMLAttributes<T> {
  element?: string;
  ref?: Node;
  eventComponent?: typeof current_component;
  ssx?: SSX;
}
