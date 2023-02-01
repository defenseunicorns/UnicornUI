# v0.0.35

## Breaking Changes

## Updates

## Development

- Added Outlined TextField

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

### Theme css vars can now be accessed without mdc-\* prefix.

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
