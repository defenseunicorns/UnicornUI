<script>
  import { List, ListItem, ListItemAdornment } from '@uui';
</script>

<List class="demo-list">
  <ListItem text="Sent Mail">
    <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Drafts">
    <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>

  <ListItem text="Inbox" selected>
    <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
</List>
