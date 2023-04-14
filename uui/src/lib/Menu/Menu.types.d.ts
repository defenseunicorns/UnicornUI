import type { PaperProps } from '../Paper/Paper.types';

export type AnchorOrigin = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface MenuProps extends PaperProps<HTMLMenuElement> {
  open: boolean;
  anchorRef?: Element;
  anchorOrigin?: AnchorOrigin;
  hugContent?: boolean;
  clickaway?: boolean;
  offsetNum?: number;
  onClickaway?: () => void;
}
