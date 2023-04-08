<script lang="ts">
  import { List, ListItem, ListItemAdornment } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem text="Sent Mail" selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      send
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Drafts" selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      drafts
    </ListItemAdornment>
  </ListItem>

  <ListItem text="Inbox" selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      inbox
    </ListItemAdornment>
  </ListItem>
</List>
