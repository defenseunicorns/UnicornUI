<script lang="ts">
  import { createTypographyConfig } from '../shared/theme/typography-config/typography-config.utils';
  import type { ThemeTypography } from '../shared/theme/typography-config/typography-config.types';
  import { UUI_TYPOGRAPHY } from '../shared/theme/typography-config/default-typography-config';
  import { createPaletteMap, mergePalettes } from '../shared/theme/palette/palette.utils';
  import { BREAKPOINT_CONTEXT } from '../shared/theme/breakpoints/breakpoint-context';
  import { UUI_BREAKPOINTS } from '../shared/theme/breakpoints/default-breakpoints';
  import type { Breakpoints } from '../shared/theme/breakpoints/breakpoints.types';
  import { updateThemeStyle } from '../shared/theme/config/theme-config.utils';
  import { UUI_PALETTES } from '../shared/theme/palette/default-palettes';
  import type { Palettes } from '../shared/theme/palette/palette.types';
  import { currentTheme } from '../shared/theme/store/theme-store';
  import { getPreferredTheme } from '../shared/utils/getPreferredTheme';
  import '../shared/theme/default-colors/colors.css';
  import { onMount } from 'svelte';

  // Props
  export let breakpoints: Breakpoints = UUI_BREAKPOINTS;
  export let palettes: Palettes = UUI_PALETTES;
  export let typography: ThemeTypography = UUI_TYPOGRAPHY;
  // Check for light theme otherwise use dark
  // Shared is always applied even when its the only theme.
  export let theme = palettes['light'] ? 'light' : 'dark';
  // Find and use preferred theme if true
  export let preferredTheme = true;

  // Locals
  // Used to ensure component is mounted.
  let pageDocument: Document;
  // used for the observed theme value from theme store
  let watchedTheme: string;
  // Convert palettes to map with key, ThemeVars.
  const paletteMap = createPaletteMap(mergePalettes(palettes));
  // Create Typography Config
  const typographyConfig = createTypographyConfig({ ...UUI_TYPOGRAPHY, ...typography });

  // merge and set BreakPoint Context
  BREAKPOINT_CONTEXT.setBreakpoints({ ...UUI_BREAKPOINTS, ...breakpoints });

  // Lifecycle
  onMount(() => {
    pageDocument = document;

    // If preferredTheme is true, get theme from window and set in the theme store
    // else set theme store to theme passed as prop
    const themePreference = preferredTheme && getPreferredTheme(window);
    if (themePreference) {
      currentTheme.set(themePreference);
    } else {
      theme && currentTheme.set(theme);
    }

    // Needs to be inside onMount to ensure subscribe happens
    // after theme store is set to either preferred theme or theme passed as prop
    currentTheme.subscribe((value) => {
      watchedTheme = value;
    });
  });

  // Watch theme and apply when changed.
  $: updateThemeStyle(
    {
      // Create vars in root.
      ':root': {
        // Apply shared palette first as base
        ...(paletteMap.get('shared') || {}),
        // Apply chosen theme palette
        ...(paletteMap.get(watchedTheme) || {}),
        // Apply the typography vars
        ...typographyConfig.vars
      },
      // Expand the coinciding typography classes
      ...typographyConfig.classes
    },
    pageDocument
  );
</script>

<!-- 
	Prevent children rendering until theme applied. 
	This stops potential flash from default theme/root values 
-->
{#if pageDocument}
  <slot />
{/if}

<style lang="scss" global>
  @import '@material/typography/mdc-typography';
  :root {
    --mdc-typography-font-family: var(--global-font-family, 'Roboto, helvetica, sans-serif');
  }
  body {
    font-family: var(--global-font-family);
    background-color: var(--background);
    color: var(--on-background);
  }
</style>
