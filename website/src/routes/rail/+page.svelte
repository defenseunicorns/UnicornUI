<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { Typography, Accordion } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import NonExpandRail from './non-expand-rail.svelte';
  import NON_EXPAND_RAIL from './non-expand-rail.svelte?raw';
  import ExpandingRail from './expanding-rail.svelte';
  import EXPANDING_RAIL from './expanding-rail.svelte?raw';
  import InlineCode from '../../lib/inline-code.svelte';
  import RAIL_PROPS from '@uui/Rail/rail.types.d.ts?raw';
</script>

<DocPage class="docs">
  <Typography variant="h1">Rail</Typography>
  <Typography variant="body1">
    The navigation <InlineCode>Rail</InlineCode> is very similar to the navigation
    <InlineCode>Drawer</InlineCode> however it can only exist in a permanent fashion as either expanding
    or non-expanding, and has fewer custom props.
  </Typography>

  <Typography variant="h2">Props</Typography>
  <Typography variant="body1">
    <InlineCode>Rail</InlineCode> extends the PaperProps interface, which means it accepts all props
    for <InlineCode>Paper</InlineCode> and <InlineCode>Box</InlineCode>.
  </Typography>
  <VariantExample code={RAIL_PROPS} />

  <Typography variant="h2">Slots</Typography>
  <Typography variant="body1">
    <InlineCode>Rail</InlineCode> has to two named slots:
    <ul>
      <li>header</li>
      <li>content</li>
    </ul>
    <br />
    You can place anything you'd like into either of these slots to customize your rail.
  </Typography>
  <VariantExample
    code={`
    <Paper ...>
  <div ...>
    <slot name="header" />
  </div>
  <div ...>
    <slot name="content" />
  </div>
</Paper>
  `}
  />

  <Typography variant="h3">Non Expanding</Typography>
  <NonExpandRail />

  <Accordion>
    <Typography variant="h6" slot="headerContent">Non Expanding Rail Code</Typography>
    <VariantExample slot="content" code={NON_EXPAND_RAIL} />
  </Accordion>

  <Typography variant="h3">Expanding</Typography>
  <ExpandingRail />

  <Accordion>
    <Typography variant="h6" slot="headerContent">Non Expanding Rail Code</Typography>
    <VariantExample slot="content" code={EXPANDING_RAIL} />
  </Accordion>
</DocPage>

<style lang="scss" global>
  .rail-demo-container {
    display: flex;
    overflow: hidden;
    width: 500px;
    height: 700px;
    background-color: var(--surface);
    border: 1px solid var(--primary);
  }
</style>
