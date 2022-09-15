export type StepVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warning'
	| 'disabled'
	| 'info';

export type StepOrientation = 'vertical' | 'horizontal';

export interface StepProps {
	title?: string;
	subtitle?: string;
	disabled?: boolean;
	orientation?: StepOrientation;
	iconContent?: string;
	variant?: StepVariant;
}
