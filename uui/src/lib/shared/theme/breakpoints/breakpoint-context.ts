import { getContext, setContext } from 'svelte';
import type { Breakpoints } from './breakpoints.types';

const BREAKPOINT_KEY = Symbol('uui-breakpoints');

function getBreakpoints(): Breakpoints {
  return getContext(BREAKPOINT_KEY);
}

function setBreakpoints(breakpoints: Breakpoints) {
  return setContext(BREAKPOINT_KEY, breakpoints);
}

export const BREAKPOINT_CONTEXT = {
  getBreakpoints,
  setBreakpoints
};
