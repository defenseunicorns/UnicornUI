import type { BoxProps } from '../Box/box.types';

export type ListItemVariant = 'textual' | 'icon' | 'avatar';
export type ListItemSlotProps = Record<string, boolean | undefined>;

export interface ListItemProps
  extends svelte.JSX.IntrinsicAttributes<svelte.JSX.HTMLAttributes<HTMLLIElement>> {
  text: string;
  variant?: ListItemVariant;
  secondaryText?: string;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
}

export interface ListItemSlots {
  default: ListItemSlotProps;
  leadingAdornment: ListItemSlotProps;
  trailingAdornment: ListItemSlotProps;
  nested: ListItemSlotProps;
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
