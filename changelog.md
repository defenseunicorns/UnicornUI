# v0.0.37

## Updates

### Paper

- created Paper component that acts as a wrapper for applying elevation in either light or dark mode.
- created `PaperProps` type.
- applies box-shadow in light mode and a linear-gradient "overlay" in dark mode, calculated by given elevation in both cases.
- default configuration is a rounded, non-outlined, element set to 0 elevation.

```ts
export type PaperVariant = 'elevation' | 'outlined' | string;
export interface PaperProps<T extends EventTarget> extends BoxProps<T> {
  variant?: PaperVariant;
  elevation?: number;
  square?: boolean;
}
```

### Theme

- created internal theme store that is exported.
- users can subscribe to theme store and get / set value.
- added `preferredTheme` prop (default true) to `Theme`
- `Theme` automatically looks for browser preferred theme and sets the internal store to preference

# v0.0.36

## Breaking Changes

### scopedStyles

- parameters changed from `jss: ScopedStyles` to `ScopedStylesParams`:

```ts
export interface ScopedStylesParams {
  ssx?: ScopedStyleExpression | SSX | undefined;
  breakpoints?: Breakpoints | undefined;
}
```

- `ScopedStylesParams.breakpoints` should be left **undefined to use context**.
- `Breakpoints` fall back from `ScopedStylesParams.breakpoints` to `BREAKPOINT_CONTEXT.getBreakpoints()` to `UUI_BREAKPOINTS` in that order.

### Box

- renamed `scopedStyle` prop to `ssx`
- removed `margin-block: unset`

### Types

- renamed `ScopedStyles` to `ScopedStyleExpression` with alias `SSX`
  - Updated `SSX` to have more strict typing.
  - Added default `breakpoint` fields.

## Updates

### Breakpoints

- created `BREAKPOINT_CONTEXT` with `setBreakpoints` and `getBreakpoints` initialized by passing `Breakpoints` to `<Theme />`
- created default `Breakpoints` (`UUI_BREAKPOINTS`) that are used and merged with custom `Breakpoints` in `<Theme />`
- Created type `Breakpoints` that can be used to add or edit custom and default `Breakpoints` to `<Theme />`
  - `Breakpoints` must be prefixed with **$**
  - Can be used as top level values in `SSX` (`ScopedStyleExpression`) as shorthand for `@media screen and (min-width: VALUE)`
  - Can be used as shorthand placeholders in custom `SupportedAtRules` ie `@media (min-width: $md) and (max-width: $lg)` in top level `SSX`.

```ts
export type BreakpointKey = `$${string}`;
export type BreakpointValue = `${number}${string}`;
export interface Breakpoints {
  $xs?: BreakpointValue;
  $sm?: BreakpointValue;
  $md?: BreakpointValue;
  $lg?: BreakpointValue;
  $xl?: BreakpointValue;
  [key: BreakpointKey]: BreakpointValue;
}
```

### Theme

- added prop `breakpoints: Breakpoints = UUI_BREAKPOINTS`
- added logic to merge `breakpoints` prop value with `UUI_BREAKPOINTS` to allow overriding or adding custom values without the need to redeclare defaults that aren't being overridden.
- added `BREAKPOINT_CONTEXT` that is set in Theme for access from all child components.

## Internal

### StyleBuilder

- Updated to parse `$breakpoint` fields to `@media screen and (min-width: BREAKPOINT_VALUE)`
- Added checks for "nested" `AtRules` (supported rules are listed in type `SupportedAtRules` as template literals)
  - Supports custom `Breakpoint` fields
- Updated to parse `$breakpoint` and replace with values when used in `SupportedAtRules` that can be nested. For example: `@media (min-width: $md) and (max-width: $lg)` becomes `@media (min-width: 900px) and (max-width: 1200px)` when using default `UUI_BREAKPOINTS`.
  - Supports custom `Breakpoint` fields

# v0.0.35

## Breaking Changes

### Box

- Removed the `additionalEvents` prop as it is no longer necessary with new eventRedirection action.

### Types

- removed `type` `TypographyPaletteValues` in favor of `CssObject`

### eventHandler

- renamed `eventHandler.ts` to `eventRedirection.ts`
  - renamed `eventHandler` to `eventRedirection`
  - `eventRedirection` is no longer a curried fn.
  - `eventRedirection` now takes in an `Array` of `type current_component`
- is now used inline:

```svelte
<script lang="ts">
  import eventRedirection from '...';

  // locals
  let inputRef: HtmlInputElement;
  let inputValue: '';

  // Watch
  $: eventComponents = [current_component];
</script>

<input
  use:eventRedirection={eventComponents}
  type="text"
  bind:this={inputRef}
  bind:value={inputValue}
/>
```

## Updates

### scopedStyles action

- Add `scopedStyles` action
- Takes in param of type `ScopedStyles`
- Creates css for the target element allowing non-global css for composed custom components.
- `$self` is used to reference the internal scoped classname
- Supports css3 proposed `&` nesting inside `$self` style
- Supports `@media` styles
- classes must be prefixed with `$self` to maintain scoping.
  - nested styles may use `&` in order to target the parent selector.

```svelte
<script lang="ts">
  const boxStyle: ScopedStyles = {
    $self: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'black',
      color: 'pink'
      '& .child': {
        color: 'gold',
      }
      '&:hover': {
        color: 'green'
      }
    }
    '@media (max-width: 500px)': {
      $self: {
        color: 'green',
        flexDirection: 'column'
        '& .child': {
          color: 'green'
        },
        '&::after {
          content: '',
        }
      }
    };
</script>

<Box scopedStyle={boxStyle}>
  <Box class="child">My class can be targeted without bleeding into global.</Box>
</Box>
```

### Box

- `ref` prop type changed to Node in order to support more generic types than HtmlElement
- Add `scopedStyles` prop that is passed to the `use:scopedStyles` action

### TypographyConfig now supports css typing, including vendor attributes and intellisense.

- Added [csstypes](https://github.com/frenic/csstype)

### TextField

- Created outlined and filled variants of TextField component
  - Accepts all native HTMLInput properties as well as:
    - variant: "outlined" | "filled" = 'outlined' (default)
    - label: string
    - helperText?: string
    - characterCounter?: boolean (must be used with maxLength)
    - color?: ThemeColors = inherit (default)
    - error?: boolean = false (default)
- Created TextFieldIcon component specifically for TextField leading and trailing icons
  - accepts leadingIcon and trailingIcon as slot names
  - expects variant ("leading" | "trailing")

---

# v0.0.34

## Breaking Changes

### Typography

- no longer uses `.mdc-typography-*` classes in favor of the `TypographyPalette` field name classes
  - **_camelBack field names (`customTypography: {...}`) will be converted to dash separated lower-case (`custom-typography`) in css_**

```css
.h1 {
}
/* replaces */
.mdc-typography--headline1 {
}
.body {
}
/* replaces */
.mdc-typography--body {
}
/* ...etc */
.custom-typography {
}
```

## Updates

### Theme now merges default Typography (`UUI_TYPOGRAPHY`) and default Palettes (`UUI_PALETTES`) with the respective provided Palettes and Typography.

- No longer necessary to import UUI_TYPOGRAPHY or UUI_PALETTES in consumers respective custom values.
- Ensures that fallback values are UUI defaults instead of MDC defaults.

### Theme Css vars can now be accessed without mdc-\* prefix.

- Palette and Typography values accessed with dashed css convention
- Typography classes can now be designated using their `TypographyConfig` field name.
- **_non-breaking_** `--mdc-*` is still supported but no longer recommended

```css
/* Example Css */
.exampleClass {
  color: var(--on-primary);
  /* replaces */
  color: var(--mdc-theme-on-primary);

  background-color: var(--primary);
  /* replaces */
  background-color: var(--mdc-theme-primary);

  font-size: var(--h3-font-size);
  /* replaces */
  font-size: var(--mdc-typography-h3-font-size);
}
```

### Chip default colors can now easily be overridden in Palette

```js
const palette = {
  shared: {
    ...UUI_PALETTES.shared,
    chip: {
      color: 'var(--on-surface)',
      backgroundColor: 'var(--surface)',
      filledRippleColor: 'pink',
      outlinedRippleColor: 'purple'
    }
  }
};
```

## Development

- Added Code owners
- Added issue templates
- Update README with link to CONTRIBUTING
- Created internal Contributor guide "CONTRIBUTING.md"

---

# v0.0.33

## Breaking Changes

### Types

- removed 'disabled' type option from StepVariants in favor of the "disabled" attribute.

## Updates

## Fixes

### Dialog

- Scroll behavior now properly resets onDestroy

### StepIcon

- Content alignment when using text content.
- Disabled fill color updated to on-disabled instead of disabled

### Step

- Documentation updated with the correct slot name of step-icon

### Stepper

- Stepper last child flex-grow set to 0 fix expansion bug
- Vertical divider alignment and length fixed to be more even between steps

## Development (internal)

- Playwright tests added to website to catch non-relative import build errors that get caught on render
- Playwright tests added to pre-commit hooks
- added running changelog
- added typography "inherit" to default-typography-config
- removed inherit class from Typography component.
