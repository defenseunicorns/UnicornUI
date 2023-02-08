import type { BaseScopedStyle, CssProperties, ScopedStyles } from './theme-config.types';
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

  static parseJss(jssProperties: CssProperties): string {
    const genericJssProperties = jssProperties as Record<string, string>;
    let css = '';
    for (const style in genericJssProperties) {
      css += `${camelBackToDash(style)}:${genericJssProperties[style]};`;
    }
    return css;
  }

  //
  public scopedClass: string;

  constructor(public inputStyle: ScopedStyles, prefix = '') {
    this.scopedClass = `.uui-${prefix}`;
  }

  parse(): string {
    let css = '';
    Object.entries(this.inputStyle).forEach(([selector, val]: [string, BaseScopedStyle]) => {
      if (this.isPureObject(val)) {
        if (this.isMedia(selector)) {
          css += `${selector}{${this.buildMediaStyle(val as ScopedStyles)}}`;
        } else {
          css += this.buildNestedStyle(selector, val);
        }
      }
    });

    return css;
  }

  isPureObject(val: unknown): boolean {
    return typeof val === 'object' && !Array.isArray(val);
  }

  isMedia(key: string): boolean {
    return key.startsWith(this.MEDIA_DESIGNATOR);
  }

  buildMediaStyle(val: ScopedStyles): string {
    const hydratedStyle = this.hydrateStyles(this.flattenObj(val as ScopedStyles));
    return Object.entries(hydratedStyle).reduce(
      (prev: string, [newSelector, value]: [string, BaseScopedStyle]) =>
        `${prev}${newSelector}{${StyleBuilder.parseJss(value as CssProperties)}}`,
      ''
    );
  }

  buildNestedStyle(selector: string, val: BaseScopedStyle): string {
    const tempObj: ScopedStyles = {};
    tempObj[selector] = val;
    const hydratedStyle = this.hydrateStyles(this.flattenObj(tempObj));
    return Object.entries(hydratedStyle).reduce(
      (prev: string, [newSelector, value]: [string, BaseScopedStyle]) =>
        `${prev}${newSelector}{${StyleBuilder.parseJss(value as CssProperties)}}`,
      ''
    );
  }

  buildNestedSelectors(selector: string): string[] {
    const selectors = selector.split(this.FLATTENED_SEPARATOR);
    const newSelector = selectors.reduce(
      (prev: string, next: string) => prev.replace(this.NESTED_DESIGNATOR, next),
      selector
    );
    const keyAndProperty = newSelector.split(this.FLATTENED_SEPARATOR).slice(-2);
    return this.compileSelectors(keyAndProperty);
  }

  compileSelectors(selectors: string[]): string[] {
    return selectors.map((s) => s.replaceAll(this.SCOPED_DESIGNATOR, this.scopedClass));
  }

  // https://www.geeksforgeeks.org/flatten-javascript-objects-into-a-single-depth-object/
  // Flattens object with separated values
  // ex return: {key;;subKey;;property: value, key;;property: value}
  flattenObj(nestedStyles: ScopedStyles): Record<string, string> {
    const result: Record<string, string> = {};

    for (const selector in nestedStyles) {
      const val = nestedStyles[selector];
      // Item is nested object
      if (this.isPureObject(val)) {
        // Recurse
        const temp = this.flattenObj(val as ScopedStyles);
        for (const nestedSelector in temp) {
          // Add previous to nested selector with unique separator
          const newKey = `${selector}${this.FLATTENED_SEPARATOR}${nestedSelector}`;
          // Add the value to the 'flattened' key
          result[newKey] = temp[nestedSelector];
        }
      }
      // BaseCase
      // Ignore array values as they are not supported in css
      else if (typeof nestedStyles[selector] === 'string') {
        result[selector] = nestedStyles[selector] as string;
      }
    }
    return result;
  }

  hydrateStyles(flattenedStyles: Record<string, string>): ScopedStyles {
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
    return newObject as ScopedStyles;
  }
}
