<script lang="ts">
  import VariantExample from '$lib/VariantExample.svelte';
  import {
    List,
    ListItem,
    ListSubHeader,
    ListItemAdornment,
    IconButton,
    Typography,
    Box,
    Accordion
  } from '@uui';
</script>

<List class="demo-list">
  <ListSubHeader>Settings</ListSubHeader>
  <ListItem text="Wi-Fi" variant="icon">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      wifi
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
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
  <ListItem text="Bluetooth" variant="icon">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      bluetooth
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
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

<Accordion>
  <Typography slot="headerContent" variant="h6">List with Subheader code example</Typography>
  <Box slot="content">
    <VariantExample
      code={`
        <List class="demo-list">
  <ListSubHeader>Settings</ListSubHeader>
  <ListItem text="Wi-Fi" variant="icon">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      wifi
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
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
  <ListItem text="Bluetooth" variant="icon">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      bluetooth
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
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
        `}
    />
  </Box>
</Accordion>
