<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Accordion, Button, Drawer, List, ListItem, ListSubHeader, Typography } from '@uui';
  import DRAWER_PROPS from '@defense-unicorns/unicorn-ui/src/lib/Drawer/Drawer.types.d.ts?raw';
  import InlineCode from '../../lib/inline-code.svelte';
  import NAVIGATION_DRAWER_EXP from '../../lib/NavigationDrawer.svelte?raw';
  import NonExpandRail from './non-expand-rail.svelte';
  import ExpandingRail from './expanding-rail.svelte';
  import NON_EXPAND_RAIL from './non-expand-rail.svelte?raw';
  import EXPANDING_RAIL from './expanding-rail.svelte?raw';

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
    , and therefore accepts Box and Paper props as well as some additional specific props.
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

  <Typography variant="h3">Examples</Typography>
  <Typography variant="h4">Default</Typography>
  <Typography variant="body1">
    The Drawer component is by default a "permanent" drawer meaning it is open and anchored in the
    window, sharing screen space with your content.
  </Typography>
  <Typography variant="body1">
    Because Default drawers share the screen with content, you do not need to pass an anchor prop to
    the drawer. They end up on the left, right, top, or bottom of the screen based on where you
    manually place them within grids or a flexbox.
  </Typography>

  <Typography variant="h4">Mobile Drawer</Typography>
  <Typography variant="body1">
    You can turn a default drawer into a "mobile" drawer by setting the
    <InlineCode>open</InlineCode> prop to false based on screen size.
  </Typography>

  <Typography variant="h6">
    The Unicorn UI drawer (what you see on the left), depending on the device used, is an example of
    a permanent or mobile version of the Drawer component.<br /> ** If you're on a tablet or desktop,
    resize your screen to see how the drawer changes from default to "mobile".
  </Typography>

  <Accordion>
    <Typography slot="headerContent">UUI Layout Drawer Code</Typography>
    <VariantExample code={NAVIGATION_DRAWER_EXP} slot="content" />
  </Accordion>

  <Typography variant="h4">Modal</Typography>
  <Typography variant="body1">
    The "modal" Drawer when opened anchors to a particular screen position (only works with left
    currently), and sits on top of all other content. To make a drawer a modal, use the
    <InlineCode>modal</InlineCode> prop and control the state (opened or closed) by the
    <InlineCode>open</InlineCode> and
    <InlineCode>onClose</InlineCode> props.
  </Typography>

  <div>
    <Typography variant="h6">Click for Modal Drawer:</Typography>
    <Button on:click={() => setDrawerOpen('left')}>Left</Button>
  </div>
  <Drawer anchor="left" modal open={drawerPosControls.left} onClose={() => setDrawerOpen('left')}>
    <List slot="content">
      <ListSubHeader>Modal Drawer</ListSubHeader>
      <ListItem text="List Item" />
    </List>
  </Drawer>

  <Accordion>
    <Typography slot="headerContent">Modal Drawer Code</Typography>
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

  <Typography variant="h4">Rail</Typography>
  <Typography variant="body1">
    A navigation <InlineCode>Rail</InlineCode> is a thinner navigation
    <InlineCode>Drawer</InlineCode> when in a closed state.
  </Typography>

  <Typography variant="h5">Examples</Typography>

  <Typography variant="h6">Non Expanding</Typography>
  <NonExpandRail />

  <Accordion>
    <Typography variant="h6" slot="headerContent">Non Expanding Rail Code</Typography>
    <VariantExample slot="content" code={NON_EXPAND_RAIL} />
  </Accordion>

  <Typography variant="h6">Expanding</Typography>
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
