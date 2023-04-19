<script lang="ts">
  import { List, ListItem, ListItemAdornment, ListItemCheckbox, Typography } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <Typography>List Item 1</Typography>
    <ListItemAdornment slot="leading">
      <ListItemCheckbox checked={selectedIndex === 0} />
    </ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <Typography>List Item 2</Typography>
    <ListItemAdornment slot="leading">
      <ListItemCheckbox checked={selectedIndex === 1} />
    </ListItemAdornment>
  </ListItem>
</List>

<List class="demo-list">
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <Typography>List Item 1</Typography>
    <ListItemAdornment slot="trailing">
      <ListItemCheckbox checked={selectedIndex === 2} />
    </ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 3} on:click={() => setSelected(3)}>
    <Typography>List Item 1</Typography>
    <ListItemAdornment slot="trailing">
      <ListItemCheckbox checked={selectedIndex === 3} />
    </ListItemAdornment>
  </ListItem>
</List>
