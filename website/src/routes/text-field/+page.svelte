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
  value?: string = '';
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
            label="my label"
            variant="outlined"
            color="primary"
            helperText="helper text"
            characterCounter={true}
          />
          <TextField
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
          <TextField label="1 icon" variant="outlined" color="primary" maxlength={60}>
            <TextFieldIcon
              variant="leading"
              slot="leadingIcon"
              class="material-symbols-outlined"
              style="color: pink !important;">favorite</TextFieldIcon
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
          <TextField disabled label="input disabled" variant="outlined" color="primary" />
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Variant: "filled"</Typography>
      <Box slot="content">
        <pre class="variant-code">
          {`
           <TextField 
            variant="filled" 
            color="primary" 
          />
          <TextField 
            label="my label" 
            variant="filled" 
            color="primary" 
          />
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
          <TextField variant="filled" color="primary" />
          <TextField label="my label" variant="filled" color="primary" />
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
            ><TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined"
              >favorite</TextFieldIcon
            >
            <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined"
              >bolt</TextFieldIcon
            ></TextField
          >
          <TextField disabled label="input disabled" variant="filled" color="primary" />
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
          <form on:submit={() => alert(`you submitted ${formOutlinedValue}`)}>
            <TextField
              required
              bind:value={formOutlinedValue}
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
          <form on:submit={() => alert(`you submitted ${formFilledValue}`)}>
            <TextField
              bind:value={formFilledValue}
              required
              color="primary"
              variant="filled"
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
