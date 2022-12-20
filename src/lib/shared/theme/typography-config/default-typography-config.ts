import type { ThemeTypography } from './typography-config.types';

const UUI_TYPOGRAPHY: ThemeTypography = {
  global: {
    fontFamily: 'Roboto'
  },
  h1: {
    fontSize: '96px',
    fontWeight: '300',
    lineHeight: '116.7%',
    letterSpacing: '-1.5px'
  },
  h2: {
    fontSize: '60px',
    fontWeight: '300',
    lineHeight: '120%',
    letterSpacing: '-0.5px'
  },
  h3: {
    fontSize: '48px',
    fontWeight: '400',
    lineHeight: '116.7%',
    letterSpacing: '-.25px'
  },
  h4: {
    fontSize: '34px',
    fontWeight: '400',
    lineHeight: '123.5%',
    letterSpacing: '.25px'
  },
  h5: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '133.4%'
  },
  h6: {
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '160%',
    letterSpacing: '.15px'
  },
  body1: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '.15px'
  },
  body2: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '143%',
    letterSpacing: '.17px'
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '175%',
    letterSpacing: '.15px'
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '157%',
    letterSpacing: '.1px'
  },
  caption: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '166%',
    letterSpacing: '.4px'
  },
  overline: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '266%',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: '500',
    fontSize: '14',
    textTransform: 'uppercase',
    letterSpacing: '.4px'
  }
};

export default UUI_TYPOGRAPHY;
