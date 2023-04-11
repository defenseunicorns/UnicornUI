import type { PaperProps } from '../Paper/Paper.types';

export type AnchorOrigin = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface MenuProps<T extends EventTarget> extends PaperProps<T> {
  open: boolean;
  anchorRef?: Element;
  anchorOrigin?: AnchorOrigin;
  onClose?: () => void;
}
