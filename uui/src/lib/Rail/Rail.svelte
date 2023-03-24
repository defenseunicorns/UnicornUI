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
  class="rail mdc-drawer {open && 'open'} {$$restProps.class || ''}"
  style="width: {open ? '' : '72px'}"
>
  <div class="rail-header">
    <slot name="header" />
  </div>
  <div class="mdc-drawer__content rail-content">
    <slot name="content" />
  </div>
</Paper>

<style lang="scss" global>
  @use '@material/drawer';

  @include drawer.core-styles;
  @include drawer.dismissible-core-styles;
  @include drawer.modal-core-styles;

  .rail-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rail.open .rail-header {
    justify-content: end;
    margin-right: 1rem;
  }

  .rail-content {
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>
