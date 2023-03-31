import type { PaperProps } from '../Paper/Paper.types';
export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';

export interface DrawerProps<T extends EventTarget> extends PaperProps<T> {
  anchor?: DrawerAnchor;
  open?: boolean;
  modal?: boolean;
  rail?: boolean;
  onClose?: () => void;
}
