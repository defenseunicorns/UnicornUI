import type { BoxProps } from '../Box/box.types';

export interface RadioProps<T extends EventTarget> extends BoxProps<T> {
  checked?: boolean;
}
