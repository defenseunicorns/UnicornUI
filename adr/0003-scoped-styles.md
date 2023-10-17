# 3. scoped-styles

Date: 2023-07-17

## Status

Accepted

## Context

Svelte does not support composed component styling without :global. This left a decision between "css in js" or "semantic styling"

## Decision

We made the decision to create `scopedStyles (SSX)` as a way to introduced truly scoped css within UnicornUI(UUI) without using a third-party js-to-css or semantic styling solution.

## Consequences

- Relies on [csstype](github.com/frenic/csstype) for TypesScript implementation.
- Allows developers to use what they already know by being written as css in json.
- Requires additional knowledge provided in web documentation.
- Applies scoped styling at runtime/page-load.
