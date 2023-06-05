<script lang="ts">
  import { TextField } from '@uui';
  import Variant from '$lib/Variant.svelte';
  import { AccordionGroup, Accordion, Typography, Box } from '@uui';
  import VALIDATION_EXP from './validation-example.svelte?raw';
  import VariantExample from '$lib/VariantExample.svelte';
  import ValidationExample from './validation-example.svelte';
  import ThemingExample from './theming-example.svelte';
  import THEMING_EXP from './theming-example.svelte?raw';
  import SlotsExample from './slots-example.svelte';
  import SLOTS_EXP from './slots-example.svelte?raw';
  import PropsExample from './props-example.svelte';
  import PROPS_EXP from './props-example.svelte?raw';
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
    <TextField label="Label" variant="filled" color="primary" />
  </div>
  <AccordionGroup>
    <Accordion isOpen={true}>
      <Typography slot="headerContent" variant="h6">Props</Typography>
      <Box slot="content">
        <Typography variant="body1">
          The Text Field component accepts native HTMLInput props as well as several Unicorn UI
          defined ones implemented by the TextFieldProps interface.
        </Typography>

        <PropsExample />
        <VariantExample code={PROPS_EXP} />
      </Box>
    </Accordion>
    <Accordion isOpen={true}>
      <Typography slot="headerContent" variant="h6">Slots</Typography>
      <Box slot="content">
        <Typography variant="body1">
          Text Field accepts two slots: leadingIcon and trailingIcon. If you're unfamiliar with the
          concept of slots, think of them like children. To pass a Text Field an icon, use the
          TextFieldIcon component. Make sure to declare the variant ('leading' or 'trailing') as
          well as the slot name ('leadingIcon' or 'trailingIcon')
        </Typography>

        <SlotsExample />
        <VariantExample code={SLOTS_EXP} />
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

        <ValidationExample />
        <VariantExample code={VALIDATION_EXP} />
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

        <ThemingExample />
        <VariantExample code={THEMING_EXP} />
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
