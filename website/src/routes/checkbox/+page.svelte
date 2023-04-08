<script lang="ts">
  import DocPage from '../../lib/doc-page.svelte';
  import { Box, Checkbox, Paper, Typography } from '@uui';
</script>

<DocPage>
  <Typography variant="h2">Checkbox</Typography>

  <Paper elevation={16} ssx={{ $self: { padding: '1rem' } }}>
    <form>
      <Box ssx={{ $self: { display: 'flex', 'align-items': 'center' } }}>
        <label for="checkbox-1">Enabled</label><Checkbox id="checkbox-1" />
      </Box>
      <Box ssx={{ $self: { display: 'flex', 'align-items': 'center' } }}>
        <label for="checkbox-2">Checked</label><Checkbox checked id="checkbox-2" />
      </Box>
      <Box ssx={{ $self: { display: 'flex', 'align-items': 'center' } }}>
        <label for="checkbox-3">Checked Disabled</label><Checkbox
          checked
          disabled
          id="checkbox-3"
        />
      </Box>
    </form>
  </Paper>
</DocPage>
