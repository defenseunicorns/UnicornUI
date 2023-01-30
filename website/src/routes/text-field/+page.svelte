<script>
  import { TextField } from '@uui';
  import Variant from '$lib/Variant.svelte';
</script>

<Variant
  title="Text Field"
  code={`
Props (extends HTMLInputElement): 
  variant: TextFieldVariant = 'outlined';
  helperText?: string = "helper text"
  color: ThemeColors = "primary"
  required?: boolean = true;
  characterCounter: boolean = true;

Slots:
  leadingIcon: optional
  trailingIcon: optional
`}
>
  <TextField
    required
    variant="outlined"
    color="primary"
    helperText="helper text"
    placeholder="test@test.com"
    characterCounter={true}
    maxlength={60}
  />
</Variant>

<style>
</style>
