<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from 'svelte';
  import Paper from '../Paper/Paper.svelte';
  import type { AnchorOrigin, MenuProps } from './Menu.types';
  import { computePosition, autoUpdate } from '@floating-ui/dom';

  // Props
  type T = $$Generic<HTMLMenuElement>;
  type $$Props = MenuProps<T>;

  export let open = false;
  export let anchorOrigin: AnchorOrigin = 'bottom-start';
  export let anchorRef: Element | undefined = undefined;
  export let onClose: (() => void) | undefined = undefined;

  // Local Vars
  let menuRef: HTMLElement;
  let elevation = $$restProps.elevation || 16;
  let cleanup: () => void;

  // Functions

  // gets called by floating-ui to re-calculate menu position
  function updateMenuPos() {
    if (anchorRef && menuRef) {
      computePosition(anchorRef, menuRef, {
        placement: anchorOrigin
      }).then(({ x, y }) => {
        Object.assign(menuRef.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });
    }
  }

  // Close menu when user clicks away
  function clickAway(evt: MouseEvent | KeyboardEvent) {
    if (
      open &&
      evt.target !== menuRef &&
      !menuRef.contains(evt.target as Node) &&
      !anchorRef?.contains(evt.target as Node)
    ) {
      onClose && onClose();
    }
  }

  // Lifecycle
  onMount(() => {
    window.addEventListener('click', clickAway);
  });

  afterUpdate(() => {
    if (anchorRef && menuRef && open) {
      cleanup = autoUpdate(anchorRef, menuRef, updateMenuPos);
    } else if (!open && cleanup) {
      cleanup();
    }
  });

  onDestroy(() => {
    cleanup && cleanup();
  });

  // Reactive Vars
  $: surfaceClasses = `mdc-menu-surface ${open && 'mdc-menu-surface--open'}`;
</script>

<Paper
  bind:ref={menuRef}
  {elevation}
  class="menu mdc-menu {surfaceClasses} {anchorOrigin} {$$restProps.class || ''}"
>
  <slot />
</Paper>

<style lang="scss" global>
  @use '@material/menu-surface/mdc-menu-surface';
  @use '@material/menu/mdc-menu';
</style>
