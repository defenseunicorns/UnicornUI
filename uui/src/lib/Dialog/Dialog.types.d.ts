import type { BoxProps } from '../Box/box.types';
import type { TypographyProps } from '../Typography/typography.types';

export type DialogTitleProps<T extends EventTarget> = TypographyProps<T>;
export type DialogActionsProps<T extends EventTarget> = BoxProps<T>;
