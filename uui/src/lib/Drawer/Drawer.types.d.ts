import type { BoxProps } from '../Box/box.types';
import type { PaperProps } from '../Paper/Paper.types';
export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export type DrawerVariant = 'permanent' | 'temporary';

export interface DrawerProps<T extends EventTarget> extends PaperProps<T> {
  anchor?: DrawerAnchor;
  open?: boolean;
  variant?: DrawerVariant;
  onClose?: () => void;
}

export interface DrawerHeaderProps<T extends EvenTarget> extends BoxProps<T> {
  title: string;
  subtitle?: string;
}
