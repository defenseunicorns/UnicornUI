<script lang="ts">
  import { TextField, TextFieldIcon } from '@uui';
  import Variant from '$lib/Variant.svelte';
  import { AccordionGroup, Accordion, Typography, Box, Button } from '@uui';

  let formOutlinedValue = '';
  let formFilledValue = '';
</script>

<Variant
  title="Text Field"
  code={`
Props (extends HTMLInputElement): 
  variant: TextFieldVariant = 'outlined';
  label: string;
  value?: string = '';
  color?: ThemeColors = 'inherit'
  onSurfaceColor?: ThemeColors; = 'inherit'
  helperText?: string;
  characterCounter?: boolean;

  Theming (optional, overrides the default color):
    Palette: {
      textField: {
        // "outlined" border, label, helper text, and character counter colors
        // "filled" bottom line, helper text, and character counter colors
        inactive: 'rgba(255, 255, 255, .6)',
        // "outlined" border color
        hover: '#ffffff',
        // "filled" background and bottom line
        background: 'rgba(255, 255, 255, .1)',
        backgroundHover: 'rgba(255, 255, 255, .3)',
        bottomLineHover: 'rgba(255, 255, 255, 0.8)'
      }
    }

Slots:
  leadingIcon: optional
  trailingIcon: optional
`}
>
  <TextField label="label text" variant="outlined" color="primary" helperText="supporting text" />
  <TextField label="label text" variant="filled" color="primary" helperText="supporting text" />
  <AccordionGroup>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Variant: "outlined"</Typography>
      <Box slot="content">
        <pre class="variant-code">
          {`
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
            label="1 icon" 
            variant="outlined" 
            color="primary" 
            maxlength={60}
          >
            <TextFieldIcon 
              variant="leading" 
              slot="leadingIcon" 
              class="material-symbols-outlined" 
              style="color: pink !important;"
            >
              favorite
            </TextFieldIcon>
          </TextField>
          <TextField 
            label="2 icons"
            variant="outlined" 
            color="primary"
          >
            <TextFieldIcon
              variant="leading" 
              slot="leadingIcon" 
              class="material-symbols-outlined"
            >
              favorite
            </TextFieldIcon>
            <TextFieldIcon 
              variant="trailing" 
              slot="trailingIcon" 
              class="material-symbols-outlined"
            >
              bolt
            </TextFieldIcon>
          </TextField>
          <TextField 
            disabled 
            label="input disabled"
            variant="outlined" 
            color="primary" 
          />
          `}
        </pre>
        <Box class="text-field-example">
          <TextField
            label="label text"
            placeholder="placeholder"
            variant="outlined"
            color="primary"
            helperText="supporting text"
            characterCounter={true}
            maxlength={60}
          />
          <TextField label="label text" variant="outlined" color="primary" maxlength={60}>
            <TextFieldIcon
              variant="leading"
              slot="leadingIcon"
              class="material-symbols-outlined"
              style="color: pink !important;">favorite</TextFieldIcon
            >
          </TextField>
          <TextField label="label text" variant="outlined" color="primary">
            <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
              favorite
            </TextFieldIcon>
            <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined">
              bolt
            </TextFieldIcon>
          </TextField>
          <TextField disabled label="label text" variant="outlined" color="primary" />
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Variant: "filled"</Typography>
      <Box slot="content">
        <pre class="variant-code">
          {`
          <TextField
            label="my label"
            variant="filled"
            color="primary"
            helperText="helper text"
            characterCounter={true}
            maxlength={30}
          />
          <TextField
            label="my label"
            variant="filled"
            color="primary"
            helperText="helper text"
            characterCounter={true}
            maxlength={30}
          >
            <TextFieldIcon 
              variant="leading" 
              slot="leadingIcon" 
              class="material-symbols-outlined"
            >
              favorite
            </TextFieldIcon>
            <TextFieldIcon 
              variant="trailing" 
              slot="trailingIcon" 
              class="material-symbols-outlined"
            >
              bolt
            </TextFieldIcon>
          </TextField>
          <TextField 
            disabled 
            label="input disabled" 
            variant="filled" 
            color="primary" 
          />
          `}
        </pre>
        <Box class="text-field-example">
          <TextField
            label="label text"
            placeholder="placeholder"
            variant="filled"
            color="primary"
            helperText="supporting text"
            characterCounter={true}
            maxlength={30}
          />
          <TextField label="label text" variant="filled" color="primary">
            <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
              favorite
            </TextFieldIcon>
          </TextField>
          <TextField label="label text" variant="filled" color="primary">
            <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
              favorite
            </TextFieldIcon>
            <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined">
              bolt
            </TextFieldIcon>
          </TextField>
          <TextField disabled label="label text" variant="filled" color="primary" />
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Validation (outlined)</Typography>
      <Box slot="content">
        <pre class="variant-code">
          {`
          <TextField
              required
              bind:value={formOutlinedValue}
              variant="outlined"
              label="label text" 
              pattern=".+@.+\\.com"
              helperText="supporting text"
              maxlength={20}
              minlength={8}
          />
            `}
        </pre>
        <Box class="text-field-example">
          <form on:submit={() => alert(`you submitted ${formOutlinedValue}`)}>
            <TextField
              required
              bind:value={formOutlinedValue}
              variant="outlined"
              label="label text"
              pattern=".+@.+\.com"
              helperText="supporting text"
              characterCounter={true}
              maxlength={20}
              minlength={8}
            />
            <Button style={'margin-top: 2px;'} type="submit" variant="text">Submit</Button>
          </form>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Validation (filled)</Typography>
      <Box slot="content">
        <pre class="variant-code">
          {`
          <TextField
              bind:value={formFilledValue}
              required
              color="primary"
              variant="outlined"
              label="label text" 
              pattern=".+@.+\\.com"
              helperText="supporting text"
              maxlength={20}
              minlength={8}
          />
            `}
        </pre>
        <Box class="text-field-example">
          <form on:submit={() => alert(`you submitted ${formFilledValue}`)}>
            <TextField
              bind:value={formFilledValue}
              required
              color="primary"
              variant="filled"
              label="label text"
              pattern=".+@.+\.com"
              helperText="supporting text"
              characterCounter={true}
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
