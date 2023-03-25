import type { PaperProps } from '../Paper/Paper.types';

export interface AccordionProps<T extends EventTarget> extends PaperProps<T> {
  isOpen?: boolean;
  headerClass?: string;
  contentClass?: string;
}

export type AccordionGroupProps<T extends EventTarget> = PaperProps<T>;
