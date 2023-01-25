# v0.0.34

## Development
- Added issue templates
- Created Contributor guide "CONTRIBUTORS.md"

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
