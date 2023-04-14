<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { Accordion, Box, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import SelectExample from './select-example.svelte';
  import SELECT_PROPS from '@uui/Select/Select.types.d.ts?raw';
  import SELECT_EXP from './select-example.svelte?raw';
</script>

<DocPage>
  <Typography variant="h2">Select</Typography>
  <Typography variant="body1">A Select is the combination of Textfield and Menu</Typography>

  <Typography variant="h3">Props</Typography>
  <VariantExample code={SELECT_PROPS} />

  <Box
    ssx={{
      $self: { display: 'flex', 'justify-content': 'center' }
    }}
  >
    <SelectExample />
  </Box>

  <!-- <Typography variant="h3">Examples</Typography> -->

  <Accordion>
    <Typography variant="h6" slot="headerContent">Menu Code</Typography>
    <Box slot="content">
      <VariantExample code={SELECT_EXP} />
    </Box>
  </Accordion>
</DocPage>
