<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { TextFieldIconProps } from './TextField.types';

  type T = $$Generic<EventTarget>;
  type $$Props = TextFieldIconProps<T>;

  function getIconSlot() {
    let tag = '';
    if ($$restProps.slot === 'leadingIcon') {
      tag = 'leading';
    } else {
      tag = 'trailing';
    }
    return tag;
  }
</script>

<Box
  element="i"
  eventComponent={current_component}
  {...$$restProps}
  class={`mdc-text-field__icon mdc-text-field__icon--${getIconSlot()} ${$$restProps.class || ''}`}
  aria-hidden="true"
>
  <slot />
</Box>
