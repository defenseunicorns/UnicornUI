<script>
  import VariantExample from '$lib/VariantExample.svelte';

  import { List, ListItem, ListItemAdornment, Accordion, Box, Typography } from '@uui';
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

<Accordion>
  <Typography variant="h6" slot="headerContent">Leading Icon Code</Typography>
  <Box slot="content">
    <VariantExample
      code={`
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
`}
    />
  </Box>
</Accordion>
