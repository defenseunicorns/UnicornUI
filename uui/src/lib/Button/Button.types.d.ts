import type { BoxProps } from '../Box/box.types';

export type ButtonVariant = 'text' | 'outlined' | 'raised' | 'flat';
export type ButtonColor = 'primary' | 'secondary';
export type ButtonShape = 'rounded' | 'squared';

export interface ButtonProps extends BoxProps<HTMLAnchorElement | HTMLDivElement> {
  color?: ButtonColor;
  shape?: ButtonShape;
  variant?: ButtonVariant;
}

export type ButtonIconProps<T extends EventTarget> = BoxProps<T>;
