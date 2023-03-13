<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import {
    Accordion,
    Box,
    List,
    ListItem,
    ListItemAdornment,
    ListItemCheckbox,
    Typography
  } from '@uui';
</script>

<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>

<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>

<Accordion>
  <Typography slot="headerContent" variant="h6">Action Code Examples</Typography>
  <Box slot="content">
    <VariantExample
      code={`
<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="leadingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>

<List class="demo-list">
  <ListItem text="List Item 1">
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
  <ListItem text="List Item 2">
    <ListItemAdornment slot="trailingAdornment">
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>
`}
    />
  </Box>
</Accordion>
