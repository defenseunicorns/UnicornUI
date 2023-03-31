<script lang="ts">
  import { Button, Drawer, List, ListItem, ListSubHeader, Typography } from '@uui';

  const drawerPosControls: Record<string, boolean> = {
    left: false,
    right: false,
    top: false,
    bottom: false
  };

  function setDrawerOpen(position: string) {
    drawerPosControls[position] = !drawerPosControls[position];
  }
</script>

<div>
  <Typography variant="h6">Click for Modal Drawer:</Typography>
  <Button on:click={() => setDrawerOpen('left')}>Left</Button>
  <Button on:click={() => setDrawerOpen('right')}>Right</Button>
</div>
<Drawer anchor="left" modal open={drawerPosControls.left} onClose={() => setDrawerOpen('left')}>
  <List slot="content">
    <ListSubHeader>Modal Drawer</ListSubHeader>
    <ListItem text="List Item" />
  </List>
</Drawer>
<Drawer anchor="right" modal open={drawerPosControls.right} onClose={() => setDrawerOpen('right')}>
  <List slot="content">
    <ListSubHeader>Modal Drawer</ListSubHeader>
    <ListItem text="List Item" />
  </List>
</Drawer>
