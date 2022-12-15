import { camelBackToDash } from '../camelBackToDash';
import type {
  Typography,
  TypographyConfig,
  TypographyPaletteValues
} from './typography-config.types';

const TYPOGRAPHY_PREFIX = 'mdc-typography';
const TYPOGRAPHY_CLASSES_PREFIX = '.mdc-typography--';
const TYPOGRAPHY_VARS_PREFIX = `--${TYPOGRAPHY_PREFIX}`;

export function createTypographyConfig(typography: Typography): TypographyConfig {
  const typographyConfig: TypographyConfig = { vars: {}, classes: {} };

  Object.entries(typography).forEach(([key, val]: [string, TypographyPaletteValues]) => {
    const entryConfig = createTypographyClasses(val, key);
    typographyConfig.classes = { ...typographyConfig.classes, ...entryConfig.classes };
    typographyConfig.vars = { ...typographyConfig.vars, ...entryConfig.vars };
  });

  return typographyConfig;
}

export function createTypographyClasses(
  typographyPalette: TypographyPaletteValues,
  prefix: string
): TypographyConfig {
  const typoConfig: TypographyConfig = { classes: {}, vars: {} };
  const classValues: Record<string, string> = {};
  const dashedPrefix = camelBackToDash(prefix);
  const typographyClass = `${TYPOGRAPHY_CLASSES_PREFIX}${dashedPrefix}`;

  Object.entries(typographyPalette).forEach(([key, val]: [string, string]) => {
    const dashedKey = camelBackToDash(key);
    const varName = `${TYPOGRAPHY_VARS_PREFIX}-${dashedPrefix}-${dashedKey}`;
    classValues[dashedKey] = `var(${varName}, ${val})`;
    typoConfig.vars[varName] = val;
  });

  typoConfig.classes[typographyClass] = classValues;
  return typoConfig;
}
