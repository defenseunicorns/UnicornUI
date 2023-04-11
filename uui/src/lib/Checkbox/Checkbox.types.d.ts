import type { BoxProps } from '../Box/box.types';

export interface CheckboxProps<T extends EventTarget> extends BoxProps<T> {
  checked?: boolean;
  value?: string;
  indeterminate?: boolean;
  color?: string;
  backgroundColor?: string;
}
