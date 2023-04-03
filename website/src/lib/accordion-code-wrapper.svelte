<script lang="ts">
  import VariantExample from './VariantExample.svelte';
  import { Accordion, Box, Typography } from '@uui';

  export let rawCodeExample = '';
  export let header = '';
</script>

<Accordion>
  <Typography variant="h6" slot="headerContent">{header}</Typography>
  <Box slot="content">
    <VariantExample code={rawCodeExample} />
  </Box>
</Accordion>
