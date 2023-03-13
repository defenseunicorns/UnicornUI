<script>
  import VariantExample from '$lib/VariantExample.svelte';

  import { List, ListItem, ListItemAdornment, Accordion, Box, Typography } from '@uui';
</script>

<List class="demo-list">
  <ListItem text="Sent Mail">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      send
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Drafts">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      drafts
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>

  <ListItem text="Inbox" selected>
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      inbox
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
</List>

<Accordion>
  <Typography variant="h6" slot="headerContent">Icon Code Examples</Typography>
  <Box slot="content">
    <VariantExample
      code={`
<List class="demo-list">
  <ListItem text="Sent Mail">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      send
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Drafts">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      drafts
    </ListItemAdornment>
    <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
      star
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Inbox" selected>
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      inbox
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
