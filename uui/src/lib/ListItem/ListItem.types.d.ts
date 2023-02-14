export interface ListItemProps {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  checkBox?: 'leading' | 'trailing';
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
  disabledPadding?: boolean;
  order?: number;
}
