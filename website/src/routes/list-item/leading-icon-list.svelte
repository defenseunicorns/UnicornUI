<script lang="ts">
  import { List, ListItem, ListItemAdornment, Typography } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <Typography>Sent Mail</Typography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">send</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <Typography>Drafts</Typography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">drafts</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <Typography>Inbox</Typography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">inbox</ListItemAdornment>
  </ListItem>
</List>
