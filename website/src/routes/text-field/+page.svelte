<script>
  import { TextField } from '@uui';
  import Variant from '$lib/Variant.svelte';
  import { AccordionGroup, Accordion, Typography, Box } from '@uui';
</script>

<Variant
  title="Text Field"
  code={`
Props (extends HTMLInputElement): 
  variant: TextFieldVariant = 'outlined';
  helperText?: string = "helper text"
  color?: ThemeColors = "primary"
  characterCounter?: boolean = true;

Slots:
  leadingIcon: optional
  trailingIcon: optional
`}
>
  <AccordionGroup>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Variant: "outlined"</Typography>
      <Box slot="content">
        <pre class="variant-code">
          {`         <TextField required label="my label" variant="outlined" color="primary" maxlength={60} />
          <TextField
            label="my label"
            variant="outlined"
            color="primary"
            helperText="helper text"
            characterCounter={true}
          />
          <TextField
            label="my label"
            placeholder="placeholder"
            variant="outlined"
            color="primary"
            helperText="helper text"
            characterCounter={true}
            maxlength={60}
          />
          <TextField disabled label="my label" variant="outlined" color="primary" />
          <form>
            <TextField
              required
              variant="outlined"
              label="required"
              pattern=".+@.+\\.com"
              helperText="try email format"
              placeholder="try submitting"
              maxlength={20}
              minlength={8}
            />
            <button style={'margin-top: 2px;'} type="submit">Submit</button>
          </form>
          `}
        </pre>
        <Box class="text-field-example">
          <TextField required label="required" variant="outlined" color="primary" maxlength={60} />
          <TextField
            label="my label"
            variant="outlined"
            color="primary"
            helperText="helper text"
            characterCounter={true}
          />
          <TextField
            label="my label"
            placeholder="placeholder"
            variant="outlined"
            color="primary"
            helperText="helper text"
            characterCounter={true}
            maxlength={60}
          />
          <TextField
            label="color prop"
            variant="outlined"
            color="secondary"
            hoverColor="secondary"
            helperText="helper text"
          />
          <TextField disabled label="input disabled" variant="outlined" color="primary" />
          <form>
            <TextField
              required
              variant="outlined"
              label="required"
              pattern=".+@.+\.com"
              helperText="try email format"
              placeholder="try submitting"
              maxlength={20}
              minlength={8}
            />
            <button style={'margin-top: 2px;'} type="submit">Submit</button>
          </form>
        </Box>
      </Box>
    </Accordion>
  </AccordionGroup>
</Variant>

<style lang="scss">
  :global(.text-field-example) {
    gap: 16px;
    display: flex;
    align-content: center;
    justify-content: center;
    padding-top: 1rem;
    // width: 20%;
  }
</style>
