<script lang="ts">
  import Box from '../Box/box.svelte';
  import type { PaperProps, PaperVariant } from './Paper.types';
  import { current_component } from 'svelte/internal';
  import Overlay from './Overlay.svelte';

  type T = $$Generic<EventTarget>;
  type $$Props = PaperProps<T>;

  // Props
  export let variant: PaperVariant = 'elevation';
  export let elevation = 0;
  export let square = false;

  $: elevation = variant === 'outlined' ? 0 : elevation;
  $: additionalClasses = `${!square && 'paper-rounded'} mdc-elevation-${variant} ${
    $$restProps.class || ''
  }`;
</script>

<Box
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="paper mdc-elevation--z{elevation} mdc-elevation-transition {additionalClasses}"
>
  <slot />
  <Overlay {elevation} />
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
