<script lang="ts">
  import DocPage from '../../lib/doc-page.svelte';
  import { Accordion, Typography } from '@uui';
  import CheckboxExample from './checkbox-example.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';
  import CHECKBOX_EXP from './checkbox-example.svelte?raw';
  import CHECKBOX_PROPS from '@uui/Checkbox/Checkbox.types.d.ts?raw';
</script>

<DocPage>
  <Typography variant="h2">Checkbox</Typography>

  <Typography variant="h3">Props</Typography>
  <Typography variant="body1">
    Checkbox props are an extension of BoxProps of type HTMLInputElement.
  </Typography>
  <VariantExample code={CHECKBOX_PROPS} />

  <CheckboxExample />
  <Accordion>
    <Typography slot="headerContent" variant="h6">Checkbox Code</Typography>
    <VariantExample slot="content" code={CHECKBOX_EXP} />
  </Accordion>
</DocPage>
