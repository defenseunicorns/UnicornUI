<script lang="ts">
  import { Typography, Drawer, DrawerHeader, List, ListItem, ListItemAdornment } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
</script>

<DocPage>
  <Typography variant="h1">Drawer</Typography>
  <Drawer>
    <DrawerHeader title="Testing" subtitle="Subtitle" slot="header" />
    <List slot="content">
      <ListItem text="List Item">
        <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
          star
        </ListItemAdornment>
      </ListItem>
    </List>
  </Drawer>
</DocPage>
