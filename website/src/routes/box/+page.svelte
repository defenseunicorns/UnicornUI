<script lang="ts">
  import { Box } from '@uui';
  import Markdown from '$lib/markdown/markdown.svelte';
  import BoxDoc from './box.md?raw';
  let hovering = false;
  $: hoverClass = hovering ? 'hover' : '';
</script>

<Markdown source={BoxDoc} />
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
