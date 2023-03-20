import { UUI_BREAKPOINTS } from '../../../../../src/lib/shared/theme/breakpoints/default-breakpoints';
import type { ScopedStyleExpression } from '../../../../../src/lib/shared/theme/config/theme-config.types';
import { StyleBuilder } from '../../../../../src/lib/shared/theme/config/StyleBuilder';

describe('style builder', () => {
  describe('$self and & replacement', () => {
    it('replaces selectors with the $self designation with its prefix', () => {
      expect(
        new StyleBuilder({}, UUI_BREAKPOINTS, 'uui-prefix').compileSelectors([
          '$self',
          '$self .child'
        ])
      ).toEqual(['.uui-prefix', '.uui-prefix .child']);
    });

    it('replaces nested selectors with the $self designation with its previous prefix and returns the property and new selector', () => {
      expect(
        new StyleBuilder({}, UUI_BREAKPOINTS, 'uui-prefix').buildNestedSelectors(
          '$self;;& .child;;& .grand-child;;color'
        )
      ).toEqual(['.uui-prefix .child .grand-child', 'color']);
    });
  });

  describe('css parsing', () => {
    it('parses a css property', () => {
      expect(StyleBuilder.parseJss({ backgroundColor: 'pink' })).toBe('background-color:pink;');
    });

    it('parses a css selector object', () => {
      const style: ScopedStyleExpression = {
        $self: {
          color: 'pink',
          backgroundColor: 'blue'
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toBe(
        '.uui-prefix{color:pink;background-color:blue;}'
      );
    });
  });

  describe('nested selectors', () => {
    it('parses nested css selectors', () => {
      const style: ScopedStyleExpression = {
        $self: {
          color: 'blue',
          '& .child': {
            color: 'pink'
          }
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        '.uui-prefix{color:blue;}.uui-prefix .child{color:pink;}'
      );
    });

    it('parses deeply nested css selectors', () => {
      const style: ScopedStyleExpression = {
        $self: {
          '& .child': {
            color: 'var(--secondary)',
            '& .childsChild': {
              color: 'blue'
            }
          }
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        '.uui-prefix .child{color:var(--secondary);}.uui-prefix .child .childsChild{color:blue;}'
      );
    });
  });

  describe('@media and breakpoints', () => {
    it('parses @media styles correctly', () => {
      const style: ScopedStyleExpression = {
        $self: {
          color: 'blue'
        },
        '@media (min-width: 500px)': {
          $self: {
            color: 'pink',
            '&:hover': {
              color: 'purple'
            }
          }
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        '.uui-prefix{color:blue;}@media (min-width: 500px){.uui-prefix{color:pink;}.uui-prefix:hover{color:purple;}}'
      );
    });

    it('replaces breakpoints inside @media with the breakpoint value', () => {
      const style: ScopedStyleExpression = {
        $self: {
          color: 'blue'
        },
        '@media (min-width: $md) and (max-width: $lg)': {
          $self: {
            color: 'pink',
            '&:hover': {
              color: 'purple'
            }
          }
        }
      };

      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        `.uui-prefix{color:blue;}@media (min-width: ${UUI_BREAKPOINTS.$md}) and (max-width: ${UUI_BREAKPOINTS.$lg}){.uui-prefix{color:pink;}.uui-prefix:hover{color:purple;}}`
      );
    });

    it('parses breakpoint styles correctly', () => {
      const style: ScopedStyleExpression = {
        $self: {
          color: 'blue'
        },
        $xl: {
          $self: {
            color: 'pink',
            '&:hover': {
              color: 'purple'
            }
          }
        }
      };

      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        `.uui-prefix{color:blue;}@media screen and (min-width: ${UUI_BREAKPOINTS.$xl}){.uui-prefix{color:pink;}.uui-prefix:hover{color:purple;}}`
      );
    });

    it('creates an @media (min-width: value) when given a breakpoint key', () => {
      expect(
        new StyleBuilder({ $self: { color: 'pink' } }, UUI_BREAKPOINTS, 'uui-prefix').getMediaQuery(
          '$xl'
        )
      ).toBe(`@media screen and (min-width: ${UUI_BREAKPOINTS.$xl})`);
    });
  });

  describe('$theme slelectors', () => {
    it('replaces $light designator with html[data-theme="light"]', () => {
      const style: ScopedStyleExpression = {
        '$light $self': {
          color: 'black',
          backgroundColor: 'white'
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        'html[data-theme="light"] .uui-prefix{color:black;background-color:white;}'
      );
    });

    it('replaces $light designator with html[data-theme="light"] when using nesting', () => {
      const style: ScopedStyleExpression = {
        $light: {
          '& $self': {
            color: 'black',
            backgroundColor: 'white'
          }
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        'html[data-theme="light"] .uui-prefix{color:black;background-color:white;}'
      );
    });

    it('replaces $dark designator with html[data-theme="dark"]', () => {
      const style: ScopedStyleExpression = {
        '$dark $self': {
          color: 'white',
          backgroundColor: 'black'
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        'html[data-theme="dark"] .uui-prefix{color:white;background-color:black;}'
      );
    });

    it('replaces $dark designator with html[data-theme="dark"] when nested', () => {
      const style: ScopedStyleExpression = {
        $dark: {
          '& $self': {
            color: 'white',
            backgroundColor: 'black'
          }
        }
      };
      expect(new StyleBuilder(style, UUI_BREAKPOINTS, 'uui-prefix').parse()).toEqual(
        'html[data-theme="dark"] .uui-prefix{color:white;background-color:black;}'
      );
    });
  });
});
