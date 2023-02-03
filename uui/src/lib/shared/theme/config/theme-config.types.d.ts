import { Properties, PropertiesHyphen } from 'csstype';

export type CssProperties = Properties & PropertiesHyphen;

export interface CssObject {
  [key: string]: CssProperties;
}
