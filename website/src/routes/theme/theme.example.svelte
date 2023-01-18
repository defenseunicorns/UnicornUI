<script lang="ts">
  // routes/+layout.svelte

  import { getPreferredTheme, Theme, Typography, type PreferredTheme } from '@uui';
  import { onMount } from 'svelte';

  let theme: PreferredTheme;

  onMount(() => {
    theme = getPreferredTheme(window);
  });
</script>

<Theme {theme}>
  <Typography variant="h1">Theme Example</Typography>
  <main>
    <slot />
  </main>
</Theme>

<style>
  /* Roboto normal (400) */
  @import '@fontsource/roboto';
  @import '@fontsource/roboto/500';
  @import '@fontsource/roboto/300';
</style>
