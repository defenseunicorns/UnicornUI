<script lang="ts">
  import type { ListProps } from './List.types';
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = ListProps<T>;
  export let disablePadding: boolean | undefined = undefined;

  $: incomingSSX = $$restProps.ssx ? $$restProps.ssx : { $self: {} };
</script>

<Box
  element="ul"
  eventComponent={current_component}
  {...$$restProps}
  class="list mdc-deprecated-list {$$restProps.class || ''} {disablePadding
    ? 'disabled-padding'
    : ''}"
  ssx={{
    $self: {
      padding: '32px 16px',
      '.disabled-padding': {
        padding: 0
      },
      ...incomingSSX.$self
    }
  }}
>
  <slot />
</Box>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
