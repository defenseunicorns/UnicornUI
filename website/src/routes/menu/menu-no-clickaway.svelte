<script lang="ts">
  import { Menu, Button, ListItem, Box } from '@uui';

  let anchorRef: HTMLElement;
  let open = false;
</script>

<Box ssx={{ $self: { display: 'flex', gap: '5rem', 'justify-content': 'center' } }}>
  <Button variant="text" on:click={() => (open = !open)} bind:ref={anchorRef}>No Clickaway</Button>
  <Menu {open} bind:anchorRef anchorOrigin="bottom-start" clickaway={false}>
    <ListItem text="List Item" />
  </Menu>
</Box>
