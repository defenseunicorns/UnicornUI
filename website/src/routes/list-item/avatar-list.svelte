<script lang="ts">
  import { List, ListItem, ListItemAdornment } from '@uui';
  import ListAvatar from './list-avatar.svelte';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem
    text="Photos"
    secondaryText="Jan 9, 2014"
    selected={selectedIndex === 0}
    on:click={() => setSelected(0)}
  >
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">image</ListAvatar>
    </ListItemAdornment>
  </ListItem>
  <ListItem
    text="Work"
    secondaryText="Jan 20, 2014"
    divider
    selected={selectedIndex === 1}
    on:click={() => setSelected(1)}
  >
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">work</ListAvatar>
    </ListItemAdornment>
  </ListItem>
  <ListItem
    text="Vacation"
    secondaryText="July 4, 2014"
    disableGutters
    selected={selectedIndex === 2}
    on:click={() => setSelected(2)}
  >
    <ListItemAdornment slot="leading-adornment">
      <ListAvatar element="i" class="material-symbols-outlined">beach_access</ListAvatar>
    </ListItemAdornment>
  </ListItem>
</List>
