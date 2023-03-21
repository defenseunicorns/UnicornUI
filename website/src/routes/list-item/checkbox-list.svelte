<script lang="ts">
  import { List, ListItem, ListItemAdornment, ListItemCheckbox } from '@uui';
</script>

<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leading-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="leading-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>

<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="trailing-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="trailing-adornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>
