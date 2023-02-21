import type { BoxProps } from '$lib/Box/box.types';
import type { MaterialSymbols } from 'material-symbols';
export interface IconProps<T extends EventTarget> extends BoxProps<T> {
  variant: MaterialSymbols;
}
