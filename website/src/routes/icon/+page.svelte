<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Typography, Icon, TextFieldIcon, TextField } from '@uui';
</script>

<DocPage>
  <Typography variant="h2">Icon</Typography>

  <Typography variant="h3">Generic Icon</Typography>
  <VariantExample code={`<Icon variant="favorite"/>`} />
  <Icon variant="favorite" />

  <Typography variant="h3">Composed Example: TextField</Typography>
  <VariantExample
    code={`
    export let variant: TextFieldIconVariant;
export let iconContent: MaterialSymbols;


<Icon
  variant={iconContent}
  {...$$restProps}
  class="mdc-text-field__icon mdc-text-field__icon--{variant} {$$restProps.class || ''}"
>
  <slot />
</Icon>
    `}
  />
  <TextField variant="outlined" label="Label">
    <TextFieldIcon variant="leading" iconContent="search" slot="leadingIcon" />
  </TextField>
</DocPage>

<style lang="scss">
</style>
