<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { TextFieldIconProps, TextFieldIconVariant } from './TextField.types';

  type T = $$Generic<EventTarget>;
  type $$Props = TextFieldIconProps<T>;
  export let variant: TextFieldIconVariant;
</script>

<Box
  element="i"
  eventComponent={current_component}
  {...$$restProps}
  class={`mdc-text-field__icon mdc-text-field__icon--${variant} ${$$restProps.class || ''}`}
  aria-hidden="true"
>
  <slot />
</Box>
