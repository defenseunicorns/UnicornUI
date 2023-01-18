import type { BoxProps } from '../Box/box.types';

export interface AccordionProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  headerClass?: string;
  contentClass?: string;
}

export type AccordionGroupProps<T extends EventTarget> = BoxProps<T>;
