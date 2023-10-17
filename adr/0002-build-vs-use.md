# 2. Not Using SMUI and building our own solution

Date: 2023-07-17

## Status

Accepted

## Context

Our project required a Material based component library that developers with knowledge of only html, css, and js/ts could quickly set up, theme, customize, and develop with.

## Decision

We decided not to use SMUI and instead build our own Material component library for Svelte.

### Reasons for not using SMUI

1. **Project Limitations**: Single maintainer with long stretches between development and updates.
2. **Theming**: Requires additional knowledge of material-components and scss in order to theme correctly.
3. **Customization**: SMUI does not offer the level of extensibility and css customization that we would like.

## Consequences

- Requires development and maintenance resources that extend beyond those that are required to utilize an existing component library.
- Allows control of iteration styling and updating.
- Allows the control and customization of design tooling.
- Relies on [material-components-web](https://github.com/material-components/material-components-web)
