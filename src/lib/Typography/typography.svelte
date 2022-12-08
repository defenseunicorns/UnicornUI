<script lang="ts">
  import Box from '$lib/Box/box.svelte';
  import { themeColorBuilder } from '$lib/shared/theme/default-colors/colors';
  import type { TextColors } from '$lib/shared/theme/default-colors/colors.types';
  import { current_component } from 'svelte/internal';
  import { getVariantClass, typographyElementMapping } from './typography';
  import type { TypographyVariant, TypographyElement, TypographyProps } from './typography.types';

  // Internal Types;
  type T = $$Generic<EventTarget>;

  // Vars
  let variantElement: TypographyElement;

  // Props
  export let variant: TypographyVariant = 'body1';
  export let color: TextColors = 'inherit';

  type $$Props = TypographyProps<T>;

  variantElement = typographyElementMapping[variant] || {
    element: 'span',
    class: getVariantClass(variant)
  };
  $: $$restProps.class = `${variantElement.class} ${$$restProps.class || ''}`;
  $: $$restProps.style = `color: ${themeColorBuilder(color)}; ${$$restProps.style}`;
</script>

<Box element={variantElement.element} eventComponent={current_component} {...$$restProps}>
  <slot />
</Box>

<style lang="scss">
  @use '@material/typography/mdc-typography';

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
