<script lang="ts">
  //   import VariantExample from '../../lib/VariantExample.svelte';
  import { Accordion, Box, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import SelectExample from './select-example.svelte';
</script>

<DocPage>
  <Typography variant="h2">Select</Typography>
  <Typography variant="body1">A Select is the combination of Textfield and Menu</Typography>

  <SelectExample />
  <!-- <Typography variant="h3">Examples</Typography> -->

  <!-- <Accordion isOpen>
    <Typography variant="h6" slot="headerContent">Menu Code</Typography>
    <Box slot="content" />
  </Accordion> -->
</DocPage>
