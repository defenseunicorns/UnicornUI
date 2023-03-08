<script lang="ts">
  import Box from '../Box/box.svelte';
  import type { PaperProps, PaperVariant } from './Paper.types';
  import { current_component } from 'svelte/internal';

  type T = $$Generic<EventTarget>;
  type $$Props = PaperProps<T>;

  export let variant: PaperVariant | undefined = 'elevation';
  export let elevation = 0;
  export let square: boolean | undefined = false;

  $: additionalClasses = `${square ? 'square' : ''} mdc-elevation-${variant} ${
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
</Box>

<style lang="scss" global>
  @use '@material/elevation/mdc-elevation';

  .paper {
    border-radius: 4px;
  }

  .square {
    border-radius: 0;
  }

  .mdc-elevation-outlined {
    border: 1px solid var(--on-surface);
  }
</style>
