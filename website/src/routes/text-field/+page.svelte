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
  color: ThemeColors = "primary"

Slots:
  leadingIcon: optional
  trailingIcon: optional
`}
>
  <TextField variant="outlined" color="primary"/>
</Variant>
<Variant title="Text Field Required" code={`
  required: boolean = true
`}>
  <TextField variant="outlined" required/>
</Variant>


<style>
</style>
