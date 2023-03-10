<script lang="ts">
  import Box from '../Box/box.svelte';
  import type { PaperProps, PaperThemeMode, PaperVariant } from './Paper.types';
  import { current_component } from 'svelte/internal';

  type T = $$Generic<EventTarget>;
  type $$Props = PaperProps<T>;

  // Props
  export let variant: PaperVariant | undefined = 'elevation';
  export let elevation = 0;
  export let square: boolean | undefined = false;
  export let themeMode: PaperThemeMode = 'light';

  // functions
  function getOpacityPercentage(elevation: number) {
    let opacity = `.${elevation}`;
    if (elevation < 10) {
      opacity = `.0${elevation}`;
    }

    return opacity;
  }

  // Reactive Variables
  $: linearGradient = `linear-gradient(180deg, rgba(255, 255, 255, 
  ${getOpacityPercentage(elevation)}) 0%, rgba(255, 255, 255, 
  ${getOpacityPercentage(elevation)}) 100%, #0D133D)`;

  $: elevation = variant === 'outlined' ? 0 : elevation;
  $: backgroundColor = themeMode === 'dark' ? linearGradient : '';
  $: additionalClasses = `${!square && 'paper-rounded'} mdc-elevation-${variant} ${
    $$restProps.class || ''
  }`;
</script>

<Box
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="mdc-elevation--z{elevation} mdc-elevation-transition {additionalClasses}"
  style="background-image: {backgroundColor}"
>
  <slot />
</Box>

<style lang="scss" global>
  @use '@material/elevation/mdc-elevation';

  .paper-rounded {
    border-radius: 4px;
  }

  .mdc-elevation-outlined {
    border: 1px solid var(--on-surface);
  }
</style>
