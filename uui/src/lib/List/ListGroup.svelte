<script lang="ts">
  import { current_component } from 'svelte/internal';
  import Box from '../Box/box.svelte';
  import type { ListGroupProps } from './ListGroup.types';

  // Props
  type $$Props = ListGroupProps;
</script>

<Box
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="list-group mdc-deprecated-list-group {$$restProps.class || ''}"
>
  <slot />
</Box>

<style lang="scss" global>
  @use '@material/list';
  .list-group.mdc-deprecated-list-group {
    @include list.deprecated-core-styles;
  }
</style>
