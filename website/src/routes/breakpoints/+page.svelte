<script lang="ts">
  import DEFAULT_BREAKPOINTS from '@uui/shared/theme/breakpoints/default-breakpoints.ts?raw';
  import BREAKPOINTS_TYPES from '@uui/shared/theme/breakpoints/breakpoints.types.d.ts?raw';
  import BREAKPOINT_CONTEXT_EXAMPLE from './breakpoint-context-example.svelte?raw';
  import BreakpointContextExample from './breakpoint-context-example.svelte';
  import AT_RULE_EXAMPLE from './at-rule-example.svelte?raw';
  import TOP_LEVEL_EXAMPLE from '$lib/doc-page.svelte?raw';
  import VariantExample from '$lib/VariantExample.svelte';
  import AtRuleExample from './at-rule-example.svelte';
  import InlineCode from '$lib/inline-code.svelte';
  import DocPage from '$lib/doc-page.svelte';
  import { Box, Typography } from '@uui';
</script>

<DocPage>
  <Typography variant="h2">Breakpoints</Typography>
  <Typography>
    API that establishes breakpoints for use in the
    <Typography element="a" href="/theme">Theme</Typography>
    and in
    <Typography element="a" href="/scoped-styles">Scoped Styles</Typography>
  </Typography>
  <Typography variant="h3">Default Breakpoints</Typography>
  <VariantExample code={DEFAULT_BREAKPOINTS} />
  <Typography variant="h3">Types</Typography>
  <Typography>
    Custom breakpoints may be added by passing an new Breakpoints interface to the
    <Typography element="a" href="/theme">Theme</Typography>
    component. Field names should be prefixed with '$'
  </Typography>
  <VariantExample code={BREAKPOINTS_TYPES} />
  <Typography variant="h3">Context</Typography>
  <Typography>
    when using the
    <Typography element="a" href="/theme">Theme</Typography> component, Breakpoints are accessible to
    all child components using the
    <InlineCode>BREAKPOINT_CONTEXT</InlineCode>
    and can be accessed using
    <InlineCode>BREAKPOINT_CONTEXT.getBreakpoints()</InlineCode>
  </Typography>
  <Typography variant="h4">Example</Typography>
  <VariantExample code={BREAKPOINT_CONTEXT_EXAMPLE} />
  <Typography variant="h4">Result</Typography>
  <BreakpointContextExample />
  <Typography variant="h3" color="on-background" id="scopedstyles">Scoped Styles</Typography>
  <Box element="ul">
    <Typography element="li" style="padding-top: unset">
      <Typography element="a" href="/scoped-styles">scopedStyles</Typography>
      will use the
      <InlineCode>BREAKPOINT_CONTEXT</InlineCode>
      by default when no
      <InlineCode>Breakpoints</InlineCode>
      are provided to
      <InlineCode>ScopedStyleParams</InlineCode>
    </Typography>
    <Typography element="li">
      <Typography element="a" href="/scoped-styles">scopedStyles</Typography>
      will fallback to default
      <InlineCode>UUI_BREAKPOINTS</InlineCode>
      if no
      <InlineCode>Breakpoints</InlineCode>
      are passed to
      <InlineCode>ScopedStyleParams</InlineCode>
      and the action is used outside of the
      <InlineCode>BREAKPOINT_CONTEXT</InlineCode>
    </Typography>
  </Box>
  <Typography variant="h3">SSX | ScopedStyleExpression</Typography>
  <Typography>
    <InlineCode>Breakpoints</InlineCode> can be used with
    <InlineCode>SSX | ScopedStyleExpression</InlineCode>
    in two ways:
    <Box element="ul">
      <Typography element="li">
        as the top level field name within the <InlineCode>SSX</InlineCode>
      </Typography>
      <Typography element="li">
        as an interpolated variable within a nested <InlineCode>SupportedAtRule</InlineCode>
      </Typography>
    </Box>
  </Typography>
  <Typography variant="h4">SSX Field</Typography>
  <Typography>
    By default scopedStyles parses a $BREAKPOINT field to
    <InlineCode>'@media screen and (min-width: $BREAKPOINT_VALUE) &lbrace;...&rbrace;'</InlineCode>
  </Typography>
  <VariantExample code={TOP_LEVEL_EXAMPLE} />
  <Typography variant="h4">SSX Interpolation</Typography>
  <Typography>
    scopedStyles will also parse SupportedAtRules that contain the
    <InlineCode>$BREAKPOINT</InlineCode> shorthand as a value
  </Typography>
  <VariantExample code={AT_RULE_EXAMPLE} />
  <Typography variant="h5">Result</Typography>
  <AtRuleExample />
</DocPage>
