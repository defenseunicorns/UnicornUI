<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import {
    Accordion,
    Box,
    Typography,
    List,
    ListItem,
    ListItemAdornment,
    ListItemCheckbox
  } from '@uui';
  import ListAvatar from './list-avatar.svelte';
</script>

<Typography variant="h6">Avatar with Checkboxes</Typography>
<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="leadingAdornment">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>

<Typography variant="h6">Checkboxes with Icons</Typography>
<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
</List>

<Accordion>
  <Typography slot="headerContent" variant="h6">Combined Code</Typography>
  <Box slot="content">
    <VariantExample
      code={`
<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="leadingAdornment">
      <ListAvatar element="i" class="material-symbols-outlined">person</ListAvatar>
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>

<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
</List>
  `}
    />
  </Box>
</Accordion>
