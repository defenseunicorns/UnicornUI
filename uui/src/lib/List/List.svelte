<script lang="ts">
  import type { ListProps } from './List.types';
  import { current_component } from 'svelte/internal';
  import Paper from '../Paper/Paper.svelte';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = ListProps<T>;
  export let disablePadding = false;
</script>

<Paper
  element="ul"
  eventComponent={current_component}
  {...$$restProps}
  class="list mdc-deprecated-list {$$restProps.class || ''} {disablePadding && 'disabled-padding'}"
>
  <slot />
</Paper>

<style lang="scss" global>
  @use '@material/list';
  .list-group .list,
  .list {
    @include list.deprecated-core-styles;
    padding: 32px 16px;
  }

  .list-group .list.disabled-padding,
  .list.disabled-padding {
    @include list.deprecated-core-styles;
    padding: 0px;
  }
</style>
