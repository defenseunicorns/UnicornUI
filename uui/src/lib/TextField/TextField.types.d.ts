export type TextFieldVariant = 'outlined' | 'filled';

export interface TextFieldProps extends svelte.JSX.HTMLAttributes<HTMLInputElement> {
  variant: TextFieldVariant;
  helperText?: string;
}
