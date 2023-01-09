<script lang="ts">
  import Box from '$lib/Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import { typographyElementMapping } from './typography';
  import { makeThemeColor } from '$lib/shared/utils/makeThemeColor';
  import type { TextColors } from '$lib/shared/theme/default-colors/colors.types';
  import type { TypographyVariant, TypographyElement, TypographyProps } from './typography.types';
  import { createTypographyVariantClass } from '$lib/shared/theme/typography-config/typography-config.utils';

  // Internal Types;
  type T = $$Generic<EventTarget>;

  // Vars
  let variantElement: TypographyElement;

  // Props
  export let variant: TypographyVariant = 'body1';
  export let color: TextColors = '';

  type $$Props = TypographyProps<T>;

  variantElement = typographyElementMapping[variant] || {
    element: 'span',
    class: createTypographyVariantClass(variant)
  };
  $: $$restProps.class = `${variantElement.class} ${$$restProps.class || ''}`;
  $: $$restProps.style = `color: ${makeThemeColor(color)}; ${$$restProps.style}`;
</script>

<Box element={variantElement.element} eventComponent={current_component} {...$$restProps}>
  <slot />
</Box>

<style lang="scss">
  .mdc-typography--inherit {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    font-weight: inherit;
    font-style: inherit;
    letter-spacing: inherit;
    text-decoration: inherit;
  }
</style>
