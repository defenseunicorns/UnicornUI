import { Properties, PropertiesHyphen } from 'csstype';

export type CssProperties = Properties & PropertiesHyphen;

export interface CssObject {
  [key: string]: CssProperties;
}

export type BaseScopedStyle = BaseScopedStyle | CssObject | ScopedStyles;
export type ScopedStyles = { $self?: BaseScopedStyle; [key: string]: BaseScopedStyle };
