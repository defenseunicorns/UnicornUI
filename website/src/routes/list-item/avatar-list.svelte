<script lang="ts">
  import { List, ListItem, ListItemAdornment } from '@uui';
  import ListAvatar from './list-avatar.svelte';
</script>

<List class="demo-list">
  <ListItem text="Photos" secondaryText="Jan 9, 2014">
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">image</ListAvatar>
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Work" secondaryText="Jan 20, 2014" divider>
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">work</ListAvatar>
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Vacation" secondaryText="July 4, 2014" disableGutters>
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">beach_access</ListAvatar>
    </ListItemAdornment>
  </ListItem>
</List>
