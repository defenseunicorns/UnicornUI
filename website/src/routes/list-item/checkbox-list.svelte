<script lang="ts">
  import { Checkbox, List, ListItem, ListItemAdornment } from '@uui';

  let selectedIndex = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem text="List Item 1" selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemAdornment slot="leading-adornment">
      <Checkbox checked={selectedIndex === 0} />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2" selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemAdornment slot="leading-adornment">
      <Checkbox checked={selectedIndex === 1} />
    </ListItemAdornment>
  </ListItem>
</List>

<List class="demo-list">
  <ListItem text="List Item 1" selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemAdornment slot="trailing-adornment">
      <Checkbox checked={selectedIndex === 2} />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2" selected={selectedIndex === 3} on:click={() => setSelected(3)}>
    <ListItemAdornment slot="trailing-adornment">
      <Checkbox checked={selectedIndex === 3} />
    </ListItemAdornment>
  </ListItem>
</List>
