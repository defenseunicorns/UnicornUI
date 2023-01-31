# v0.0.34

## Updates

### Theme Css vars can now be accessed without mdc-\* prefix.

- Palette and Typography values accessed with dashed css convention
- \* non-breaking --mdc-\* is still supported but not recommended

```css
/* Example Css */
.myClass {
  color: var(--on-primary);
  background-color: var(--primary);
  font-size: var(--h3-font-size);
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
