import type { PaperProps } from '../Paper/Paper.types';

export type ListItemSlotProps = Record<string, boolean | undefined>;

export interface ListItemProps<T extends EventTarget> extends PaperProps<T> {
  text: string;
  secondaryText?: string;
  textColor?: string;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
