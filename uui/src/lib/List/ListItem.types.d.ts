import type { BoxProps } from '../Box/box.types';

export type ListItemVariant = 'simple' | 'icon' | 'avatar' | 'action';
export type ListItemSlotProps = Record<string, boolean | undefined>;

export interface ListItemProps
  extends svelte.JSX.IntrinsicAttributes<svelte.JSX.HTMLAttributes<HTMLLIElement>> {
  text: string;
  variant?: ListItemVariant;
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
  nested: ListItemSlotProps;
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
