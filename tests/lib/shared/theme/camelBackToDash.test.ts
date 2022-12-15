import { camelBackToDash } from '../../../../src/lib/shared/theme/camelBackToDash';

describe('camelBackToDash', () => {
  it('inserts dashes before capital letters', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });

  it('returns the dash separated string as lowercase.', () => {
    expect(camelBackToDash('camelBackString')).toEqual('camel-back-string');
  });
});
