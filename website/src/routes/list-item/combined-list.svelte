<script lang="ts">
  import { Typography, List, ListItem, ListItemAdornment, Checkbox } from '@uui';
  import ListAvatar from './list-avatar.svelte';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<Typography variant="h6">Avatar with Checkboxes</Typography>
<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <Typography>List Item 1</Typography>
    <ListItemAdornment slot="leading">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailing">
      <Checkbox checked={selectedIndex === 0} />
    </ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <Typography>List Item 1</Typography>
    <ListItemAdornment slot="leading">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailing">
      <Checkbox checked={selectedIndex === 1} />
    </ListItemAdornment>
  </ListItem>
</List>

<Typography variant="h6">Checkboxes with Icons</Typography>
<List class="demo-list">
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <Typography>List Item 1</Typography>
    <ListItemAdornment slot="leading">
      <Checkbox checked={selectedIndex === 2} />
    </ListItemAdornment>
    <ListItemAdornment slot="trailing" class="material-symbols-outlined">star</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 3} on:click={() => setSelected(3)}>
    <Typography>List Item 1</Typography>
    <ListItemAdornment slot="leading">
      <Checkbox checked={selectedIndex === 3} />
    </ListItemAdornment>
    <ListItemAdornment slot="trailing" class="material-symbols-outlined">star</ListItemAdornment>
  </ListItem>
</List>
