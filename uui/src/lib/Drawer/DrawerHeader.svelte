<script lang="ts">
  import Typography from '../Typography/typography.svelte';
  import Box from '../Box/box.svelte';
  import type { DrawerHeaderProps } from './Drawer.types';
  import { current_component } from 'svelte/internal';

  //Props
  type T = $$Generic<EventTarget>;
  type $$Props = DrawerHeaderProps<T>;
  export let title = '';
  export let subtitle = '';
</script>

<Box
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="mdc-drawer__header {$$restProps.class || ''}"
>
  <h3 class="mdc-drawer__title">{title}</h3>
  <h6 class="mdc-drawer__subtitle">{subtitle}</h6>
</Box>

<style lang="scss" global>
  @use '@material/drawer';

  @include drawer.core-styles;
  @include drawer.dismissible-core-styles;
  @include drawer.modal-core-styles;

  .drawer .mdc-drawer__header {
    @include drawer.title-ink-color(var(--on-surface));
    @include drawer.subtitle-ink-color(var(--on-surface));
  }
</style>
