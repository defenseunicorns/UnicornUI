<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { Accordion, Box, List, ListItem, ListItemAdornment, Typography } from '@uui';
</script>

<List class="demo-list">
  <ListItem text="Photos" secondaryText="Jan 9, 2014" variant="avatar">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      image
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Work" variant="avatar" secondaryText="Jan 20, 2014" divider>
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      work
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Vacation" variant="avatar" secondaryText="July 4, 2014" disableGutters>
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      beach_access
    </ListItemAdornment>
  </ListItem>
</List>

<Accordion>
  <Typography variant="h6" slot="headerContent">Avatar Code Examples</Typography>
  <Box slot="content">
    <VariantExample
      code={`
  <List class="demo-list">
  <ListItem text="Photos" secondaryText="Jan 9, 2014" variant="avatar">
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      image
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Work" variant="avatar" secondaryText="Jan 20, 2014" divider>
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      work
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Vacation" variant="avatar" secondaryText="July 4, 2014" disableGutters>
    <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
      beach_access
    </ListItemAdornment>
  </ListItem>
</List>
  `}
    />
  </Box>
</Accordion>
