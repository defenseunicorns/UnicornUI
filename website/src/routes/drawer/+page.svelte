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
    open, variant, and onClose.
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
    The Drawer component is by default a permanent drawer meaning it is open and anchored in the
    window, sharing screen space with your content.
  </Typography>
  <Typography variant="body1">
    Because permanent drawers share the screen with content, you do not need to pass an anchor prop
    to the drawer. They end up on the left, right, top, or bottom of the screen based on where you
    manually place them within grids or flexbox.
  </Typography>

  <Typography variant="h4">Mobile Drawer</Typography>
  <Typography variant="body1">
    You can turn a permanent drawer into a mobile drawer (one that closes) by setting the
    <InlineCode>open</InlineCode> prop to false based on screen size.
  </Typography>

  <Typography variant="h6">
    The Unicorn UI drawer (what you see on the left), depending on the device used, is an example of
    a permanent or mobile version of the Drawer component.
  </Typography>

  <Accordion>
    <Typography slot="headerContent">UUI Layout Drawer Code</Typography>
    <VariantExample code={LAYOUT_EXAMPLE} slot="content" />
  </Accordion>

  <Typography variant="h4">Temporary</Typography>
  <Typography variant="body1">
    The temporary Drawer acts like a modal, which when opened anchors to a particular screen
    position (only works with left currently), and sits on top of all other content. To control the
    state of a temporary draw (opened or closed) use the <InlineCode>open</InlineCode> and
    <InlineCode>onClose</InlineCode> props.
  </Typography>

  <div>
    <Typography variant="subtitle1">Click for Temporary Drawer:</Typography>
    <Button on:click={() => setDrawerOpen('left')}>Left</Button>
  </div>
  <Drawer
    anchor="left"
    variant="temporary"
    open={drawerPosControls.left}
    onClose={() => setDrawerOpen('left')}
  >
    <List slot="content">
      <ListSubHeader>Temporary Drawer</ListSubHeader>
      <ListItem text="List Item" />
    </List>
  </Drawer>

  <Accordion>
    <Typography slot="headerContent">Temporary Drawer Code</Typography>
    <VariantExample
      slot="content"
      code={`
<Drawer
  anchor="left"
  variant="temporary"
  open={drawerPosControls.left}
  onClose={() => setDrawerOpen('left')}
>
  <List slot="content">
    <ListSubHeader>Temporary Drawer</ListSubHeader>
    <ListItem text="List Item" />
  </List>
</Drawer>
    `}
    />
  </Accordion>
</DocPage>
