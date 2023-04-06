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
  $: stateClasses = `${open && 'open'}`;
</script>

<Paper
  bind:ref={menuRef}
  {elevation}
  {...$$restProps}
  class="menu {stateClasses} {anchorOrigin} {$$restProps.class || ''}"
  style="--elevation: {elevation}"
>
  <slot />
</Paper>

<style lang="scss" global>
  .menu {
    display: none;
    width: 20rem;
    position: absolute;
    box-sizing: border-box;
    opacity: 0;
    overflow: auto;
    z-index: var(--elevation);
    transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1),
      height 250ms cubic-bezier(0, 0, 0.2, 1);
    border-radius: 4px;
  }

  .menu.open {
    display: inline-block;
    opacity: 1;
  }
</style>
