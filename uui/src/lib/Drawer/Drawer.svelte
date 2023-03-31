<script lang="ts">
  import Paper from '../Paper/Paper.svelte';
  import type { DrawerAnchor, DrawerProps } from './Drawer.types';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = DrawerProps<T>;
  export let anchor: DrawerAnchor = 'left';
  export let modal = false;
  export let open = true;
  export let rail = false;
  export let onClose: (() => void) | undefined = undefined;

  // Local Vars
  let elevation = $$restProps.elevation || 16;

  // Reactive Vars
  $: variantClasses = `${modal ? `modal-drawer ${anchor} ${open && 'mdc-drawer--open'}` : ``} ${
    rail && 'rail'
  } ${open ? 'open' : 'closed'}`;
</script>

<Paper
  {elevation}
  variant="elevation"
  {...$$restProps}
  class="drawer mdc-drawer {variantClasses} {$$restProps.class || ''}"
>
  {#if $$slots.header}
    <div class="header">
      <slot name="header" />
    </div>
  {/if}
  <div class="mdc-drawer__content">
    <slot name="content" />
  </div>
</Paper>

{#if modal}
  <div class="mdc-drawer-scrim" on:click={onClose} />
{/if}

<style lang="scss" global>
  @use '@material/drawer';

  @include drawer.core-styles;
  @include drawer.dismissible-core-styles;
  @include drawer.modal-core-styles;

  .drawer.mdc-drawer {
    min-height: 100%;
    transition: width 0.5s;
  }

  // Header
  .drawer .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drawer.mdc-drawer.open .header {
    justify-content: end;
    margin-right: 1rem;
  }

  // Modal

  .modal-drawer {
    @extend .mdc-drawer--modal;
    top: 0;
  }

  .modal-drawer.right {
    right: 0;
    left: initial;
  }

  // Closed State
  .drawer.mdc-drawer:not(.rail).closed {
    width: 0;
  }

  .drawer.mdc-drawer.rail.closed {
    width: 72px;
  }

  .drawer.mdc-drawer.rail.closed .mdc-drawer__content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  // Target ListSubheader if nested in Drawer
  .drawer.mdc-drawer .mdc-deprecated-list-group__subheader {
    color: var(--on-background);
  }
</style>
