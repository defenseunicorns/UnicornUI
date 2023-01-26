type TextFieldVariant = 'outlined' | 'standard' | 'filled';
type TextFieldIcon = HTMLButtonElement | HTMLAnchorElement | HTMLImageElement;
type TextFieldSize = 'sm' | 'md' | 'lg';

// type ? -- does this component actually allow for number or date pickers? Or should TextField make use of an abstracted Input component that takes the type
// inputProps?

export interface TextFieldProps {
  value?: string;
  label?: string;
  placeholder?: string;
  variant: TextFieldVariant;
  startingIcon?: TextFieldIcon;
  endingIcon?: TextFieldIcon;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  maxLenght?: number;
  minLenght?: number;
  pattern?: string;
  readonly?: boolean;
  size?: TextFieldSize;
}
