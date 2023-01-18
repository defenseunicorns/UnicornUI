import type { ThemeColors } from '../theme/default-colors/colors.types';

export function makeThemeColor(color: ThemeColors): string {
  return color ? `var(--mdc-theme-${color}, var(--uui-default-colors-${color}, ${color}))` : '';
}
