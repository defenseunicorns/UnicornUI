import type { ThemeTypography } from '$lib/shared/theme/typography-config/typography-config.types';

/*
 * Custom typography variant example.
 * ex:
 * <Theme typography={{...baseTypography, ...customTypography}}>
 *   <Typography element="div" variant="body3">Custom Typography</Typography>
 * </Theme>
 */
const customTypography: ThemeTypography = {
  global: {
    fontFamily: 'Roboto'
  },
  h1: {
    fontWeight: '300',
    fontFamily: 'roboto'
  },
  body3: {
    fontWeight: 'bold',
    fontSize: '.875em',
    lineHeight: '143%',
    fontStyle: 'normal',
    fontFamily: 'cursive',
    letterSpacing: '.17px',
    textTransform: 'uppercase',
    textDecoration: 'underline wavy var(--mdc-theme-warning)'
  }
};

export default customTypography;
