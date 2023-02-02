<script>
  import { TextField, TextFieldIcon } from '@uui';
  import Variant from '$lib/Variant.svelte';
  import { AccordionGroup, Accordion, Typography, Box, Button } from '@uui';
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
          {`   
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
            label="color & onSurfaceColor"
            variant="outlined"
            color="secondary"
            onSurfaceColor="primary"
            helperText="helper text"
          />
          <TextField disabled label="input disabled" variant="outlined" color="primary" />
          <TextField label="1 icon" variant="outlined" color="primary" maxlength={60}>
            <TextFieldIcon slot="leadingIcon" class="material-symbols-outlined"
              >favorite</TextFieldIcon
            >
          </TextField>
          <TextField label="2 icons" variant="outlined" color="primary">
            <TextFieldIcon slot="leadingIcon" class="material-symbols-outlined">favorite</TextFieldIcon>
            <TextFieldIcon slot="trailingIcon" class="material-symbols-outlined">bolt</TextFieldIcon>
          </TextField>
          `}
        </pre>
        <Box class="text-field-example">
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
            label="color & onSurfaceColor"
            variant="outlined"
            color="secondary"
            onSurfaceColor="primary"
            helperText="helper text"
          />
          <TextField disabled label="input disabled" variant="outlined" color="primary" />
          <TextField label="1 icon" variant="outlined" color="primary" maxlength={60}>
            <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined"
              >favorite</TextFieldIcon
            >
          </TextField>
          <TextField label="2 icons" variant="outlined" color="primary">
            <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined"
              >favorite</TextFieldIcon
            >
            <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined"
              >bolt</TextFieldIcon
            >
          </TextField>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Validation</Typography>
      <Box slot="content">
        <pre class="variant-code">
          {`
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
            `}
        </pre>
        <Box class="text-field-example">
          <form>
            <TextField
              required
              variant="outlined"
              label="required"
              pattern=".+@.+\.com"
              helperText="try email format"
              characterCounter={true}
              placeholder="try submitting"
              maxlength={20}
              minlength={8}
            />
            <Button style={'margin-top: 2px;'} type="submit" variant="text">Submit</Button>
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
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding-top: 1rem;
  }
</style>
