<script>
  import { List, ListItem, ListItemAdornment, IconButton } from '@uui';
</script>

<List class="demo-list">
  <ListItem text="Sent Mail" variant="icon">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      send
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Drafts" variant="icon">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      drafts
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Inbox" variant="icon" selected>
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      inbox
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      expand_less
    </ListItemAdornment>
    <ListItem text="Starred" slot="nested">
      <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
        star
      </ListItemAdornment>
    </ListItem>
  </ListItem>
</List>
