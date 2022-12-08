import type { BoxProps } from '$lib/Box/box.types';

export type ButtonVariant = 'text' | 'outlined' | 'raised' | 'flat';
export type ButtonColor = 'primary' | 'secondary';
export type ButtonShape = 'rounded' | 'squared';

export interface ButtonProps
  extends svelte.JSX.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  color?: ButtonColor;
  shape?: ButtonShape;
  variant?: ButtonVariant;
}

export type ButtonIconProps<T extends EventTarget> = BoxProps<T>;
