<script lang="ts">
  import { TextField, TextFieldIcon } from '@uui';
  import Variant from '$lib/Variant.svelte';
  import { AccordionGroup, Accordion, Typography, Box, Button } from '@uui';

  let formValue = '';
</script>

<Variant
  title="Text Field"
  code={`
  

Slots:
  leadingIcon: optional
  trailingIcon: optional
`}
>
  <TextField label="Label" variant="outlined" color="primary" helperText="supporting text" />
  <TextField label="Label" variant="filled" color="primary" helperText="supporting text" />
  <AccordionGroup>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Props</Typography>
      <Box slot="content">
        <Typography variant="body1">
          The Text Field component accepts native HTMLInput props as well as several custom defined
          ones. Examples of native props -- required, disabled, value, minlength, maxlengh, pattern.
          Custom Props -- label, variant, helperText
        </Typography>
        <Box class="text-field-example">
          <TextField required label="required" variant="outlined" color="primary" />
          <TextField
            label="Helper Text"
            variant="outlined"
            color="primary"
            helperText="supporting text"
          />
          <TextField
            label="Label"
            variant="outlined"
            color="primary"
            characterCounter={true}
            maxlength={60}
          />
          <TextField disabled label="Disabled" variant="outlined" color="primary" />
        </Box>
        <pre class="variant-code">
          {`
           <TextField required label="required" variant="outlined" color="primary" />
          <TextField
            label="Helper Text"
            variant="outlined"
            color="primary"
            helperText="supporting text"
          />
          <TextField
            label="Label"
            variant="outlined"
            color="primary"
            characterCounter={true}
            maxlength={60}
          />
          <TextField disabled label="Disabled" variant="outlined" color="primary" />
          `}
        </pre>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Slots</Typography>
      <Box slot="content">
        <Typography variant="body1"
          >Text Field accepts two slots: leadingIcon and trailingIcon. If you're unfamiliar with the
          concept of slots, think of them like children. To pass a Text Field an icon, use the
          TextFieldIcon component. Make sure to declare the variant ('leading' or 'trailing') as
          well as the slot name ('leadingIcon' or 'trailingIcon')</Typography
        >
        <Box class="text-field-example">
          <TextField label="Label" variant="outlined" color="primary">
            <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
              search
            </TextFieldIcon>
          </TextField>
          <TextField label="Label" variant="outlined" color="primary">
            <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined">
              close
            </TextFieldIcon>
          </TextField>
          <TextField label="Label" variant="outlined" color="primary">
            <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
              search
            </TextFieldIcon>
            <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined">
              close
            </TextFieldIcon>
          </TextField>
        </Box>
        <pre class="variant-code">
          {`
          <TextField
            label="my label"
            variant="filled"
            color="primary"
          >
            <TextFieldIcon 
              variant="leading" 
              slot="leadingIcon" 
              class="material-symbols-outlined"
            >
              search
            </TextFieldIcon>
          </TextField>
          <TextField
            label="my label"
            variant="filled"
            color="primary"
          >
            <TextFieldIcon 
              variant="trailing" 
              slot="trailingIcon" 
              class="material-symbols-outlined"
            >
              close
            </TextFieldIcon>
          </TextField>
          <TextField
            label="my label"
            variant="filled"
            color="primary"
          >
            <TextFieldIcon 
              variant="leading" 
              slot="leadingIcon" 
              class="material-symbols-outlined"
            >
              search
            </TextFieldIcon>
            <TextFieldIcon 
              variant="trailing" 
              slot="trailingIcon" 
              class="material-symbols-outlined"
            >
              close
            </TextFieldIcon>
          </TextField>
          `}
        </pre>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Validation</Typography>
      <Box slot="content">
        <Typography variant="body1">
          Try interacting with this Text field wrapped by a native HTMLFormElement. We're making use
          of the required, minlength, maxlength, and pattern props.
        </Typography>
        <Box class="text-field-example">
          <form on:submit={() => alert(`you submitted ${formValue}`)}>
            <TextField
              required
              bind:value={formValue}
              variant="outlined"
              label="Label"
              pattern=".+@.+\.com"
              helperText="expected format is email"
              characterCounter={true}
              maxlength={20}
              minlength={8}
            />
            <Button style={'margin-top: 2px;'} type="submit" variant="text">Submit</Button>
          </form>
        </Box>
        <pre class="variant-code">
          {`
           <form on:submit={() => alert(\`you submitted ${formValue}\`)}>
            <TextField
              required
              bind:value={formValue}
              variant="outlined"
              label="Label"
              pattern=".+@.+\\.com"
              helperText="expected format is email"
              characterCounter={true}
              maxlength={20}
              minlength={8}
            />
            <Button style={'margin-top: 2px;'} type="submit" variant="text">Submit</Button>
          </form>
            `}
        </pre>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Theming</Typography>
      <Box slot="content">
        <Typography variant="body1">
          Certain aspects of the Text Field theme can be directly overridden by a mix of props
          (color) and a textField palette. To override the focused state colors use the prop. If you
          want to override inactive, hover, background, background hover, or bottom line hover,
          you'll need to add a custom text field palette to your theme. Text Field icons, by
          default, use --on-background for their color. You can override that color by adding a
          style tag to your TextFieldIcon with a "!important".
        </Typography>
        <Box class="text-field-example">
          <TextField
            variant="outlined"
            label="Label"
            color="secondary"
            helperText="color is secondary"
          />
          <TextField label="Label" variant="outlined" color="primary">
            <TextFieldIcon
              variant="leading"
              slot="leadingIcon"
              class="material-symbols-outlined"
              style="color: pink !important;"
            >
              search
            </TextFieldIcon>
          </TextField>
        </Box>
        <pre class="variant-code">
          {`
            Props: color, onSurfaceColor

            Theming (optional, overrides the default color):
                Palette: {
                  textField: {
                    // "outlined" border, label, helper text, and character counter colors
                    // "filled" bottom line, helper text, and character counter colors
                    inactive: 'value',
                    // "outlined" border color
                    hover: 'value',
                    // "filled" background and bottom line
                    background: 'value',
                    backgroundHover: 'value',
                    bottomLineHover: 'value',
                  }
                }
        `}
        </pre>
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
    padding: 1rem 0;
  }
</style>
