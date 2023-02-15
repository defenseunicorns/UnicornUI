export type BreakpointKey = `$${string}`;
export type BreakpointValue = `${number}${string}`;
export interface Breakpoints {
  $xs?: BreakpointValue;
  $sm?: BreakpointValue;
  $md?: BreakpointValue;
  $lg?: BreakpointValue;
  $xl?: BreakpointValue;
  [key: BreakpointKey]: BreakpointValue;
}
