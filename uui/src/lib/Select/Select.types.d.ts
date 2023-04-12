import type { MenuProps } from '../Menu/Menu.types';
import type { BoxProps } from '../Box/box.types';
import type { TextFieldIconProps, TextFieldProps } from '../TextField/TextField.types';

export interface SelectProps<T extends EventTarget> extends TextFieldProps<T> {
  multiple?: boolean;
  chip?: boolean;
  menuProps?: MenuProps;
  labelId?: string;
}

export type SelectIconProps<T extends EventTarget> = TextFieldIconProps<T>;
