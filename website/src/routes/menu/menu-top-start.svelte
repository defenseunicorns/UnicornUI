<script lang="ts">
  import { Menu, Button, ListItem, ListItemAdornment, Box } from '@uui';

  let open = false;
  let anchorRef: HTMLElement;
</script>

<Box ssx={{ $self: { display: 'flex', gap: '5rem', 'justify-content': 'center' } }}>
  <Button variant="text" on:click={() => (open = !open)} bind:ref={anchorRef}>top-start</Button>
  <Menu bind:open bind:anchorRef anchorOrigin="top-start">
    <ListItem text="List Item">
      <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
        send
      </ListItemAdornment>
      <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
        expand_more
      </ListItemAdornment>
    </ListItem>
    <ListItem text="List Item">
      <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
        mail
      </ListItemAdornment>
      <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
        expand_more
      </ListItemAdornment>
    </ListItem>
  </Menu>
</Box>
