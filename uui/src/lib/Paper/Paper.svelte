<script lang="ts">
  import Box from '../Box/box.svelte';
  import type { PaperProps, PaperVariant } from './Paper.types';
  import { current_component } from 'svelte/internal';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';

  type T = $$Generic<EventTarget>;
  type $$Props = PaperProps<T>;

  // Props
  export let variant: PaperVariant = 'elevation';
  export let elevation = 0;
  export let square = false;
  export let ref: Node | undefined = undefined;
  export let color: ThemeColors = 'on-surface';
  export let backgroundColor: ThemeColors = 'surface';

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

  $: elevation = variant === 'outlined' ? 0 : elevation;
  $: additionalClasses = `${(!square && 'paper-rounded') || ''} mdc-elevation-${variant} ${
    $$restProps.class || ''
  }`;
</script>

<Box
  element="div"
  bind:ref
  eventComponent={current_component}
  {...$$restProps}
  style="--paper-color:{makeThemeColor(color)};--paper-bg-color:{makeThemeColor(
    backgroundColor
  )};--underlay-opacity:{getOpacityPercentage(elevation)};{$$restProps.style || ''}"
  class="paper mdc-elevation--z{elevation} mdc-elevation-transition {additionalClasses}"
>
  <slot />
</Box>

<style lang="scss" global>
  @use '@material/elevation/mdc-elevation';
  .paper {
    position: relative;
    background-color: var(--paper-bg-color);
    color: var(--paper-color);
  }
  html[data-theme='dark'] .paper {
    background-image: linear-gradient(
      rgba(255, 255, 255, var(--underlay-opacity)),
      rgba(255, 255, 255, var(--underlay-opacity))
    );
  }
  .paper-rounded {
    border-radius: 4px;
  }

  .mdc-elevation-outlined {
    border: 1px solid var(--paper-color);
  }
</style>
