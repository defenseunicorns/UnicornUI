import type { ComponentType, SvelteComponentTyped } from 'svelte/types/runtime/internal/dev';
import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

export type StepVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export type StepOrientation = 'vertical' | 'horizontal';

export interface StepProps {
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  orientation?: StepOrientation;
  iconContent?: string;
  variant?: StepVariant;
  color?: ThemeColors;
}

export interface CustomStep {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>;
  element: ComponentType<SvelteComponentTyped>;
}

export type CustomSteps = CustomStep[];
