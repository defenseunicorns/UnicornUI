<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { Accordion, Box, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import SelectOutlinedExample from './select-outlined-example.svelte';
  import SELECT_PROPS from '@uui/Select/Select.types.d.ts?raw';
  import SELECT_OUTLINED_EXP from './select-outlined-example.svelte?raw';
  import SelectFilledExample from './select-filled-example.svelte';
</script>

<DocPage>
  <Typography variant="h2">Select</Typography>
  <Typography variant="body1">A Select is the combination of Textfield and Menu</Typography>

  <Typography variant="h3">Props</Typography>
  <VariantExample code={SELECT_PROPS} />

  <Box
    ssx={{
      $self: { display: 'flex', 'justify-content': 'center', gap: '1rem' }
    }}
  >
    <SelectOutlinedExample />
    <SelectFilledExample />
  </Box>

  <Accordion>
    <Typography variant="h6" slot="headerContent">Menu Code</Typography>
    <Box slot="content">
      <VariantExample code={SELECT_OUTLINED_EXP} />
    </Box>
  </Accordion>
</DocPage>
