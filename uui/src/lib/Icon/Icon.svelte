<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { IconProps } from './Icon.types';
  import type { MaterialSymbols } from 'material-symbols';

  type T = $$Generic<EventTarget>;
  type $$Props = IconProps<T>;
  export let variant: MaterialSymbols;
</script>

<Box
  element="i"
  eventComponent={current_component}
  {...$$restProps}
  class={`material-symbols-outlined ${$$restProps.class || ''}`}
>
  {variant}
</Box>
