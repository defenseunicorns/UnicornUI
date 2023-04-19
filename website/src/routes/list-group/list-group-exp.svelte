<script lang="ts">
  import { ListGroup, List, ListItem, ListItemAdornment, ListSubHeader, Typography } from '@uui';
</script>

<ListGroup class="demo-list-group">
  <ListSubHeader>List 1</ListSubHeader>
  <List>
    <ListItem divider>
      <Typography>List Item</Typography>
      <ListItemAdornment class="material-symbols-outlined" slot="leading">star</ListItemAdornment>
    </ListItem>
  </List>
  <ListSubHeader>List 2</ListSubHeader>
  <List>
    <ListItem>
      <Typography>List Item</Typography>
      <ListItemAdornment class="material-symbols-outlined" slot="leading">star</ListItemAdornment>
    </ListItem>
  </List>
</ListGroup>
