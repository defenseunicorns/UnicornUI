<script lang="ts">
  import Paper from '../Paper/Paper.svelte';
  import { current_component } from 'svelte/internal';
  import type { ListGroupProps } from './ListGroup.types';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = ListGroupProps<T>;
</script>

<Paper
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="list-group mdc-deprecated-list-group {$$restProps.class || ''}"
>
  <slot />
</Paper>

<style lang="scss" global>
  @use '@material/list';
  .list-group.mdc-deprecated-list-group {
    @include list.deprecated-core-styles;
  }
</style>
