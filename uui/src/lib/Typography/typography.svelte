<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import { typographyElementMapping } from './typography';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import type { TypographyVariant, TypographyElement, TypographyProps } from './typography.types';
  import { createMDCTypographyClassName } from '../shared/theme/typography-config/typography-config.utils';

  // Internal Types;
  type T = $$Generic<EventTarget>;

  // Vars
  let variantElement: TypographyElement;

  // Props
  export let variant: TypographyVariant = 'body1';
  export let color: ThemeColors = '';

  type $$Props = TypographyProps<T>;

  variantElement = typographyElementMapping[variant] || {
    element: 'span',
    class: createMDCTypographyClassName(variant)
  };
  $: $$restProps.class = `${variantElement.class} ${$$restProps.class || ''}`;
  $: $$restProps.style = `color: ${makeThemeColor(color)}; ${$$restProps.style}`;
</script>

<Box element={variantElement.element} eventComponent={current_component} {...$$restProps}>
  <slot />
</Box>
