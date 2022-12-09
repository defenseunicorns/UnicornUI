import type { Typography, TypographyConfig } from './typography-config.types';

const TYPOGRAPHY_PREFIX = 'mdc-typography';
const TYPOGRAPHY_CLASSES_PREFIX = '.mdc-typography--';
const TYPOGRAPHY_VARS_PREFIX = `--${TYPOGRAPHY_PREFIX}`;

export function createTypographyConfig(
  typography: Typography,
  prefix = TYPOGRAPHY_VARS_PREFIX
): TypographyConfig {
  const typographyConfig: TypographyConfig = { vars: {}, classes: {} };

  return typographyConfig;
}
