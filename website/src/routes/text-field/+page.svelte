<script lang="ts">
  import { TextField } from '@uui';
  import { Accordion, Typography, Box } from '@uui';
  import VALIDATION_EXP from './validation-example.svelte?raw';
  import VariantExample from '$lib/VariantExample.svelte';
  import ValidationExample from './validation-example.svelte';
  import ThemingExample from './theming-example.svelte';
  import THEMING_EXP from './theming-example.svelte?raw';
  import SlotsExample from './slots-example.svelte';
  import SLOTS_EXP from './slots-example.svelte?raw';
  import PropsExample from './props-example.svelte';
  import PROPS_EXP from './props-example.svelte?raw';
  import DocPage from '$lib/doc-page.svelte';
  import PROPS from '@uui/TextField/TextField.types.d.ts?raw';
  import InlineCode from '$lib/inline-code.svelte';
</script>

<DocPage>
  <Typography variant="h2">Textfield</Typography>
  <Typography variant="body1">Element for capturing text.</Typography>
  <Box class="text-field-example">
    <div class="labeled-example">
      <Typography variant="subtitle1">Outlined:</Typography>
      <TextField label="Label" variant="outlined" color="primary" />
    </div>

    <div class="labeled-example">
      <Typography variant="subtitle1">Filled:</Typography>
      <TextField label="Label" variant="filled" color="primary" />
    </div>
  </Box>

  <Typography variant="h3">Props</Typography>
  <Typography variant="body1">
    The Text Field component is a basic HTMLElement that wraps a native HTMLInputElement. There are
    two input properties, <InlineCode>required</InlineCode> and <InlineCode>disabled</InlineCode>,
    you can pass directly to <InlineCode>TextField</InlineCode>, whereas all other input properties
    can be passed to the <InlineCode>inputProps</InlineCode> object that will be applied to the input.
  </Typography>
  <VariantExample code={PROPS} />

  <Typography variant="h4">Using Props Examples</Typography>
  <PropsExample />
  <Accordion>
    <Typography variant="h6" slot="headerContent">Props Example Code</Typography>
    <VariantExample slot="content" code={PROPS_EXP} />
  </Accordion>

  <Typography variant="h3">Slots</Typography>
  <Typography variant="body1">TextField provides two slots for icons:</Typography>
  <ul>
    <li>leadingIcon</li>
    <li>trailingIcon</li>
  </ul>
  <Typography variant="body1">
    These slots need to be used with the <InlineCode>TextFieldIcon</InlineCode> component.
  </Typography>

  <SlotsExample />
  <Accordion>
    <Typography slot="headerContent" variant="h6">Slots Code</Typography>
    <VariantExample slot="content" code={SLOTS_EXP} />
  </Accordion>

  <Typography variant="h3">Controlled TextField Example</Typography>
  <Typography variant="body1">
    TextField can be controlled or uncontrolled. The below example is a controlled TextField. Try
    interacting with it to see how validation and submission work.
  </Typography>

  <ValidationExample />
  <Accordion>
    <Typography variant="h6" slot="headerContent">Controlled TextField Code</Typography>
    <VariantExample slot="content" code={VALIDATION_EXP} />
  </Accordion>

  <Typography variant="h3">Theming</Typography>
  <Typography variant="body1">
    Certain aspects of the TextField theme can be directly overridden by a mix of props (color) and
    a textField palette. To override the focused state colors use the prop. If you want to override
    other states (inactive, hover, background, background hover, bottom line hover) you'll need to
    add a custom text field palette to your theme. TextField icons, by default, use --on-background
    for their color. You can override that color by adding a style tag to your TextFieldIcon with a
    "!important".
  </Typography>

  <ThemingExample />
  <Accordion>
    <Typography slot="headerContent" variant="h6">Theming Code</Typography>
    <VariantExample slot="content" code={THEMING_EXP} />
  </Accordion>
</DocPage>

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
    padding: 1rem 0;
  }
</style>
