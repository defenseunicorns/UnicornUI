export interface ListItemProps extends svelte.JSX.HTMLAttributes<HTMLLIElement> {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
}

export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
