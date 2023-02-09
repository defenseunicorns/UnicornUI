<script lang="ts">
  import Variant from '$lib/Variant.svelte';
  import { scopedExample } from './page-styles';
  import { exampleScopedStyle } from './scoped-styles.example';
  import { Box, Typography, AccordionGroup, Accordion } from '@uui';
  import EXAMPLE_SCOPED_STYLE_RAW from './scoped-styles.example?raw';
  import EXAMPLE_COMPONENT from './example-component.svelte?raw';
  import ExampleComponent from './example-component.svelte';
  import VariantExample from '$lib/VariantExample.svelte';
</script>

<Variant
  title="Scoped Styles"
  code={`
  ScopedStyles has been created to allow styling on composed components without abusing the :global tag and allowing isolated component styles to bleed into the global space. In order to solve svelte shortcomings related to styling composed components Unicorn UI implements a runtime js to css action to apply truly scoped css styles to custom components without the need of large external dependencies. While ScopedStyles uses "js in css", in order to maintain the simplicity and continuity that svelte provides, ScopedStyles has been designed to "write like css" with only a few simple caveats such as support for '&' based css nesting.
  
Action:
  scopedStyles

Params:
  jss?: ScopedStyles

Reserved Tokens:
  $self: Used to access the internally generated unique class name. 
  &: Used as a placeholder for the "parent" class when nesting in a ScopedStyles. 

Example ScopedStyles:
${EXAMPLE_SCOPED_STYLE_RAW}
`}
>
  <Box scopedStyle={scopedExample}>
    <Box scopedStyle={exampleScopedStyle}>Parent <Box class="child">Child</Box></Box>
  </Box>
  <AccordionGroup>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Action: scopedStyles</Typography>
      <Box
        slot="content"
        scopedStyle={{
          '$self .h6': {
            marginTop: '16px',
            marginBottom: '16px'
          }
        }}
      >
        <Typography variant="h6">Example Component:</Typography>
        <VariantExample code={EXAMPLE_COMPONENT} />
        <Typography variant="h6">In Use:</Typography>
        <VariantExample
          code={`
<ExampleComponent
  scopedStyle={{
    $self: {
      width: 'fit-content',
      margin: '16px auto',
      textAlign: 'center',
      '&:hover': {
        color: 'green'
      }
    }
  }}
>
  Example Component
</ExampleComponent>
`}
        />
        <ExampleComponent
          scopedStyle={{
            $self: {
              width: 'fit-content',
              margin: '16px auto',
              textAlign: 'center',
              '&:hover': {
                color: 'green'
              }
            }
          }}
        >
          Example Component
        </ExampleComponent>
      </Box>
    </Accordion>
  </AccordionGroup>
</Variant>
