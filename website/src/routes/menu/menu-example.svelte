<script lang="ts">
  import { Menu, Button, List, ListItem, ListItemAdornment, Box } from '@uui';

  let selectedMenu = '';
  const origins = ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'];
  const buttonRefs: Record<string, HTMLElement | undefined> = {
    bottomLeft: undefined,
    bottomRight: undefined,
    topLeft: undefined,
    topRight: undefined
  };

  function setOpen(origin: string) {
    if (selectedMenu === origin) selectedMenu = '';
    else selectedMenu = origin;
  }
</script>

<Box ssx={{ $self: { display: 'flex', gap: '5rem', 'justify-content': 'center' } }}>
  {#each origins as origin}
    <Button variant="text" on:click={() => setOpen(origin)} bind:ref={buttonRefs[origin]}>
      {origin}
    </Button>
    <Menu open={selectedMenu === origin} anchorRef={buttonRefs[origin]} anchorOrigin={origin}>
      <List>
        <ListItem text="List Item">
          <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
            send
          </ListItemAdornment>
        </ListItem>
      </List>
    </Menu>
  {/each}
</Box>
