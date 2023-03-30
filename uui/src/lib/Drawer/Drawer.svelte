<script lang="ts">
  import Paper from '../Paper/Paper.svelte';
  import type { DrawerAnchor, DrawerProps, DrawerVariant } from './Drawer.types';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = DrawerProps<T>;
  export let anchor: DrawerAnchor = 'left';
  export let variant: DrawerVariant = 'permanent';
  export let open = true;
  export let onClose: (() => void) | undefined = undefined;

  let elevation = $$restProps.elevation || 16;
  $: variantClasses = `${
    variant === 'temporary'
      ? `mdc-drawer--modal ${variant} ${anchor} ${open && 'mdc-drawer--open'}`
      : `${variant} ${anchor}`
  }`;

  $: drawerState = open ? 'open' : 'closed';
</script>

<Paper
  {elevation}
  variant="elevation"
  {...$$restProps}
  class="drawer mdc-drawer {variantClasses} {drawerState}"
>
  <slot name="header" />
  <div class="mdc-drawer__content">
    <slot name="content" />
  </div>
</Paper>

{#if variant === 'temporary'}
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

  .drawer.mdc-drawer:not(.temporary).closed {
    width: 0;
  }

  .mdc-drawer--modal {
    top: 0;
  }

  .mdc-drawer--modal.temporary.right {
    right: 0;
  }

  .drawer.mdc-drawer .mdc-deprecated-list-group__subheader {
    color: var(--on-background);
  }
</style>
