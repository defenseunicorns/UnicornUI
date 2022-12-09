import type { Typography } from '../../../../../src/lib/shared/theme/typography-config/typography-config.types';
import { createTypographyConfig } from '../../../../../src/lib/shared/theme/typography-config/typography-config.utils';
describe('createTypographyConfig', () => {
  const testTypography: Typography = {
    h1: {
      fontFamily: 'roboto',
      fontSize: '6rem',
      fontStyle: 'normal',
      fontWeight: '300',
      letterSpacing: '-.015625em',
      lineHeight: '6rem',
      textDecoration: 'inherit',
      textTransform: 'inherit'
    },
    customTypography: {
      fontFamily: 'roboto',
      fontSize: '6rem',
      fontStyle: 'normal',
      fontWeight: '300',
      letterSpacing: '-.015625em',
      lineHeight: '6rem',
      textDecoration: 'inherit',
      textTransform: 'inherit'
    }
  };
  it('returns a TypgraphyConfig given a Typography object', () => {
    const typographyConfig = createTypographyConfig(testTypography);
    expect(typographyConfig.classes).toBeDefined();
    expect(typographyConfig.vars).toBeDefined();
  });
});
