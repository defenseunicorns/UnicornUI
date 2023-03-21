<script>
  import { List, ListItem, ListItemAdornment } from '@uui';
</script>

<List class="demo-list">
  <ListItem text="Sent Mail">
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      send
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Drafts">
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      drafts
    </ListItemAdornment>
  </ListItem>

  <ListItem text="Inbox" selected>
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      inbox
    </ListItemAdornment>
  </ListItem>
</List>
