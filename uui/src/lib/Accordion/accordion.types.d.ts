import type { ThemeColors } from '$lib/shared/theme/default-colors/colors.types';
import type { PaperProps } from '../Paper/Paper.types';

export interface AccordionProps<T extends EventTarget> extends PaperProps<T> {
  isOpen?: boolean;
  headerClass?: string;
  contentClass?: string;
  hoverColor?: ThemeColors;
}

export type AccordionGroupProps<T> = PaperProps<T>;
