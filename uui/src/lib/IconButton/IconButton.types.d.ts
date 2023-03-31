import type { BoxProps } from '$lib/Box/box.types';

export type IconButtonColor = 'primary' | 'secondary' | 'inherit';

export interface IconButtonProps
  extends svelte.JSX.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    BoxProps<HTMLButtonElement | HTMLAnchorElement> {
  toggled?: boolean;
  iconClass?: string;
  toggleable?: boolean;
  iconContent?: string;
  toggledIconClass?: string;
  iconColor?: IconButtonColor;
  toggledIconContent?: string;
  toggledIconColor?: IconButtonColor;
  ref?: HTMLButtonElement | HTMLAnchorElement;
}
