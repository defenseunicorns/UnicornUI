import type { BoxProps } from '../Box/box.types';
import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

export type TextFieldVariant = 'outlined' | 'filled';

export interface TextFieldProps extends svelte.JSX.HTMLAttributes<HTMLInputElement> {
  variant: TextFieldVariant;
  label: string;
  value?: string;
  helperText?: string;
  color?: ThemeColors;
  error?: boolean;
  characterCounter?: boolean;
}

export type TextFieldIconVariant = 'leading' | 'trailing';

export interface TextFieldIconProps<T extends EventTarget> extends BoxProps<T> {
  variant: TextFieldIconVariant;
}
