<script lang="ts">
  import { ListGroup, List, ListItem, ListItemAdornment, ListSubHeader } from '@uui';
</script>

<ListGroup class="demo-list">
  <ListSubHeader>List 1</ListSubHeader>
  <List>
    <ListItem text="List Item" divider>
      <ListItemAdornment class="material-symbols-outlined" slot="leading-adornment">
        star
      </ListItemAdornment>
    </ListItem>
  </List>
  <ListSubHeader>List 2</ListSubHeader>
  <List>
    <ListItem text="List Item">
      <ListItemAdornment class="material-symbols-outlined" slot="leading-adornment">
        star
      </ListItemAdornment>
    </ListItem>
  </List>
</ListGroup>
