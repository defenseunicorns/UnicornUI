<script lang="ts">
  import { current_component } from 'svelte/internal';
  import Paper from '../Paper/Paper.svelte';
  export let open = false;

  let elevation = $$restProps.elevation || 16;
</script>

<Paper
  {elevation}
  eventComponent={current_component}
  variant="elevation"
  {...$$restProps}
  class="drawer mdc-drawer"
  style="width: {open ? '' : '72px'}"
>
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

  .drawer.mdc-drawer {
    height: 100vh;
  }
</style>
