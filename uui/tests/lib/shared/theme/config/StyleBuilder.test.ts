import type { ScopedStyles } from '../../../../../src/lib/shared/theme/config/theme-config.types';
import { StyleBuilder } from '../../../../../src/lib/shared/theme/config/StyleBuilder';
describe('style builder', () => {
  it('replaces selectors with the $self designation with its prefix', () => {
    expect(new StyleBuilder({}, 'prefix').compileSelectors(['$self', '$self .child'])).toEqual([
      '.uui-prefix',
      '.uui-prefix .child'
    ]);
  });

  it('replaces nested selectors with the $self designation with its previous prefix', () => {
    expect(new StyleBuilder({}, 'prefix').buildNestedSelectors('$self;;& .child')).toEqual([
      '.uui-prefix',
      '.uui-prefix .child'
    ]);
  });

  it('parses a css property', () => {
    expect(StyleBuilder.parseJss({ backgroundColor: 'pink' })).toBe('background-color:pink;');
  });

  it('parses a css selector object', () => {
    const style: ScopedStyles = {
      $self: {
        color: 'pink',
        backgroundColor: 'blue'
      }
    };
    expect(new StyleBuilder(style, 'prefix').parse()).toBe(
      '.uui-prefix{color:pink;background-color:blue;}'
    );
  });

  it('parses nested css selectors', () => {
    const style: ScopedStyles = {
      $self: {
        color: 'blue',
        '& .child': {
          color: 'pink'
        }
      }
    };
    expect(new StyleBuilder(style, 'prefix').parse()).toEqual(
      '.uui-prefix{color:blue;}.uui-prefix .child{color:pink;}'
    );
  });

  it('parses @media styles correctly', () => {
    const style: ScopedStyles = {
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
    expect(new StyleBuilder(style, 'prefix').parse()).toEqual(
      '.uui-prefix{color:blue;}@media (min-width: 500px){.uui-prefix{color:pink;}.uui-prefix:hover{color:purple;}}'
    );
  });
});
