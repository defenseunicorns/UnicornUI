<script lang="ts">
  import { Menu, Button, List, ListItem, ListItemAdornment, Box } from '@uui';
  import type { AnchorOrigin } from '@uui';

  let selectedMenu = '';
  const origins: AnchorOrigin[] = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
  const buttonRefs: Record<string, HTMLElement | undefined> = {
    'bottom-start': undefined,
    'bottom-end': undefined,
    'top-start': undefined,
    'top-end': undefined
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
    <Menu open={selectedMenu === origin} bind:anchorRef={buttonRefs[origin]} anchorOrigin={origin}>
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
