import { UUI_TYPOGRAPHY } from '@defense-unicorns/unicorn-ui/src/lib';
import type { ThemeTypography } from '@defense-unicorns/unicorn-ui/src/lib';

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
    fontSize: 'var(--mdc-typography-h6-font-size)',
    lineHeight: '143%',
    fontStyle: 'normal',
    fontFamily: 'cursive',
    letterSpacing: '.17px',
    textTransform: 'uppercase',
    textDecoration: 'underline wavy var(--mdc-theme-warning)',
    color: 'var(--mdc-theme-primary)'
  }
};

export default customTypography;
