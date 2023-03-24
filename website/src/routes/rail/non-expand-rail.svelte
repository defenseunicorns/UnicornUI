<script lang="ts">
  import DocPage from '../../lib/doc-page.svelte';
  import { Paper, Rail, List, IconButton, Typography } from '@uui';
</script>

<Paper elevation={2} class="rail-demo-container">
  <Rail>
    <List slot="content" disablePadding>
      <IconButton iconClass="material-symbols-outlined" iconContent="folder" />
      <IconButton iconClass="material-symbols-outlined" iconContent="schedule" />
    </List>
  </Rail>
  <DocPage>
    <Typography variant="h1">Docs</Typography>
  </DocPage>
</Paper>
