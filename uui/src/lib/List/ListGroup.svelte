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
  class="mdc-deprecated-list-group {$$restProps.class || ''}"
>
  <slot />
</Box>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
