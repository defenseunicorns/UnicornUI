<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { OverlayProps } from './Overlay.types';

  type T = $$Generic<EventTarget>;
  type $$Props = OverlayProps<T>;

  //Props
  export let elevation = 0;

  // functions
  function getOpacityPercentage(elevation: number) {
    let opacity = `.${elevation}`;
    if (elevation < 10) {
      opacity = `.0${elevation}`;
    }

    return opacity;
  }
</script>

<Box
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="mdc-elevation-overlay"
  style="--elevation: {getOpacityPercentage(elevation)}"
/>

<style lang="scss" global>
  .mdc-elevation-overlay {
    height: inherit;
    width: inherit;
    opacity: var(--mdc-elevation-overlay-opacity, var(--elevation)) !important;
  }
</style>
