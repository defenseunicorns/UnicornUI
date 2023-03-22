<script lang="ts">
  import Box from '../Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { OverlayProps } from './Overlay.types';

  type T = $$Generic<EventTarget>;
  type $$Props = OverlayProps<T>;

  //Props
  export let elevation = 0;
  export let ref: Node | undefined = undefined;

  // Opacity map based on https://m2.material.io/design/color/dark-theme.html#properties
  const opacityMap: Record<string, number> = {
    0: 0,
    1: 0.05,
    2: 0.07,
    3: 0.08,
    4: 0.09,
    5: 0.1,
    6: 0.11,
    7: 0.115,
    8: 0.12,
    9: 0.125,
    10: 0.13,
    11: 0.135,
    12: 0.14,
    13: 0.1425,
    14: 0.145,
    15: 0.1474,
    16: 0.15,
    17: 0.15125,
    18: 0.1525,
    19: 0.15375,
    20: 0.155,
    21: 0.15625,
    22: 0.1575,
    23: 0.15875,
    24: 0.16
  };

  // functions
  function getOpacityPercentage(elevation: number) {
    return opacityMap[elevation.toString()] || 0;
  }

  $: width = (ref && `${ref.parentElement?.clientWidth}px`) || 0;
  $: height = (ref && `${ref.parentElement?.clientHeight}px`) || 0;
</script>

<Box
  element="div"
  bind:ref
  eventComponent={current_component}
  {...$$restProps}
  class="elevation-overlay mdc-elevation-overlay {$$restProps.class || ''}"
  style="--parent-width:{width};--parent-height:{height};--overlay-opacity:{getOpacityPercentage(
    elevation
  )};{$$restProps.style || ''}"
/>

<style lang="scss" global>
  .elevation-overlay.mdc-elevation-overlay {
    position: absolute;
    height: var(--parent-height);
    width: var(--parent-width);
    left: 0;
    top: 0;
    opacity: var(--overlay-opacity);
  }
  // Light theme relies solely on box-shadow and does not need an overlay
  html[data-theme='light'] .elevation-overlay.mdc-elevation-overlay {
    display: none;
  }
</style>
