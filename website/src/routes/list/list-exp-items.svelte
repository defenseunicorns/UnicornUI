<script lang="ts">
  import { ListItem, ListItemAdornment, IconButton, Typography } from '@uui';
</script>

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
  <ListItemAdornment slot="leading" class="material-symbols-outlined">bluetooth</ListItemAdornment>
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
