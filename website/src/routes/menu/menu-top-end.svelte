<script lang="ts">
  import { Menu, Button, ListItem, ListItemAdornment, Box, ListItemTypography } from '@uui';

  let open = false;
  let anchorRef: HTMLElement;
</script>

<Box ssx={{ $self: { display: 'flex', gap: '5rem', 'justify-content': 'center' } }}>
  <Button variant="text" on:click={() => (open = !open)} bind:ref={anchorRef}>top-end</Button>
  <Menu bind:open bind:anchorRef anchorOrigin="top-end">
    <ListItem>
      <ListItemTypography>List Item</ListItemTypography>
      <ListItemAdornment slot="leading" class="material-symbols-outlined">send</ListItemAdornment>
      <ListItemAdornment slot="trailing" class="material-symbols-outlined">
        expand_more
      </ListItemAdornment>
    </ListItem>
    <ListItem>
      <ListItemTypography>List Item</ListItemTypography>
      <ListItemAdornment slot="leading" class="material-symbols-outlined">mail</ListItemAdornment>
      <ListItemAdornment slot="trailing" class="material-symbols-outlined">
        expand_more
      </ListItemAdornment>
    </ListItem>
  </Menu>
</Box>
