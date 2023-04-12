<script lang="ts">
  import { Accordion, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import RadioExample from './radio-example.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';
  import RADIO_EXP from './radio-example.svelte?raw';
  import RADIO_PROPS from '@uui/Radio/Radio.types.d.ts?raw';
</script>

<DocPage>
  <Typography variant="h2">Radio</Typography>
  <Typography variant="body1">
    A Radio is similar to a Checkbox except when you have multiple radios grouped together only one
    can be selected at a time.
  </Typography>

  <Typography variant="h3">Props</Typography>
  <Typography variant="body1">Radio extends BoxProps of type HTMLInputElement.</Typography>
  <VariantExample code={RADIO_PROPS} />

  <RadioExample />

  <Accordion>
    <Typography slot="headerContent" variant="h6">Props</Typography>
    <VariantExample slot="content" code={RADIO_EXP} />
  </Accordion>
</DocPage>
