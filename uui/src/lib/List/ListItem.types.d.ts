import type { IconButton } from '$lib';
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
  disabledGutters: boolean;
  order?: number;
  leadingAdornment?:
    | ComponentAsProp<IconButtonProps>
    | ComponentAsProp<HtmlAttributes<HTMLImageElement>>;
  trailingAdornment?: ComponentAsProp<IconButtonProps>;
}
