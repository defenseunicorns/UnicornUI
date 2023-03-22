<script lang="ts">
  import Paper from '../Paper/Paper.svelte';
  import type { DrawerAnchor, DrawerProps, DrawerVariant } from './Drawer.types';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = DrawerProps<T>;
  export let anchor: DrawerAnchor = 'left';
  export let variant: DrawerVariant = 'permanent';
  export let open = false;
  export let onClose: (() => void) | undefined = undefined;

  let elevation = $$restProps.elevation || 16;
  $: variantClasses = `${
    variant === 'temporary' ? `mdc-drawer--modal ${variant} ${anchor}` : `${variant} ${anchor}`
  } ${open ? 'mdc-drawer--open' : ''}`;
</script>

<Paper {elevation} variant="elevation" {...$$restProps} class="drawer mdc-drawer {variantClasses}">
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
    height: 100vh;
  }

  .mdc-drawer--modal {
    top: 0;
  }

  .drawer.mdc-drawer.mdc-drawer--modal.temporary.right.mdc-drawer--open {
    right: 0;
  }
</style>
