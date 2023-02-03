import {
  Properties,
  PropertiesHyphen,
  type ObsoleteProperties,
  type StandardProperties,
  type SvgProperties
} from 'csstype';

export type CssProperties = StandardProperties &
  SvgProperties &
  ObsoleteProperties &
  PropertiesHyphen;

export interface CssObject {
  [key: string]: CssProperties;
}
