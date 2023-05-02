import type { PaperProps } from '../Paper/Paper.types';

export interface ListProps<T extends EventTarget> extends PaperProps<T> {
  disablePadding?: boolean;
}
