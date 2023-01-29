<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import { typographyElementMapping } from './typography';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import type { TypographyVariant, TypographyProps } from './typography.types';

  // Internal Types;
  type T = $$Generic<EventTarget>;

  // Vars
  let variantElement: string;

  // Props
  export let variant: TypographyVariant = 'body1';
  export let color: ThemeColors = '';

  type $$Props = TypographyProps<T>;

  variantElement = typographyElementMapping[variant] || 'span';
  $: $$restProps.class = `${variant} ${$$restProps.class || ''}`;
  $: $$restProps.style = `color: ${makeThemeColor(color)}; ${$$restProps.style}`;
</script>

<Box element={variantElement} eventComponent={current_component} {...$$restProps}>
  <slot />
</Box>
