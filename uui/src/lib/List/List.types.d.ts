import type { BoxProps } from '../Box/box.types';
export interface ListProps<T extends EventTarget> extends BoxProps<T> {
  disablePadding?: boolean;
}
