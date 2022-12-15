import type { TypographyTheme } from '$lib/shared/theme/typography-config/typography-config.types';

const customTypography: TypographyTheme = {
  body3: {
    fontFamily: 'cursive',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '.875em',
    lineHeight: '143%',
    letterSpacing: '.17px',
    textDecoration: 'underline wavy var(--mdc-theme-warning)'
  }
};

export default customTypography;
