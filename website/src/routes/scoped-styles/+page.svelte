<script lang="ts">
  import { Box, Typography } from '@uui';
  import SCOPED_STYLE_PARAMS from '@uui/shared/theme/config/scopedStyles.types.d.ts?raw';
  import EXAMPLE_COMPONENT from './example-component.svelte?raw';
  import ComposedExample from './composed-example.svelte';
  import COMPOSED_EXAMPLE from './composed-example.svelte?raw';
  import VariantExample from '$lib/VariantExample.svelte';
  import DocPage from '$lib/doc-page.svelte';
  import InlineCode from '$lib/inline-code.svelte';
</script>

<DocPage>
  <Typography variant="h2">Scoped Styles</Typography>
  <Typography>
    The <InlineCode>scopedStyles</InlineCode> action has been created to allow styling on composed components
    without abusing the <InlineCode>:global</InlineCode> tag and allowing isolated component styles to
    bleed into the global space. In order to solve svelte shortcomings related to styling composed components,
    Unicorn UI implements a runtime "js to css" action to apply truly scoped css styles to custom components
    without the need of large external dependencies by consuming
    <InlineCode>SSX | ScopedStyleExpression</InlineCode>
    . While <InlineCode>SSX</InlineCode> uses "js in css", in order to maintain the simplicity and continuity
    that svelte provides, ScopedStyleExpression has been designed to "write like css" with only a few
    simple caveats such as support for '&' based css nesting and
    <Typography element="a" href="/breakpoints">Breakpoints</Typography>
    .
  </Typography>
  <Typography variant="h3">Action</Typography>
  <Box element="ul">
    <InlineCode>use:scopedStyles</InlineCode>
  </Box>
  <Typography variant="h3">Params</Typography>
  <VariantExample code={SCOPED_STYLE_PARAMS} />
  <Typography variant="h3">Reserved Tokens</Typography>
  <Box element="ul">
    <Typography element="li">
      <InlineCode>$self //Replaced with the uniquely scoped class name</InlineCode>
    </Typography>
    <Typography element="li">
      <InlineCode>& //Replaced with parent keys parsed selector</InlineCode>
    </Typography>
    <Typography element="li">
      See:
      <Typography element="a" href="/breakpoints/#scopedstyles">Breakpoints</Typography>
    </Typography>
  </Box>
  <Typography variant="h3">Examples</Typography>
  <Typography variant="h4">Creating a component</Typography>
  <VariantExample code={EXAMPLE_COMPONENT} />
  <Typography variant="h4">Using the component</Typography>
  <VariantExample code={COMPOSED_EXAMPLE} />
  <Typography variant="h4">Result</Typography>
  <ComposedExample />
</DocPage>
