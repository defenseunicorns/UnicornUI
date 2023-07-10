<script lang="ts">
  import { Box } from '@uui';
  import { current_component, onMount } from 'svelte/internal';
  import { fade } from 'svelte/transition';
  import { create_bidirectional_transition } from 'svelte/internal';
  let boxRef: HTMLElement;
</script>

<Box element="div" bind:ref={boxRef} transition:fade eventComponent={current_component}>
  TeSTING
</Box>

<div transition:fade>Element Test</div>
