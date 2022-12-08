<script lang="ts">
  import Box from '$lib/Box/box.svelte';
  import Variant from '../../website-components/Variant.svelte';
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
    // Add additional events supported by svelte.
    additionalEvents: string[] = [];
    // Pass svelte internal "current_component" to allow simple event forwarding.
    eventComponent: typeof current_component | undefined = undefined;

Slots:
  unamed

Examples:
<Box element="a" href="/box">link</Box>

<Box
    bind:ref={myElementRef}
	style="display: flex; padding: 16px; justify-content: center; align-content: center"
	on:mouseover={() => (hovering = true)}
	on:mouseout={() => (hovering = false)}
	class={hoverClass}
>
	div (default)
</Box>

<Box element="button">Button</Box>
`}
>
  <Box class="box-examples">
    <Box element="a" href="/box">link</Box>
    <Box element="button">Button</Box>
    <Box
      style="display: flex; padding: 16px; justify-content: center; align-content: center"
      on:mouseover={() => (hovering = true)}
      on:mouseout={() => (hovering = false)}
      class={hoverClass}
    >
      div (default)
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
