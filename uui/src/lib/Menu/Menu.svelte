<script lang="ts">
  import Paper from '../Paper/Paper.svelte';
  import type { AnchorOrigin, MenuProps } from './Menu.types';

  // Props
  type T = $$Generic<HTMLMenuElement>;
  type $$Props = MenuProps<T>;

  export let open = false;
  export let anchorOrigin: AnchorOrigin = 'bottomLeft';
  export let anchorRef: Element | undefined = undefined;

  // Local Vars
  let menuRef: HTMLMenuElement;
  let elevation = $$restProps.elevation || 16;
  $: surfaceClasses = `mdc-menu-surface ${open && 'mdc-menu-surface--open'}`;
  $: anchorPos = anchorRef && anchorRef.getClientRects()[0];
  $: console.log(
    'anchor non bounded: ',
    anchorOrigin,
    ' ',
    anchorRef && anchorRef.getClientRects()
  );

  $: console.log(
    'anchor bounded: ',
    anchorOrigin,
    ' ',
    anchorRef && anchorRef.getBoundingClientRect()
  );
</script>

<Paper
  bind:ref={menuRef}
  {elevation}
  class="menu mdc-menu {surfaceClasses} {anchorOrigin}"
  style="--anchor-bottom: {anchorPos && anchorPos.bottom}px; --anchor-left: {anchorPos &&
    anchorPos.left}px; --anchor-top: {anchorPos && anchorPos.top}px; --anchor-right: {anchorPos &&
    anchorPos.right}px;"
>
  <slot />
</Paper>

<style lang="scss" global>
  @use '@material/menu-surface/mdc-menu-surface';
  @use '@material/menu/mdc-menu';

  .menu.bottomLeft {
    top: var(--anchor-bottom);
    left: var(--anchor-left);
  }

  .menu.bottomRight {
    top: var(--anchor-bottom);
    left: var(--anchor-right);
  }

  .menu.topLeft {
    bottom: calc(var(--anchor-top) + 9%);
    left: var(--anchor-left);
  }

  .menu.topRight {
    bottom: calc(var(--anchor-top) + 9%);
    left: var(--anchor-right);
  }
</style>
