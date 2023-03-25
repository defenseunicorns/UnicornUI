<script lang="ts">
  import Box from '../Box/box.svelte';
  import type { PaperProps, PaperVariant } from './Paper.types';
  import { current_component } from 'svelte/internal';
  import Overlay from './Overlay.svelte';
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

  $: elevation = variant === 'outlined' ? 0 : elevation;
  $: additionalClasses = `${(!square && 'paper-rounded') || ''} mdc-elevation-${variant} ${
    $$restProps.class || ''
  }`;
  // Track z-index to ensure overlay doesn't cover content.
  $: paperZIndex = (ref && parseInt((ref as HTMLElement).style.zIndex)) || 0;
</script>

<Box
  element="div"
  bind:ref
  eventComponent={current_component}
  {...$$restProps}
  style="--paper-z-index:{paperZIndex};--paper-color:{makeThemeColor(
    color
  )};--paper-bg-color:{makeThemeColor(backgroundColor)};{$$restProps.style || ''}"
  class="paper mdc-elevation--z{elevation} mdc-elevation-transition {additionalClasses}"
>
  <slot />
  <Overlay {elevation} />
</Box>

<style lang="scss" global>
  @use '@material/elevation/mdc-elevation';
  .paper {
    position: relative;
    background-color: var(--paper-bg-color);
    color: var(--paper-color);
    :not(:last-child) {
      // z-index of content should be one greater than paper and overlay.
      z-index: calc(var(--paper-z-index) + 1);
    }
  }
  .paper-rounded {
    border-radius: 4px;
  }

  .mdc-elevation-outlined {
    border: 1px solid var(--paper-color);
  }
</style>
