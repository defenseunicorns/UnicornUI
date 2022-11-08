import type { BoxProps } from '$lib/Box/box.types';
import type { TypographyProps } from '$lib/Typography/typography.types';

export type DialogTitleProps<T extends EventTarget> = TypographyProps<T>;
export type DialogActionsProps<T extends EventTarget> = BoxProps<T>;
