import type { TypographyVariant } from '../../../Typography/typography.types';
import { camelBackToDash } from '../config/theme-config.utils';
import type {
  ThemeTypography,
  TypographyConfig,
  TypographyPaletteValues
} from './typography-config.types';

const TYPOGRAPHY_PREFIX = 'mdc-typography';
const TYPOGRAPHY_VARS_PREFIX = `--${TYPOGRAPHY_PREFIX}`;

export function createTypographyConfig(typography: ThemeTypography): TypographyConfig {
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
  const typographyClass = `.${createTypographyVariantClass(dashedPrefix)}`;

  Object.entries(typographyPalette).forEach(([key, val]: [string, string]) => {
    const dashedKey = camelBackToDash(key);
    const varName = `${TYPOGRAPHY_VARS_PREFIX}-${dashedPrefix}-${dashedKey}`;
    classValues[dashedKey] = `var(${varName}, ${val})`;
    typoConfig.vars[varName] = val;
  });

  typoConfig.classes[typographyClass] = classValues;
  return typoConfig;
}

export function createTypographyVariantClass(variant: TypographyVariant): string {
  let className = 'mdc-typography--';
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      className += `headline${variant[1]}`;
      break;
    default:
      className += camelBackToDash(variant);
  }
  return className;
}
