import type { BoxProps } from '../Box/box.types';
export interface PaperProps<T extends EventTarget> extends BoxProps<T> {
  variant: 'elevation' | 'outlined' | string;
  elevation?: number;
  square?: boolean;
}
