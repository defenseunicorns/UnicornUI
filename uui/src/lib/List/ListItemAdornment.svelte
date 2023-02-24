<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { ListItemAdornmentProps } from './ListItem.types';

  type T = $$Generic<EventTarget>;
  type $$Props = ListItemAdornmentProps<T>;

  let listIconClass =
    $$restProps.slot === 'leadingAdornment'
      ? 'mdc-deprecated-list-item__graphic'
      : 'mdc-deprecated-list-item__meta material-icons';
</script>

<Box
  element="i"
  eventComponent={current_component}
  {...$$restProps}
  class="{listIconClass} {$$restProps.class || ''}"
  aria-hidden="true"
>
  <slot />
</Box>
