<script lang="ts">
  import type { ListProps } from './List.types';
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';

  // Props
  type $$Props = ListProps;
  export let disabledPadding: boolean | undefined = undefined;
</script>

<Box
  element="ul"
  eventComponent={current_component}
  {...$$restProps}
  class="mdc-deprecated-list {$$restProps.class || ''} {disabledPadding ? 'disabled-padding' : ''}"
  ssx={{
    $self: {
      padding: '32px 16px',
      '.disabled-padding': {
        padding: 0
      }
    }
  }}
>
  <slot />
</Box>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
