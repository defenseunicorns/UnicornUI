<script>
  import VariantExample from '$lib/VariantExample.svelte';
  import { List, ListItem, ListItemAdornment, Accordion, Box, Typography } from '@uui';
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

<Accordion>
  <Typography variant="h6" slot="headerContent">Trailing Icon Code</Typography>
  <Box slot="content">
    <VariantExample
      code={`
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
  `}
    />
  </Box>
</Accordion>
