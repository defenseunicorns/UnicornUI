import type { TextColors } from '../theme/default-colors/colors.types';

export function makeThemeColor(color: TextColors): string {
  return color ? `var(--mdc-theme-${color}, var(--uui-default-colors-${color}, ${color}))` : '';
}
