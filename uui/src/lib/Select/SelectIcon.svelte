<script lang="ts">
  import type { SelectIconProps } from './Select.types';
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';

  type T = $$Generic<EventTarget>;
  type $$Props = SelectIconProps<T>;
</script>

<Box
  element="i"
  eventComponent={current_component}
  aria-hidden="true"
  {...$$restProps}
  class={`select-icon mdc-text-field__icon mdc-text-field__icon--${$$restProps.slot} ${
    $$restProps.class || ''
  }`}
>
  <slot />
</Box>

<style lang="scss" global>
  .select-icon.mdc-text-field__icon:not([tabindex]),
  .select-icon.mdc-text-field__icon[tabindex='-1'] {
    pointer-events: all;
  }
</style>
