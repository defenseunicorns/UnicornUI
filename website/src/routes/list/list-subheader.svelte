<script lang="ts">
  import { List, ListItem, ListSubHeader, ListItemAdornment, IconButton, Typography } from '@uui';
</script>

<List class="list-exp">
  <ListSubHeader>Settings</ListSubHeader>
  <ListItem>
    <Typography>Wi-Fi</Typography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">wifi</ListItemAdornment>
    <ListItemAdornment slot="trailing">
      <IconButton
        toggleable
        iconContent="toggle_off"
        toggledIconColor="primary"
        toggledIconContent="toggle_on"
        iconClass="material-symbols-outlined"
        toggledIconClass="material-symbols-outlined"
      />
    </ListItemAdornment>
  </ListItem>
  <ListItem>
    <Typography>Bluetooth</Typography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">
      bluetooth
    </ListItemAdornment>
    <ListItemAdornment slot="trailing">
      <IconButton
        toggleable
        iconContent="toggle_off"
        toggledIconColor="primary"
        toggledIconContent="toggle_on"
        iconClass="material-symbols-outlined"
        toggledIconClass="material-symbols-outlined"
      />
    </ListItemAdornment>
  </ListItem>
</List>
