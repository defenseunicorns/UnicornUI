<script lang="ts">
  import ListItemTypography from '@defense-unicorns/unicorn-ui/src/lib/List/ListItemTypography.svelte';
  import { List, ListItem } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemTypography>Inbox</ListItemTypography>
    <ListItemTypography secondary>Secondary</ListItemTypography>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemTypography single>Drafts</ListItemTypography>
  </ListItem>
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemTypography>Trash</ListItemTypography>
  </ListItem>
  <ListItem selected={selectedIndex === 3} on:click={() => setSelected(3)}>
    <ListItemTypography>Spam</ListItemTypography>
  </ListItem>
</List>
