import type { BoxProps } from '../Box/box.types';
import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

export type TextFieldVariant = 'outlined' | 'filled';

export interface TextFieldProps
  extends BoxProps<HTMLInputElement>,
    svelte.JSX.HTMLAttributes<HTMLInputElement> {
  variant?: TextFieldVariant;
  label: string;
  value?: string;
  helperText?: string;
  color?: ThemeColors;
  error?: boolean;
  characterCounter?: boolean;
  inputRef?: HTMLInputElement;
  clickaway?: boolean;
}

export type TextFieldIconProps<T extends EventTarget> = BoxProps<T>;
