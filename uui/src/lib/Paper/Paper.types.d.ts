import type { BoxProps } from '../Box/box.types';

export type PaperVariant = 'elevation' | 'outlined' | string;
export interface PaperProps<T extends EventTarget> extends BoxProps<T> {
  variant?: PaperVariant;
  elevation?: number;
  square?: boolean;
  themeMode?: 'light' | 'dark';
}
