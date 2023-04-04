import type { PaperProps } from '../Paper/Paper.types';
import type { SSX } from '../shared/theme/config/theme-config.types';
import type { BoxProps } from '../Box/box.types';
import type { TypographyProps } from '../Typography/typography.types';

export interface DialogProps<T> extends PaperProps<T> {
  open?: boolean;
  clickAway?: boolean;
  containerSSX?: SSX;
}
export type DialogTitleProps<T extends EventTarget> = TypographyProps<T>;
export type DialogActionsProps<T extends EventTarget> = BoxProps<T>;
