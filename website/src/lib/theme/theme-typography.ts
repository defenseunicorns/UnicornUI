import type { ThemeTypography } from '@uui';

/*
 * Custom typography variant example.
 * example:
 * <Theme typography={customTypography}>
 *   <Typography element="div" variant="body3">Custom Typography</Typography>
 * </Theme>
 */

const customTypography: ThemeTypography = {
  body3: {
    fontWeight: 'bold',
    fontSize: 'var(--h6-font-size)',
    lineHeight: '143%',
    fontFamily: 'cursive',
    fontStyle: 'normal',
    letterSpacing: '.17px',
    textTransform: 'uppercase',
    textDecoration: 'underline wavy var(--warning)',
    color: 'var(--primary)',
    WebkitTextDecorationLine: 'underline',
    WebkitTextDecorationStyle: 'wavy',
    WebkitTextDecorationColor: 'var(--warning)'
  }
};

export default customTypography;
