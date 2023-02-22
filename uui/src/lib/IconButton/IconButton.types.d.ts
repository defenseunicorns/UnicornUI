import type { BoxProps } from '../Box/box.types';

export interface IconButtonProps extends BoxProps<HTMLButtonElement | HTMLAnchorElement> {
  toggled?: boolean;
  iconClass?: string;
  toggleable?: boolean;
  iconContent?: string;
  toggledIconClass?: string;
  iconColor?: IconButtonColor;
  toggledIconContent?: string;
  toggledIconColor?: IconButtonColor;
}
