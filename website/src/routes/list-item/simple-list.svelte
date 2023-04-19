<script lang="ts">
  import { List, ListItem, Typography } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <Typography>Inbox</Typography>
    <Typography>Secondary</Typography>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <Typography>Drafts</Typography>
  </ListItem>
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <Typography>Trash</Typography>
  </ListItem>
  <ListItem selected={selectedIndex === 3} on:click={() => setSelected(3)}>
    <Typography>Spam</Typography>
  </ListItem>
</List>
