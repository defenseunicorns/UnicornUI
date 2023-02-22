export interface ScopedStylesParams {
  ssx?: ScopedStyleExpression | undefined;
  // Should only be defined in order to override BREAKPOINT_CONTEXT values
  breakpoints?: Breakpoints | undefined;
}
