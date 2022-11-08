export interface AccordionProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean;
	headerClass?: string;
	contentClass?: string;
}
