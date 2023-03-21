<script lang="ts">
  import { Typography, List, ListItem, ListItemAdornment, ListItemCheckbox } from '@uui';
  import ListAvatar from './list-avatar.svelte';
</script>

<Typography variant="h6">Avatar with Checkboxes</Typography>
<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailing-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailing-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>

<Typography variant="h6">Checkboxes with Icons</Typography>
<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leading-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
    <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leading-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
    <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
</List>
