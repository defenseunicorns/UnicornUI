<script>
  import { TextField } from '@uui';
  import Variant from '$lib/Variant.svelte';
</script>

<Variant
  title="Text Field"
  code={`
Props (extends HTMLInputElement): 
  variant: TextFieldVariant = 'outlined';
  helperText?: string = "Please fill out text field."

Slots:
  leadingIcon: optional
  trailingIcon: optional
`}
>
  <TextField variant="outlined" />
</Variant>

<style>
</style>
