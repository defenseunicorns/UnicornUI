<script lang="ts">
  import ListItemTypography from '@defense-unicorns/unicorn-ui/src/lib/List/ListItemTypography.svelte';
  import { List, ListItem, ListItemAdornment } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemTypography>Sent Mail</ListItemTypography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">send</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemTypography>Drafts</ListItemTypography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">drafts</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemTypography>Inbox</ListItemTypography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">inbox</ListItemAdornment>
  </ListItem>
</List>
