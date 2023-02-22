import type { ListItemProps } from './ListItem.types';

type ListVariant = 'single-line' | 'two-line' | 'icon' | 'avatar';
export interface ListProps extends svelte.JSX.HTMLAttributes<HTMLElement> {
  variants: ListVariant[];
  listItems: ListItemProps[];
  disabledPadding?: boolean;
}
