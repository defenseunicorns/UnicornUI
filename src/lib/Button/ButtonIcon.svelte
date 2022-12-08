<script lang="ts">
  import Box from '$lib/Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { ButtonIconProps } from './Button.types';

  type T = $$Generic<EventTarget>;

  type $$Props = ButtonIconProps<T>;
</script>

<Box
  element="i"
  eventComponent={current_component}
  {...$$restProps}
  class={`mdc-button__icon ${$$restProps.class || ''}`}
  aria-hidden="true"
>
  <slot />
</Box>
