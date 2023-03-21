<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { Accordion, Box, Typography, List, ListItem, ListItemAdornment } from '@uui';
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
    <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
      expand_less
    </ListItemAdornment>
    <ListItem text="Starred" slot="nested-content">
      <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
        star
      </ListItemAdornment>
    </ListItem>
  </ListItem>
</List>

<Accordion>
  <Typography slot="headerContent" variant="h6">Nested Code</Typography>
  <Box slot="content">
    <VariantExample
      code={`
  <List class="demo-list">
    <ListItem text="Sent Mail" >
      <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
        send
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Drafts" >
      <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
        drafts
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Inbox"  selected>
      <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
        inbox
      </ListItemAdornment>
      <ListItemAdornment slot="trailing-adornment" class="material-symbols-outlined">
        expand_less
      </ListItemAdornment>
      <ListItem text="Starred" slot="nested">
        <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
          star
        </ListItemAdornment>
      </ListItem>
    </ListItem>
  </List>
    `}
    />
  </Box>
</Accordion>
