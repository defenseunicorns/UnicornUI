<script lang="ts">
  import { Box, Checkbox, Paper } from '@uui';

  let formFieldsSSX = {
    $self: { display: 'flex', 'align-items': 'center', margin: '.5rem' }
  };
</script>

<Paper elevation={16} ssx={{ $self: { padding: '1rem' } }}>
  <form>
    <Box ssx={formFieldsSSX}>
      <Checkbox id="checkbox-1" label="Enabled" />
    </Box>
    <Box ssx={formFieldsSSX}>
      <Checkbox checked id="checkbox-2" label="Checked" />
    </Box>
    <Box ssx={formFieldsSSX}>
      <Checkbox disabled label="Disabled" id="checkbox-3" />
    </Box>
    <Box ssx={formFieldsSSX}>
      <Checkbox checked disabled label="Disabled Selected" id="checkbox-4" />
    </Box>

    <Box ssx={formFieldsSSX}>
      <Checkbox id="checkbox-5" label="Stroke Color" color="red" checked />
    </Box>
    <Box ssx={formFieldsSSX}>
      <Checkbox id="checkbox-6" label="Container Color" backgroundColor="red" checked />
    </Box>
  </form>
</Paper>
