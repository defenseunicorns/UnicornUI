import type { PaperProps } from '../Paper/Paper.types';

export interface RailProps<T extends EventTarget> extends PaperProps<T> {
  open?: boolean;
}
