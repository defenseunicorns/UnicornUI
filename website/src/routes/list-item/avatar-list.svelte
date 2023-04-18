<script lang="ts">
  import { List, ListItem, ListItemAdornment, ListItemTypography } from '@uui';
  import ListAvatar from './list-avatar.svelte';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemTypography>Photos</ListItemTypography>
    <ListItemTypography secondary>Jan 9, 2014</ListItemTypography>
    <ListItemAdornment slot="leading">
      <ListAvatar element="i" class="material-symbols-outlined">image</ListAvatar>
    </ListItemAdornment>
  </ListItem>
  <ListItem divider selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemTypography>Work</ListItemTypography>
    <ListItemTypography secondary>Jan 20, 2014</ListItemTypography>
    <ListItemAdornment slot="leading">
      <ListAvatar element="i" class="material-symbols-outlined">work</ListAvatar>
    </ListItemAdornment>
  </ListItem>
  <ListItem disableGutters selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemTypography>Vacation</ListItemTypography>
    <ListItemTypography secondary>July 4, 2014</ListItemTypography>
    <ListItemAdornment slot="leading">
      <ListAvatar element="i" class="material-symbols-outlined">beach_access</ListAvatar>
    </ListItemAdornment>
  </ListItem>
</List>
