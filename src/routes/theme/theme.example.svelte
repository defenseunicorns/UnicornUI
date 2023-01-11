<script lang="ts">
  // routes/+layout.svelte

  import { getPreferredTheme, Theme, Typography, type PreferredTheme } from '$lib';
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
  @import '@fontsource/500';
  @import '@fontsource/300';
</style>
