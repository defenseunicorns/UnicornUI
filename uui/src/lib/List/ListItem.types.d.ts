import type { BoxProps } from '../Box/box.types';

export type ListItemSlotProps = Record<string, boolean | undefined>;

export interface ListItemProps<T extends EventTarget>
  extends svelte.JSX.IntrinsicAttributes<BoxProps<T>> {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
}

export interface ListItemSlots {
  default: ListItemSlotProps;
  leadingAdornment: ListItemSlotProps;
  trailingAdornment: ListItemSlotProps;
  nestedContent: ListItemSlotProps;
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
