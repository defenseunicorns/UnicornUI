import type { BoxProps } from '../Box/box.types';
import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

export type TextFieldVariant = 'outlined' | 'filled';

export interface TextFieldProps<T extends EventTarget> extends BoxProps<T> {
  variant?: TextFieldVariant;
  label: string;
  value?: string;
  helperText?: string;
  color?: ThemeColors;
  error?: boolean;
  characterCounter?: boolean;
}

export type TextFieldIconProps<T extends EventTarget> = BoxProps<T>;
