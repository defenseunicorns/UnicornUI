<script lang="ts">
  import { TextField, TextFieldIcon } from '@uui';
  import Variant from '$lib/Variant.svelte';
  import { AccordionGroup, Accordion, Typography, Box, Button } from '@uui';

  let formValue = '';
</script>

<Variant
  title="Text Field"
  code="The basic Text Field is a wrapper around a native input element with the type set to 'text'. It can be configured a number of ways, but has two main variants -- outlined and filled."
>
  <div class="labeled-example">
    <Typography variant="subtitle1">Outlined:</Typography>
    <TextField label="Label" variant="outlined" color="primary" />
  </div>
  <div class="labeled-example">
    <Typography variant="subtitle1">Filled:</Typography>
    <TextField autofocus label="Label" variant="filled" color="primary" value="Value" />
  </div>
  <AccordionGroup>
    <Accordion isOpen={true}>
      <Typography slot="headerContent" variant="h6">Props</Typography>
      <Box slot="content">
        <Typography variant="body1">
          The Text Field component accepts native HTMLInput props as well as several Unicorn UI
          defined ones implemented by the TextFieldProps interface.
        </Typography>
        <Box class="text-field-example">
          <div class="labeled-example">
            <Typography variant="subtitle1">Required:</Typography>
            <TextField required label="Label" variant="outlined" color="primary" />
          </div>

          <div class="labeled-example">
            <Typography variant="subtitle1">Helper Text:</Typography>
            <TextField
              label="Label"
              variant="outlined"
              color="primary"
              helperText="supporting text"
            />
          </div>

          <div class="labeled-example">
            <Typography variant="subtitle1">Character Counter:</Typography>
            <TextField
              label="Label"
              variant="outlined"
              color="primary"
              characterCounter={true}
              maxlength={60}
            />
          </div>
          <div class="labeled-example">
            <Typography variant="subtitle1">Disabled:</Typography>
            <TextField disabled label="Label" variant="outlined" color="primary" value="Value" />
          </div>
        </Box>
        <pre class="variant-code">
          {`
          interface TextFieldProps extends svelte.JSX.HTMLAttributes<HTMLInputElement> {
              variant: TextFieldVariant;
              label: string;
              value?: string;
              helperText?: string;
              color?: ThemeColors;
              characterCounter?: boolean;
          }
          ___________________________________________
          
          <TextField 
            required 
            label="Label" 
            variant="outlined" 
            color="primary" 
          />
          <TextField
            label="Label"
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
          <TextField 
            disabled 
            autofocus
            label="Label" 
            variant="outlined" 
            color="primary" 
          />
          `}
        </pre>
      </Box>
    </Accordion>
    <Accordion isOpen={true}>
      <Typography slot="headerContent" variant="h6">Slots</Typography>
      <Box slot="content">
        <Typography variant="body1"
          >Text Field accepts two slots: leadingIcon and trailingIcon. If you're unfamiliar with the
          concept of slots, think of them like children. To pass a Text Field an icon, use the
          TextFieldIcon component. Make sure to declare the variant ('leading' or 'trailing') as
          well as the slot name ('leadingIcon' or 'trailingIcon')</Typography
        >
        <Box class="text-field-example">
          <div class="labeled-example">
            <Typography variant="subtitle1">Leading Icon:</Typography>
            <TextField label="Label" variant="outlined" color="primary">
              <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
                search
              </TextFieldIcon>
            </TextField>
          </div>
          <div class="labeled-example">
            <Typography variant="subtitle1">Trailing Icon:</Typography>
            <TextField label="Label" variant="outlined" color="primary">
              <TextFieldIcon
                variant="trailing"
                slot="trailingIcon"
                class="material-symbols-outlined"
              >
                close
              </TextFieldIcon>
            </TextField>
          </div>
          <div class="labeled-example">
            <Typography variant="subtitle1">Both Icons:</Typography>
            <TextField label="Label" variant="outlined" color="primary">
              <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
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
          </div>
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
    <Accordion isOpen={true}>
      <Typography slot="headerContent" variant="h6">Validation</Typography>
      <Box slot="content">
        <Typography variant="body1">
          Try interacting with this Text Field to see how validation occurs. Notice we're binding
          the value, making this a controlled input. You can still use the Text Field as an
          unctrolled input and the value will be captured by the form.
        </Typography>
        <Box class="text-field-example">
          <form on:submit={() => alert(`you submitted ${formValue}`)}>
            <div class="labeled-example">
              <Typography variant="subtitle1">Validate:</Typography>
              <TextField
                required
                bind:value={formValue}
                variant="outlined"
                label="Email"
                pattern=".+@.+\.com"
                helperText="Email format"
                characterCounter={true}
                maxlength={20}
                minlength={8}
              />
            </div>
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
              label="Email"
              pattern=".+@.+\\.com"
              helperText="Email format"
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
    <Accordion isOpen={true}>
      <Typography slot="headerContent" variant="h6">Theming</Typography>
      <Box slot="content">
        <Typography variant="body1">
          Certain aspects of the Text Field theme can be directly overridden by a mix of props
          (color) and a textField palette. To override the focused state colors use the prop. If you
          want to override other states (inactive, hover, background, background hover, bottom line
          hover) you'll need to add a custom text field palette to your theme. Text Field icons, by
          default, use --on-background for their color. You can override that color by adding a
          style tag to your TextFieldIcon with a "!important".
        </Typography>
        <Box class="text-field-example">
          <div class="labeled-example">
            <Typography variant="subtitle1">Override Focus:</Typography>
            <TextField
              autofocus
              variant="outlined"
              label="Label"
              color="secondary"
              value="Value"
              helperText="Click me: color is secondary"
            />
          </div>
          <div class="labeled-example">
            <Typography variant="subtitle1">Override Icon:</Typography>
            <TextField
              label="Label"
              variant="outlined"
              color="primary"
              helperText="icon color is overridden by custom style prop"
            >
              <TextFieldIcon
                variant="leading"
                slot="leadingIcon"
                class="material-symbols-outlined"
                style="color: pink !important;"
              >
                search
              </TextFieldIcon>
            </TextField>
          </div>
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
          ____________________________________________________________________

          <TextField
            variant="outlined"
            label="Label"
            color="secondary"
            helperText="color is secondary"
          />
          <TextField
            label="Label"
            variant="outlined"
            color="primary"
            helperText="icon color is overridden by custom style prop"
          >
            <TextFieldIcon
              variant="leading"
              slot="leadingIcon"
              class="material-symbols-outlined"
              style="color: pink !important;"
            >
              search
            </TextFieldIcon>
          </TextField>
        `}
        </pre>
      </Box>
    </Accordion>
  </AccordionGroup>
</Variant>

<style lang="scss">
  .labeled-example {
    display: flex;
    flex-direction: column;
    height: 7rem;
    justify-content: space-between;
  }

  :global(.text-field-example) {
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 1rem 0;
  }
</style>
