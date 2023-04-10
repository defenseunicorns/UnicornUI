# v0.0.46

## Updates

### Menu

- Create Menu component that anchors to a reference element.
- Uses Paper as base component and therefore takes elevation and ssx.
- Uses @floating-ui/dom computePosition() on autoUpdate() to handle calculating menu position in relation to anchor element when user scrolls or resizes screen.

```ts
import type { PaperProps } from '../Paper/Paper.types';

export type AnchorOrigin = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface MenuProps<T extends EventTarget> extends PaperProps<T> {
  open: boolean;
  anchorRef?: Element;
  anchorOrigin?: AnchorOrigin;
  onClose?: () => void;
}
```

### Checkbox

- Created generic Checkbox.
- Uses Box as its foundation and extends BoxProps of type HTMLInputElement.
- Is wrapped by a container that applies the `mdc-form-field` class.
- Both the stroke and background colors can be modified.
- Disabled state uses the `--disabled` theme var.

```ts
export interface CheckboxProps<T extends EventTarget> extends BoxProps<T> {
  checked?: boolean;
  indeterminate?: boolean;
  color?: string;
  backgroundColor?: string;
}
```

### Dialog

- `DialogProps` now extend `PaperProps`
  - All `PaperProps` are applied to the `.dialog-surface`
  - Default elevation is set to `16`
- Added `containerSSX` prop that applies ssx to the `.dialog-container` which is the top level component in `Dialog`
- `Dialog` can now be closed by pressing the `Escape` key when the `Dialog` is `open` and `clickAway` is set to `true`
  - event listener calls the `toggleDialog` bindable method.

## Breaking Changes

### Dialog

- removed mdc classes and replaced with more friendly classnames:

  - `.dialog-container`
  - `.dialog-surface`
  - `.dialog-content`
  - `.dialog-actions`
  - `.dialog-title`

  ### ListItemCheckbox (Deprecated: Will Be Removed)

  - With the creating of Checkbox, there is no longer a need for ListItemCheckbox.
  - Checkbox does what ListItemCheckbox did but with some added benefits of default form-field label alignment and color customizing.
  - If you want to see examples of using Checkbox with ListItem, please look at the List Item page on Unicorn UI, specifically at the Checkbox examples.

# v0.0.45

## Breaking Changes

### ListItem

- Renamed slots in dash format: leadingAdornment => `leading-adornment`; trailingAdornment => `trailing-adornment`; nestedContent => `nested-content`.
- Removed ListItem slot props `disabled` and `selected` and ListItemSlots type.
- This should not be of major effect, since any logic for controlling selected and disabled states of ListItems does not live within ListItem and therefore does not need to be lifted out. If you were using these slot props for controlling ListItemAdornment state, you only need to apply the same logic controlling ListItem to ListItemAdornment.

i.e.

```ts
<ListItem selected={...logic} let:selected disabled={...logic} let:disabled>
  <ListItemAdornment slot="trailing-content">
    <ListItemCheckbox checked={selected} {disabled}>
  </ListItemAdornment>
</ListITem>
```

now becomes:

```ts
<ListItem selected={...logic} disabled={...logic}>
  <ListItemAdornment slot="trailing-content">
    <ListItemCheckbox checked={...logic} disabled={...logic}>
  </ListItemAdornment>
</ListITem>
```

# v0.0.44

## Updates

### Button

- Props
  - updated `color` prop to take in `ThemeColor`
    - It sets the `backgroundColor` to the prop value
    - It sets the `textColor` to the prop value prefixed with `on-`
  - added `backgroundColor` prop that takes in a `ThemeColor`
    - overrides the `backgroundColor` from the `color` prop
    - Applies as `background-color` in `raised` and `flat` variants
    - Applies as `color`, `border-color` in `default` and `outlined` variants
  - added `textColor` prop that takes in a `ThemeColor`
    - overrides the label `color` in the `raised` and `flat` variants.

# v0.0.43

## Updates

### Drawer

- Created `Drawer` component that can either be permanent or temporary (modal).
- Extends Paper so it can take elevation as well as all BoxProps.
- Has two slots -- header and content.
- Works well with using `List` as the content container.

```ts
export interface DrawerProps<T extends EventTarget> extends PaperProps<T> {
  anchor?: DrawerAnchor;
  open?: boolean;
  variant?: DrawerVariant;
  hideBackdrop?: boolean;
  onClose?: () => void;
}
```

### Drawer Header

- Extracted header that can be used with a `Drawer`.
- Uses `Box` as base.
- Text is styled by `--on-surface`

```ts
export interface DrawerHeaderProps<T extends EvenTarget> extends BoxProps<T> {
  title: string;
  subtitle?: string;
}
```

### Rail

- Thinner version of the `Drawer` that typically shows `IconButton`s as content.
- Extends Paper so it can take elevation as well as all BoxProps.
- Default elevation is 16.
- Has two slots -- header and content.
- Is expandable via the `open` prop.

```ts
export interface RailProps<T extends EventTarget> extends PaperProps<T> {
  open?: boolean;
}
```

# v0.0.42

## Fixes

### IconButton

- `IconButtonProps` now properly extends `BoxProps`

# v0.0.41

## Updates

### Dependencies

- `csstype` is now a `dependency` instead of a `devDependency` to ensure `SSX` types are accessible.

# v0.0.40

## Breaking Changes

## Paper

- No longer uses overlay to provide the semi-transparent shade in dark mode

## Overlay

- Removed the overlay component

## Updates

### Paper

- When `html[data-theme=dark]` `.paper` now gains a `background-image` with a `linear-gradient` that increases and decreases in opacity when the `elevation` prop increases and decreases.

## Fixes

- Removing the `Overlay` component will fix the bug where the MDC Overlay classes are not properly applied if the `Button` component is not present.
- Removing the `Overlay` component fixes the overlay layer sizing and scroll behavior.

# v0.0.39

## Updates

### Paper

- Added `backgroundColor` prop that accepts `ThemeColors`and overrides the `background-color` of the `Paper`.
- Added `color` prop that accepts `ThemeColors`and overrides the `color` of the `Paper`.

### Accordion

- Added `hoverColor` prop that accepts `ThemeColors`that will change the hover state color of the default icon.

# v0.0.38

## Breaking Changes

### Theme

- Now restricted to dark or light theme.
- Removed 'shared' `Palette`
  - Values for dark and light must be explicitly defined and will no longer be shared using the 'shared' `Pallettes` field.
  - `UUI_PALETTES` no longer contains 'shared' field.

## Updates

### Paper

- Now only applies the overlay when the theme is set to dark.
- Overlay opacity is now mapped to match the material opacities.

### Theme

- Now supports deep merging User `Palettes` with the default (`UUI_PALETTES`).
  - User created `Palettes` are automatically merged with `UUI_Palettes` before being applied by the `Theme` component.
- Updated documentation to reflect the removal of custom and 'shared' `Palettes`.
- `Theme` component now sets the html `data-theme` value.
  - `data-theme` is updated whenever the theme changes.
- Created `SupportedThemes` type.

# v0.0.37

## Updates

### List

- Base component for containg list items, used in components such as menu, nav rail/drawer, selects.
- Has default padding, which can be disabled, but other than that must be styled with custom classes passed as prop.
- Has one unnamed slot for rendering one or more children.
- Uses Box under the hood, which allows for event redirection and ssx.

```ts
export interface ListProps<T extends EventTarget> extends BoxProps<T> {
  disablePadding?: boolean;
}
```

```ts
<List class="demo-list" ssx={{ $self: { backgroundColor: 'red' } }} />
```

### ListItem

- Main component of lists, wrapping text and adornments.
- Three named slots: leading-adornment, trailing-adornment, nested-content
- States: hoverable, selected, disabled.
- Uses Box unded the hood, which allows for event redirection and ssx.

```ts
export type ListItemSlotProps = Record<string, boolean | undefined>;

export interface ListItemProps<T extends EventTarget>
  extends svelte.JSX.IntrinsicAttributes<BoxProps<T>> {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
}

export interface ListItemSlots {
  default: ListItemSlotProps;
  leadingAdornment: ListItemSlotProps;
  trailingAdornment: ListItemSlotProps;
  nested: ListItemSlotProps;
}
```

```ts
<ListItem text="Item" ssx={{ $self: { backgroundColor: 'red' } }} />
```

### ListItemAdornment

- Used for passing leading or trailing adornments to ListItem.
- Adds the mdc-deprecated-list-item\_\_graphic or mdc-deprecated-list-item\_\_meta classes.
- Accepts children. If child is passed, add the slot=<name> directive to the child as well.
- Uses Box unded the hood, which allows for event redirection and ssx.

```ts
export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>;
```

### ListItemCheckbox

- Checkbox currently made specifically for use in ListItem as leading or trailing adornment.

```ts
export interface ListItemCheckboxProps extends svelte.JSX.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  indeterminate?: boolean;
}
```

### ListGroup

- Wraps Lists and is used in conjunction with ListSubHeader.
- One unnamed slot for rendering children.
- Uses Box under the hood.

```ts
export type ListGroupProps = svelte.JSX.HTMLAttributes<HTMLDivElement>;
```

### ListSubHeader

- Used primarily with ListGroup, though can be used as child of List directly.
- Gives clarification of what list is for. (i.e 'settings')
- One unnamed slot for rendering children.
- Uses Box under the hood.

```ts
export type ListSubHeaderProps = svelte.JSX.HTMLAttributes<HTMLHeadingElement>;
```

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

## Internal

### ComponentAsProp

- There now exists a shared type for a component passed as a prop -- `ComponentAsProp`
- This allows for declaring the type of component and its props in a JS object that can then be passed to the <svelte:component /> directive.

```ts
export type ComponentAsProp<T> = {
  component: ComponentType<SvelteComponentTyped>;
  props: T;
};
```

```ts
const props: {adornment: ComponentAsProp<IconButtonProps>} = {
  adornment: {
    component: IconButton
    props: {iconContent: 'favorite', iconClass: 'material-symbol-outlined'}
  }
}
```

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

### TypographyConfig now supports css typing, including vendor attributes and intellisense

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

### Theme now merges default Typography (`UUI_TYPOGRAPHY`) and default Palettes (`UUI_PALETTES`) with the respective provided Palettes and Typography

- No longer necessary to import UUI_TYPOGRAPHY or UUI_PALETTES in consumers respective custom values.
- Ensures that fallback values are UUI defaults instead of MDC defaults.

### Theme Css vars can now be accessed without mdc-\* prefix

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

```

```
