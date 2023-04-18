<script lang="ts">
  import {
    ListGroup,
    List,
    ListItem,
    ListItemAdornment,
    ListSubHeader,
    ListItemTypography
  } from '@uui';
</script>

<ListGroup class="demo-list-group">
  <ListSubHeader>List 1</ListSubHeader>
  <List>
    <ListItem divider>
      <ListItemTypography>List Item</ListItemTypography>
      <ListItemAdornment class="material-symbols-outlined" slot="leading">star</ListItemAdornment>
    </ListItem>
  </List>
  <ListSubHeader>List 2</ListSubHeader>
  <List>
    <ListItem>
      <ListItemTypography>List Item</ListItemTypography>
      <ListItemAdornment class="material-symbols-outlined" slot="leading">star</ListItemAdornment>
    </ListItem>
  </List>
</ListGroup>
