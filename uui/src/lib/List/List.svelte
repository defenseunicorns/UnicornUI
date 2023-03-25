<script lang="ts">
  import type { ListProps } from './List.types';
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = ListProps<T>;
  export let disablePadding: boolean | undefined = undefined;
</script>

<Box
  element="ul"
  eventComponent={current_component}
  {...$$restProps}
  class="list mdc-deprecated-list {$$restProps.class || ''} {disablePadding
    ? 'disabled-padding'
    : ''}"
>
  <slot />
</Box>

<style lang="scss" global>
  @use '@material/list';
  .list-group .list,
  .list {
    @include list.deprecated-core-styles;
    padding: 32px 16px;
    .disabled-padding {
      padding: 0px;
    }
  }
</style>
