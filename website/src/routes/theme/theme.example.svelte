<script lang="ts">
  // routes/+layout.svelte

  import { Theme, Typography } from '@uui';
</script>

<Theme>
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
