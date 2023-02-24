import type { BoxProps } from '../Box/box.types';

export type ListItemVariant = 'textual' | 'icon' | 'avatar';

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
  default: { selected: boolean | undefined; disabled: boolean | undefined };
  leadingAdornment: { selected: boolean | undefined; disabled: boolean | undefined };
  trailingAdornment: { selected: boolean | undefined; disabled: boolean | undefined };
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
