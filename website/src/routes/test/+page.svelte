<script lang="ts">
  import { Box } from '@uui';
  import { fade } from 'svelte/transition';
  import * as internal from 'svelte/internal';
  let boxRef: HTMLElement;
</script>

<Box element="div" bind:ref={boxRef} transition:fade>TeSTING</Box>

<div transition:fade>Element Test</div>
