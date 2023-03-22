<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Accordion, Typography } from '@uui';
  import DRAWER_PROPS from '@uui/Drawer/Drawer.types.d.ts?raw';
  import InlineCode from '../../lib/inline-code.svelte';
  import LAYOUT_EXAMPLE from '../+layout.svelte?raw';
</script>

<DocPage>
  <Typography variant="h1">Drawer</Typography>
  <Typography variant="h2">Props</Typography>
  <Typography variant="body1">
    <InlineCode>Drawer</InlineCode> at it's base is a <InlineCode>Paper</InlineCode> component, which
    extends
    <InlineCode>Box</InlineCode>
    , and therefore accepts Box and Paper props as well as some additional specific props -- anchor,
    open, variant, and hideBackDrop.
  </Typography>
  <Typography variant="body1">Defaults to anchor left and variant permanent.</Typography>

  <VariantExample code={DRAWER_PROPS} />

  <Typography variant="h2">Slots</Typography>
  <Typography variant="body1">
    <InlineCode>Drawer</InlineCode> has two named slots:
    <ul>
      <li>header</li>
      <li>content</li>
    </ul>
  </Typography>

  <Typography variant="h3">Variants</Typography>
  <Typography variant="h4">Permanent</Typography>
  <Typography variant="body1">
    The permanent Drawer is by default always open and anchored, sharing screen space with your
    content. The Unicorn UI navigation you see currently on the left of your screen is an example of
    the permanent Drawer.
  </Typography>
  <Accordion>
    <Typography slot="headerContent">UUI Layout Drawer Code</Typography>
    <VariantExample code={LAYOUT_EXAMPLE} slot="content" />
  </Accordion>
</DocPage>

<style lang="scss">
</style>
