import type { BoxProps } from '../Box/box.types';

export interface OverlayProps<T extends EventTarget> extends BoxProps<T> {
  elevation?: number;
}
