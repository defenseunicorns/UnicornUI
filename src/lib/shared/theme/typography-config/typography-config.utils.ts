import type { TypographyVariant } from '../../../Typography/typography.types';
import { camelBackToDash } from '../camelBackToDash';
import type {
  ThemeTypography,
  TypographyConfig,
  TypographyPaletteValues,
  TypographyClasses
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

export function addThemeStyleToHead(document: Document, typographyCss: string) {
  const ELEMENT_ID = 'uui-typography-classes';
  let style = document.getElementById(ELEMENT_ID);
  if (style) {
    style.innerHTML = typographyCss;
  } else {
    style = document.createElement('style');
    style.setAttribute('id', ELEMENT_ID);
    style.innerHTML = typographyCss;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}

export function createStyleFromJSON(classes: TypographyClasses): string {
  let css = '';
  Object.entries(classes).forEach(([key, val]: [string, Record<string, string>]) => {
    const classProperties = jsonObjectToCSS(val);
    css += `${key}{${classProperties}}`;
  });
  return css;
}

export function jsonObjectToCSS(jsonObject: Record<string, string>) {
  return Object.entries(jsonObject).reduce((prev: string, [key, val]: [string, string]) => {
    return `${prev}${camelBackToDash(key)}:${val};`;
  }, '');
}
