import type { BoxProps } from '../Box/box.types';
import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

export type TextFieldVariant = 'outlined' | 'filled';

export interface TextFieldProps extends svelte.JSX.HTMLAttributes<HTMLInputElement> {
  variant: TextFieldVariant;
  helperText?: string;
  color?: ThemeColors;
  // Needs better name
  hoverColor?: ThemeColors;
  characterCounter?: boolean;
}

export type TextFieldIconProps<T extends EventTarget> = BoxProps<T>;
