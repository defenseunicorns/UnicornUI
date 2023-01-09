<script lang="ts">
  import { onMount } from 'svelte';
  import { createTypographyConfig } from '$lib/shared/theme/typography-config/typography-config.utils';
  import { createPaletteMap } from '$lib/shared/theme/palette/palette.utils';
  import { DefaultPalettes } from '$lib/shared/theme/palette/default-palettes';
  import type { ThemeTypography } from '$lib/shared/theme/typography-config/typography-config.types';
  import { updateThemeStyle } from '$lib/shared/theme/config/theme-config.utils';

  // Props
  export let palettes = DefaultPalettes;
  export let typography: ThemeTypography = {};
  // Check for light theme otherwise use dark
  // Shared is always applied even when its the only theme.
  export let theme = palettes['light'] ? 'light' : 'dark';

  // Locals
  // Used to ensure component is mounted.
  let pageDocument: Document;
  // Convert palettes to map with key, themeVars.
  const paletteMap = createPaletteMap(palettes);
  // Create Typography Config
  const typographyConfig = createTypographyConfig(typography);

  // Watch theme and apply when changed.
  $: updateThemeStyle(
    {
      // Create vars in root.
      ':root': {
        // Apply shared palette first as base
        ...(paletteMap.get('shared') || {}),
        // Apply chosen theme palette
        ...(paletteMap.get(theme) || {}),
        // Apply the typography vars
        ...typographyConfig.vars
      },
      // Expand the coinciding typography classes
      ...typographyConfig.classes
    },
    pageDocument
  );

  // Lifecycle
  onMount(() => {
    pageDocument = document;
  });
</script>

<!-- 
	Prevent children rendering until theme applied. 
	This stops potential flash from default theme/root values 
-->
{#if pageDocument}
  <slot />
{/if}

<style lang="scss" global>
  @use '@material/typography/mdc-typography';
  @import '../shared/theme/default-colors/colors.css';
  :root {
    --mdc-typography-font-family: var(--mdc-typography-global-font-family, 'roboto', sans-serif);
  }
  body {
    background-color: var(--mdc-theme-background);
    color: var(--mdc-theme-on-background);
  }
</style>
