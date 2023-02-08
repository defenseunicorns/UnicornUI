<script lang="ts">
  import { Box } from '@uui';
  import Variant from '$lib/Variant.svelte';
  import { scopedStyles } from '../../../../uui/src/lib/shared/utils/scopedStyles';
  let hovering = false;
  $: hoverClass = hovering ? 'hover' : '';
</script>

<Variant
  title="Box"
  code={`
General use unstyled border-box element that allows all default events, props,
and elements supported by svelte:element without block-margins.

Props:
  // desired html element
  element: string = "div";
  // Bound element reference (bind:this={ref});
  ref: Element = undefined;
  // Pass svelte internal "current_component" to allow simple event forwarding.
  eventComponent: typeof current_component | undefined = undefined;
  // Pass ScopedStyles to Box without bleeding to global styles. 
  scopedStyle: ScopedStyles | undefined = undefined

Slots:
  unamed

Examples:
<Box element="a" href="/box">link</Box>

<Box element="button">Button</Box>

<Box
  bind:ref={myElementRef}
  style="padding: 16px;"
  on:mouseover={() => (hovering = true)}
  on:mouseout={() => (hovering = false)}
  class={hoverClass}
>
  div (default)
</Box>

<Box
  scopedStyle={{
    $self: {
      padding: '16px',
      '&:hover': { 
        backgroundColor: 'black', 
        color: 'pink' 
      }
    }
  }}
>
  div (scoped styles)
</Box>
`}
>
  <Box class="box-examples">
    <Box element="a" href="/box">link</Box>
    <Box element="button">Button</Box>
    <Box
      style="padding: 16px;"
      on:mouseover={() => (hovering = true)}
      on:mouseout={() => (hovering = false)}
      class={hoverClass}
    >
      div (default)
    </Box>
    <Box
      scopedStyle={{
        $self: {
          padding: '16px',
          '&:hover': { backgroundColor: 'black', color: 'pink' }
        },
        '@media (max-width: 500px)': {
          $self: {
            color: 'green'
          }
        }
      }}
    >
      div (scoped styles)
    </Box>
  </Box>
</Variant>

<style>
  :global(.hover) {
    background: black;
    color: white;
  }
  :global(.box-examples) {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 32px;
  }
</style>
