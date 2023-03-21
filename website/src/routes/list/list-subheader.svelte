<script lang="ts">
  import { List, ListItem, ListSubHeader, ListItemAdornment, IconButton } from '@uui';
</script>

<List class="demo-list">
  <ListSubHeader>Settings</ListSubHeader>
  <ListItem text="Wi-Fi">
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      wifi
    </ListItemAdornment>
    <ListItemAdornment slot="trailing-adornment">
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
  <ListItem text="Bluetooth">
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      bluetooth
    </ListItemAdornment>
    <ListItemAdornment slot="trailing-adornment">
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
