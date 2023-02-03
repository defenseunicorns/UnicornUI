import { camelBackToDash } from '../config/theme-config.utils';
import type { CssProperties } from '../config/theme-config.types';
import type { TypographyVariant } from '../../../Typography/typography.types';
import type { ThemeTypography, TypographyConfig } from './typography-config.types';

const TYPOGRAPHY_PREFIX = 'mdc-typography';
const TYPOGRAPHY_VARS_PREFIX = `--${TYPOGRAPHY_PREFIX}`;

export function createTypographyConfig(typography: ThemeTypography): TypographyConfig {
  const typographyConfig: TypographyConfig = { vars: {}, classes: {} };

  Object.entries(typography).forEach(([key, val]: [string, CssProperties]) => {
    const entryConfig = createTypographyClasses(val, key);
    typographyConfig.classes = { ...typographyConfig.classes, ...entryConfig.classes };
    typographyConfig.vars = { ...typographyConfig.vars, ...entryConfig.vars };
  });

  return typographyConfig;
}

export function createTypographyClasses(
  typographyPalette: CssProperties,
  prefix: string
): TypographyConfig {
  const typoConfig: TypographyConfig = { classes: {}, vars: {} };
  const classValues: Record<string, string> = {};
  const dashedPrefix = camelBackToDash(prefix);
  const typographyClass = createTypographyConfigClass(dashedPrefix);

  Object.entries(typographyPalette).forEach(([key, val]: [string, unknown]) => {
    const dashedKey = camelBackToDash(key);
    const unPrefixedVarName = `${dashedPrefix}-${dashedKey}`;
    const uuiVarName = createUUITypographyVarName(unPrefixedVarName);
    const mdcVarName = createMDCTypographyVarName(unPrefixedVarName);
    const mdcVarValue = createMDCVarValue(uuiVarName);

    classValues[dashedKey] = `var(${uuiVarName}, ${val})`;
    typoConfig.vars[uuiVarName] = `${val}`;
    typoConfig.vars[mdcVarName] = mdcVarValue;
  });

  typoConfig.classes[typographyClass] = classValues;
  return typoConfig;
}

export function createUUITypographyVarName(unprefixedVarName: string): string {
  return `--${unprefixedVarName}`;
}

export function createMDCVarValue(uuiVarName: string): string {
  return `var(${uuiVarName})`;
}

export function createMDCTypographyVarName(unprefixedVarName: string): string {
  return `${TYPOGRAPHY_VARS_PREFIX}-${unprefixedVarName}`;
}

export function createTypographyConfigClass(variant: TypographyVariant): string {
  return `.${createMDCTypographyClassName(variant)},.${createUUITypographyClassName(variant)}`;
}

export function createUUITypographyClassName(variant: TypographyVariant): string {
  return camelBackToDash(variant);
}

export function createMDCTypographyClassName(variant: TypographyVariant): string {
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
