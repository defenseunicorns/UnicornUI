<script lang="ts">
  import { onMount } from 'svelte';
  import {
    createStyleFromJSON,
    addThemeStyleToHead,
    createTypographyConfig
  } from '$lib/shared/theme/typography-config/typography-config.utils';
  import type { ThemeVars } from '$lib/shared/theme/palette/palette.types';
  import { createPaletteMap } from '$lib/shared/theme/palette/palette.utils';
  import { DefaultPalettes } from '$lib/shared/theme/palette/default-palettes';
  import type { ThemeTypography } from '$lib/shared/theme/typography-config/typography-config.types';

  export let palettes = DefaultPalettes;
  export let typography: ThemeTypography = {};

  // Check for light theme otherwise use dark
  // Shared is always applied even when its the only theme.
  export let theme = palettes['light'] ? 'light' : 'dark';

  // Ensure theme applied before rendering children.
  let mounted = false;

  // Convert palettes to map with key, themeVars.
  const paletteMap = createPaletteMap(palettes);
  // Create Typography Config
  const typographyConfig = createTypographyConfig(typography);

  // Watch theme and apply when changed.
  $: {
    // empty if theme not found (shared is always applied)
    const currentPalette = paletteMap.get(theme) || {};
    const sharedPalette = paletteMap.get('shared') || {};
    const themeVars: ThemeVars = {
      ...sharedPalette,
      ...currentPalette,
      ...typographyConfig.vars
    };
    const themeStyle = { ':root': themeVars, ...typographyConfig.classes };

    // Ensure we can access document.
    if (mounted) {
      addThemeStyleToHead(document, createStyleFromJSON(themeStyle));
      // Set the background, color, and font-family properties from theme to body.
      document.body.style.setProperty('background-color', `var(--mdc-theme-background)`);
      document.body.style.setProperty('color', 'var(--mdc-theme-on-background)');
      document.body.style.setProperty('font-family', 'var(--mdc-typography-font-family)');
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

<style lang="scss" global>
  @use '@material/typography/mdc-typography';
</style>
