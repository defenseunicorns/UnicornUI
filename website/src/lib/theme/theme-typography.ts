import { UUI_TYPOGRAPHY } from '@uui';
import type { ThemeTypography } from '@uui';

/*
 * Custom typography variant example.
 * example:
 * <Theme typography={customTypography}>
 *   <Typography element="div" variant="body3">Custom Typography</Typography>
 * </Theme>
 */
const customTypography: ThemeTypography = {
  ...UUI_TYPOGRAPHY,
  body3: {
    fontWeight: 'bold',
    fontSize: 'var(--h6-font-size)',
    lineHeight: '143%',
    fontStyle: 'normal',
    fontFamily: 'cursive',
    letterSpacing: '.17px',
    textTransform: 'uppercase',
    textDecoration: 'underline wavy var(--warning)',
    color: 'var(--primary)'
  }
};

export default customTypography;
