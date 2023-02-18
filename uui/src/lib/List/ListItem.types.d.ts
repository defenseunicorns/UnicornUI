import type { IconButtonProps } from '$lib/IconButton/IconButton.types';
import type { ComponentAsProp } from '../shared/types/propComponent';
import type { HtmlAttributes } from 'csstype';

export type ListItemProps = {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  checkBox?: 'leading' | 'trailing';
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
  disabledPadding?: boolean;
  order?: number;
  leadingAdornment?: ComponentAsProp<IconButtonProps>;
  trailingAdornment?: ComponentAsProp<IconButtonProps | Record<string, unknown>>;
};
