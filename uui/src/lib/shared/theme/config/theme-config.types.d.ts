import { Properties, PropertiesHyphen } from 'csstype';

export type CssProperties = Properties & PropertiesHyphen;

export interface CssObject {
  [key: string]: CssProperties;
}

export type BaseScopedStyle = CssProperties | { [key: string]: CssProperties };
export type ScopedStyles = { $self?: BaseScopedStyle } & {
  [key: string]: BaseScopedStyle;
} & CssProperties;
