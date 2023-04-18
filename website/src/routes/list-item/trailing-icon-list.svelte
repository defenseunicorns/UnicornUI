<script lang="ts">
  import { List, ListItem, ListItemAdornment, ListItemTypography } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemTypography>Sent Mail</ListItemTypography>
    <ListItemAdornment slot="trailing" class="material-symbols-outlined">star</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemTypography>Drafts</ListItemTypography>
    <ListItemAdornment slot="trailing" class="material-symbols-outlined">star</ListItemAdornment>
  </ListItem>

  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemTypography>Inbox</ListItemTypography>
    <ListItemAdornment slot="trailing" class="material-symbols-outlined">star</ListItemAdornment>
  </ListItem>
</List>
