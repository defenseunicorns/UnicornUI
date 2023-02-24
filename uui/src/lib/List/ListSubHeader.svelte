<script lang="ts">
  import type { ListSubHeaderProps } from './ListSubHeader.types';
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';

  type $$Props = ListSubHeaderProps;
</script>

<Box
  element="h3"
  eventComponent={current_component}
  {...$$restProps}
  class="mdc-deprecated-list-group__subheader {$$restProps.class || ''}"
>
  <slot />
</Box>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
