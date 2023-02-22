import type { IconButtonProps } from '$lib/IconButton/IconButton.types';
import type { ComponentAsProp } from '../shared/types/propComponent';
import type { HtmlAttributes } from 'csstype';

export interface ListItemProps {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  checkBox?: 'leading' | 'trailing';
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
  leadingAdornment?: ComponentAsProp<IconButtonProps>;
  trailingAdornment?: ComponentAsProp<IconButtonProps>;
}
