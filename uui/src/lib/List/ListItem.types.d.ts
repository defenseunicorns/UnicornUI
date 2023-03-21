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
  'leading-adornment': ListItemSlotProps;
  'trailing-adornment': ListItemSlotProps;
  'nested-content': ListItemSlotProps;
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
