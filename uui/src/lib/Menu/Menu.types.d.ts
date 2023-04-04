import type { PaperProps } from '../Paper/Paper.types';

type AnchorOrigin = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';

export interface MenuProps<T extends EventTarget> extends PaperProps<T> {
  open: boolean;
  anchorRef?: Element;
  anchorOrigin?: AnchorOrigin;
}
