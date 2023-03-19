import type { BreakpointKey, Breakpoints } from '../breakpoints/breakpoints.types';
import type {
  BaseScopedStyle,
  CssProperties,
  ScopedStyleExpression,
  GenericScopedStyle
} from './theme-config.types';
import { camelBackToDash } from './theme-config.utils';

export class StyleBuilder {
  // Semi colons not allowed in css selectors
  FLATTENED_SEPARATOR = ';;';
  // Follows css3 proposed nested styles designator
  NESTED_DESIGNATOR = '&';
  // This is used to reference the generated prefix in implementation
  SCOPED_DESIGNATOR = '$self';
  // @media expects nested styles to stay nested and cannot 'bubble' up the same way as standard nested.
  MEDIA_DESIGNATOR = '@media';
  // Added to the breakpoint fields in order to replace breakpoints.
  BREAKPOINT_PREFIX = '$';
  // @rules that allow nesting
  NESTABLE_AT_RULES = new Set(['@media', '@supports', '@counter-style', '@key-frames']);

  static parseJss(jssProperties: CssProperties): string {
    const genericJssProperties = jssProperties as Record<string, string>;
    let css = '';
    for (const style in genericJssProperties) {
      css += `${camelBackToDash(style)}:${genericJssProperties[style]};`;
    }
    return css;
  }

  public scopedClass: string;

  constructor(
    public inputStyle: ScopedStyleExpression,
    public breakpoints: Breakpoints,
    scopedClass = ''
  ) {
    this.scopedClass = scopedClass.startsWith('.') ? scopedClass : `.${scopedClass}`;
  }

  parse(): string {
    let css = '';
    Object.entries(this.inputStyle).forEach(([selector, val]: [string, BaseScopedStyle]) => {
      if (this.isPureObject(val)) {
        if (this.staysNested(selector)) {
          // Keep initial nesting then flatten and hydrate sub objects.
          css += `${this.buildMediaSelector(selector)}{${this.buildMediaStyle(
            val as ScopedStyleExpression
          )}}`;
        } else {
          css += this.buildNestedStyle(selector, val);
        }
      }
    });

    return css;
  }

  isPureObject(val: unknown): boolean {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
  }

  staysNested(key: string): boolean {
    const keyPrefix = key.split(' ').shift();
    return this.isBreakpoint(key) || this.NESTABLE_AT_RULES.has(keyPrefix || key);
  }

  isBreakpoint(key: string): boolean {
    return this.breakpoints[key as BreakpointKey] !== undefined;
  }

  buildMediaSelector(selector: string): string {
    let newSelector = selector;
    if (this.isBreakpoint(selector)) {
      // Get mediaquery templated string
      newSelector = this.getMediaQuery(newSelector as BreakpointKey);
    } else if (selector.search(/\$[a-zA-Z0-9]+/)) {
      // Replace breakpoint values
      newSelector = this.replaceScopedDesignator(newSelector);
      for (const breakpoint in this.breakpoints) {
        newSelector = newSelector.replaceAll(
          breakpoint,
          this.breakpoints[breakpoint as BreakpointKey]
        );
      }
    }
    return newSelector;
  }

  buildMediaStyle(val: ScopedStyleExpression): string {
    const hydratedStyle = this.hydrateStyles(this.flattenObj(val as ScopedStyleExpression));
    return Object.entries(hydratedStyle).reduce(
      (prev: string, [newSelector, value]: [string, BaseScopedStyle]) =>
        `${prev}${newSelector}{${StyleBuilder.parseJss(value as CssProperties)}}`,
      ''
    );
  }

  buildNestedStyle(selector: string, val: BaseScopedStyle): string {
    const tempObj: GenericScopedStyle = {};
    tempObj[selector] = val;
    const hydratedStyle = this.hydrateStyles(this.flattenObj(tempObj));
    return Object.entries(hydratedStyle).reduce(
      (prev: string, [newSelector, value]: [string, BaseScopedStyle]) =>
        `${prev}${newSelector}{${StyleBuilder.parseJss(value as CssProperties)}}`,
      ''
    );
  }
  /*
   * Builds the nested css selector replacing & with parent selector.
   * ex input: '$self;;& .child;;& .grandchild;;backgroundColor'
   * Separates the property field and the new selector
   * ex output: ['uui-prefix .child .grandchild', 'backgroundColor']
   */
  buildNestedSelectors(selector: string): string[] {
    const selectors = selector.split(this.FLATTENED_SEPARATOR);
    // Replace next selector & with previous selector;
    selectors.forEach((s: string, i: number) => {
      if (i !== selectors.length - 1) {
        selectors[i + 1] = selectors[i + 1].replace(this.NESTED_DESIGNATOR, s);
      }
    });
    // 2nd to last is the fully built select, last index is always the property.
    const selectorAndProperty = selectors.slice(-2);
    // Replace remaining designators with associated values prior to returning.
    return this.compileSelectors(selectorAndProperty);
  }

  // Replace designator tokens with the associated value.
  // ex input: '$self .child .grandchild:hover`
  // ex output: `.uui-prefix .child .grandchild:hover`
  compileSelectors(selectors: string[]): string[] {
    return selectors.map((s) => this.replaceScopedDesignator(this.replaceThemedDesignators(s)));
  }

  replaceScopedDesignator(selector: string): string {
    return selector.replaceAll(this.SCOPED_DESIGNATOR, this.scopedClass);
  }

  // Replace $theme designator with html[data-theme="theme"]
  replaceThemedDesignators(selector: string): string {
    return selector
      .replaceAll('$light', 'html[data-theme="light"]')
      .replaceAll('$dark', 'html[data-theme="dark"]');
  }

  // https://www.geeksforgeeks.org/flatten-javascript-objects-into-a-single-depth-object/
  // Flattens object with separated values
  /*
   * {key: {subKey: {property: value}}}
   */
  // ex return: {key;;subKey;;property: value, key;;property: value}
  flattenObj(nestedStyles: GenericScopedStyle): Record<string, string> {
    const result: Record<string, string> = {};

    for (const selector in nestedStyles) {
      const val = nestedStyles[selector];
      // Item is nested object
      if (this.isPureObject(val)) {
        // Recurse
        const temp = this.flattenObj(val as ScopedStyleExpression);
        for (const nestedSelector in temp) {
          // Add previous to nested selector with unique separator
          const newKey = `${selector}${this.FLATTENED_SEPARATOR}${nestedSelector}`;
          // Add the value to the 'flattened' key
          result[newKey] = temp[nestedSelector];
        }
      }
      // BaseCase
      // Ignore array values as they are not supported in css
      else if (!Array.isArray(result[selector])) {
        result[selector] = nestedStyles[selector] as string;
      }
    }
    return result;
  }
  /*
   * Reconstructs flattened with all nested objects at top level
   * // {'key subkey': {property: value}, 'key': {property: value}}
   */
  hydrateStyles(flattenedStyles: Record<string, string>): ScopedStyleExpression {
    // Values will be hydrated into new object.
    const newObject: Record<string, Record<string, string>> = {};
    for (const nestedKey in flattenedStyles) {
      const [selector, propertyName] = this.buildNestedSelectors(nestedKey);
      const propertyValue = flattenedStyles[nestedKey];

      if (!newObject[selector]) {
        newObject[selector] = {};
      }
      newObject[selector][propertyName] = propertyValue;
    }
    return newObject as ScopedStyleExpression;
  }

  getMediaQuery(breakPoint: BreakpointKey): string {
    return `@media screen and (min-width: ${this.breakpoints[breakPoint]})`;
  }
}
