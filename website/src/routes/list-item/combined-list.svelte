<script lang="ts">
  import {
    Typography,
    List,
    ListItem,
    ListItemAdornment,
    ListItemCheckbox,
    ListItemTypography
  } from '@uui';
  import ListAvatar from './list-avatar.svelte';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<Typography variant="h6">Avatar with Checkboxes</Typography>
<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemTypography>List Item 1</ListItemTypography>
    <ListItemAdornment slot="leading">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailing">
      <ListItemCheckbox checked={selectedIndex === 0} />
    </ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemTypography>List Item 1</ListItemTypography>
    <ListItemAdornment slot="leading">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailing">
      <ListItemCheckbox checked={selectedIndex === 1} />
    </ListItemAdornment>
  </ListItem>
</List>

<Typography variant="h6">Checkboxes with Icons</Typography>
<List class="demo-list">
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemTypography>List Item 1</ListItemTypography>
    <ListItemAdornment slot="leading">
      <ListItemCheckbox checked={selectedIndex === 2} />
    </ListItemAdornment>
    <ListItemAdornment slot="trailing" class="material-symbols-outlined">star</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 3} on:click={() => setSelected(3)}>
    <ListItemTypography>List Item 1</ListItemTypography>
    <ListItemAdornment slot="leading">
      <ListItemCheckbox checked={selectedIndex === 3} />
    </ListItemAdornment>
    <ListItemAdornment slot="trailing" class="material-symbols-outlined">star</ListItemAdornment>
  </ListItem>
</List>
