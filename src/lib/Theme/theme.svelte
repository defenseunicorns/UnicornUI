<script lang="ts">
  import { onMount } from 'svelte';
  import { createPaletteMap } from '$lib/shared/theme/palette/palette';
  import type { ThemeVars } from '$lib/shared/theme/palette/palette.types';
  import { DefaultPalettes } from '$lib/shared/theme/palette/default-palettes';

  export let palettes = DefaultPalettes;

  // Check for light theme otherwise use dark
  // Shared is always applied even when its the only theme.
  export let theme = palettes['light'] ? 'light' : 'dark';

  // Ensure theme applied before rendering children.
  let mounted = false;

  // Convert palettes to map with key, themeVars.
  const paletteMap = createPaletteMap(palettes);

  // Watch theme and apply when changed.
  $: {
    // empty if theme not found (shared is always applied)
    const currentPalette = paletteMap.get(theme) || {};
    const sharedPalette = paletteMap.get('shared') || {};

    // Ensure we can access document.
    if (mounted) {
      const themePalette: ThemeVars = { ...sharedPalette, ...currentPalette };
      Object.entries(themePalette).forEach((entry: [string, string]) => {
        // Add var to root.
        document.documentElement.style.setProperty(entry[0], entry[1]);
      });
      // Set the background and color properties from theme to body.
      document.body.style.setProperty('background-color', `var(--mdc-theme-background)`);
      document.body.style.setProperty('color', 'var(--mdc-theme-on-background)');
    }
  }

  // Lifecycle
  onMount(() => {
    mounted = true;
  });
</script>

<!-- 
	Prevent children rendering until theme applied. 
	This stops potential flash from default theme/root values 
-->
{#if mounted}
  <slot />
{/if}
