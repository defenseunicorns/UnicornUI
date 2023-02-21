import { Properties, PropertiesHyphen } from 'csstype';
import type { Breakpoints } from '../breakpoints/breakpoints.types';

export type CssProperties = Properties & PropertiesHyphen;

export interface CssObject {
  [key: string]: CssProperties;
}

export type BaseScopedStyle = CssProperties | GenericScopedStyle;
interface GenericScopedStyle {
  [key: string]: BaseScopedStyle;
}

export type SsxPrefix = `$${string}` | `${SupportedAtRules}${string}`;

export type SupportedAtRules = '@media' | '@supports' | '@counter-style' | '@key-frames';

export type SSX = ScopedStyleExpression;

export type ScopedStyleExpression = {
  $self?: BaseScopedStyle;
  $xs?: BaseScopedStyle;
  $sm?: BaseScopedStyle;
  $md?: BaseScopedStyle;
  $lg?: BaseScopedStyle;
  $xl?: BaseScopedStyle;
  [key: SsxPrefix]: BaseScopedStyle;
};

export interface ScopedStylesParams {
  ssx?: ScopedStyleExpression | undefined;
  breakpoints?: Breakpoints | undefined;
}
