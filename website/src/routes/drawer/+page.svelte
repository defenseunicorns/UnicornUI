<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Accordion, Button, Drawer, List, ListItem, ListSubHeader, Typography } from '@uui';
  import DRAWER_PROPS from '@defense-unicorns/unicorn-ui/src/lib/Drawer/Drawer.types.d.ts?raw';
  import InlineCode from '../../lib/inline-code.svelte';
  import LAYOUT_EXAMPLE from '../+layout.svelte?raw';

  const drawerPosControls: Record<string, boolean> = {
    left: false,
    right: false,
    top: false,
    bottom: false
  };

  function setDrawerOpen(position: string) {
    drawerPosControls[position] = !drawerPosControls[position];
    console.log(position, drawerPosControls[position]);
  }
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
  <Typography variant="body1">
    This variant does not need an anchor location. Because permanent drawers share the screen with
    content, they end up on the left, right, top, or bottom of the screen based on where you
    manually place them.
  </Typography>
  <Accordion>
    <Typography slot="headerContent">UUI Layout Drawer Code</Typography>
    <VariantExample code={LAYOUT_EXAMPLE} slot="content" />
  </Accordion>

  <Typography variant="h4">Temporary</Typography>
  <Typography variant="body1">
    The temporary Drawer acts like a modal, which when opened anchors to a particular screen
    position (defaults to left). It sits on top of all other content.
  </Typography>

  <div>
    <Button on:click={() => setDrawerOpen('left')}>Left</Button>
    <Button on:click={() => setDrawerOpen('right')}>Right</Button>
    <Button>Top</Button>
    <Button>Bottom</Button>
  </div>
  <Drawer
    anchor="left"
    variant="temporary"
    open={drawerPosControls.left}
    onClose={() => setDrawerOpen('left')}
  >
    <List slot="content">
      <ListSubHeader>Temporary Left</ListSubHeader>
      <ListItem text="List Item" />
    </List>
  </Drawer>

  <Drawer
    anchor="right"
    variant="temporary"
    open={drawerPosControls.right}
    onClose={() => setDrawerOpen('right')}
  >
    <List slot="content">
      <ListSubHeader>Temporary Right</ListSubHeader>
      <ListItem text="List Item" />
    </List>
  </Drawer>
</DocPage>

<style lang="scss">
</style>
