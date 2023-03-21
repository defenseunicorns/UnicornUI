<script lang="ts">
  import Paper from '../Paper/Paper.svelte';
  import type { DrawerAnchor, DrawerProps } from './Drawer.types';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = DrawerProps<T>;
  export let anchor: DrawerAnchor = 'left';
  export let open = false;

  let elevation = $$restProps.elevation || 16;
</script>

<Paper {elevation} variant="elevation" class="drawer mdc-drawer">
  <slot name="header" />
  <div class="mdc-drawer__content">
    <slot name="content" />
  </div>
</Paper>

<style lang="scss" global>
  @use '@material/drawer';

  @include drawer.core-styles;
  @include drawer.dismissible-core-styles;
  @include drawer.modal-core-styles;
</style>
