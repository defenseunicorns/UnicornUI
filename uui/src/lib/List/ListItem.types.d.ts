import type { BoxProps } from '../Box/box.types';

export interface ListItemProps<T extends EventTarget> extends BoxProps<T> {
  textColor?: ThemeColors;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
