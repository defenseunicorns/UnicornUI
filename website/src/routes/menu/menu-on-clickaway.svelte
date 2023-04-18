<script lang="ts">
  import { Menu, Button, ListItem, Box, ListItemTypography } from '@uui';

  let anchorRef: HTMLElement;
  let open = false;

  function clickaway() {
    alert('custom clickaway function fired');
    open = false;
  }
</script>

<Box ssx={{ $self: { display: 'flex', gap: '5rem', 'justify-content': 'center' } }}>
  <Button variant="text" on:click={() => (open = !open)} bind:ref={anchorRef}>Clickaway</Button>
  <Menu {open} bind:anchorRef anchorOrigin="bottom-start" onClickaway={clickaway}>
    <ListItem><ListItemTypography>List Item</ListItemTypography></ListItem>
  </Menu>
</Box>
