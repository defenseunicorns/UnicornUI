<script lang="ts">
  import { Box, Typography } from '@uui';
  import EXAMPLE_COMPONENT from './example-component.svelte?raw';
  import ComposedExample from './composed-example.svelte';
  import COMPOSED_EXAMPLE from './composed-example.svelte?raw';
  import VariantExample from '$lib/VariantExample.svelte';
</script>

<section>
  <Typography variant="h3">Scoped Styles</Typography>
  <Typography variant="body1">
    ScopedStyleExpression has been created to allow styling on composed components without abusing
    the :global tag and allowing isolated component styles to bleed into the global space. In order
    to solve svelte shortcomings related to styling composed components, Unicorn UI implements a
    runtime js to css action to apply truly scoped css styles to custom components without the need
    of large external dependencies. While ScopedStyleExpression (SSX) uses "js in css", in order to
    maintain the simplicity and continuity that svelte provides, ScopedStyleExpression has been
    designed to "write like css" with only a few simple caveats such as support for '&' based css
    nesting.</Typography
  >
  <Typography variant="h4">Action:</Typography>
  <Box element="ul">
    <Typography variant="body1">scopedStyles</Typography>
  </Box>
  <Typography variant="h4">Params:</Typography>
  <Box element="ul">
    <Typography variant="body1">ssx?: ScopedStyleExpression | SSX</Typography>
  </Box>
  <Typography variant="h4">Reserved Tokens:</Typography>
  <Box element="ul">
    <Typography variant="body1"
      >$self
      <Box element="ul">
        <Typography>* replaced with internally generated unique class name.</Typography>
      </Box>
    </Typography>
    <Typography variant="body1">
      &
      <Box element="ul">
        <Typography>
          * replaced with the "parent" selector within the ScopedStyleExpression Object.
        </Typography>
      </Box>
    </Typography>
  </Box>
  <Typography variant="h4">Examples:</Typography>
  <Typography variant="h5">Creating a component:</Typography>
  <VariantExample code={EXAMPLE_COMPONENT} />
  <Typography variant="h5">Using the component:</Typography>
  <VariantExample code={COMPOSED_EXAMPLE} />
  <Typography variant="h5">Result:</Typography>
  <ComposedExample />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 4rem;
  }
</style>
