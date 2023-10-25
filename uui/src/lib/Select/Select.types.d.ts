import type { MenuProps } from '../Menu/Menu.types';
import type { BoxProps } from '../Box/box.types';
import type { TextFieldIconProps, TextFieldProps } from '../TextField/TextField.types';

export interface SelectProps extends TextFieldProps, MenuProps {
  open?: boolean;
  value?: any;
  multiple?: boolean;
  chip?: boolean;
  labelId?: string;
}

export type SelectIconProps<T extends EventTarget> = TextFieldIconProps<T>;

export interface SelectSlots {
  default: Record<string, (arg: T) => void>;
  trailing: Record<string, () => void>;
}
