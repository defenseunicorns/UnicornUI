import type { BoxProps } from '../Box/box.types';
import type { PaperProps } from '../Paper/Paper.types';
export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export interface DrawerProps<T extends EventTarget> extends PaperProps<T> {
  anchor: DrawerAnchor;
  hideBackdrop?: boolean;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary';
}

export interface DrawerHeaderProps<T extends EvenTarget> extends BoxProps<T> {
  title: string;
  subtitle?: string;
}
