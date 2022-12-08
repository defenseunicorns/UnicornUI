<script lang="ts">
  import Box from '$lib/Box/box.svelte';
  import { current_component } from 'svelte/internal';
  import type { ChipIconProps } from './chip.types';

  type $$Props = ChipIconProps;
  let variant = $$props.slot;
</script>

<span
  class="chip-icon-wrapper mdc-evolution-chip__cell mdc-evolution-chip__cell--{variant}"
  role="gridcell"
>
  <Box
    element="button"
    eventComponent={current_component}
    class="mdc-evolution-chip__action mdc-evolution-chip__action--{variant} chip-{variant}"
    type="button"
    tabindex={-1}
    {...$$restProps}
    disabled={!$$props.clickable}
  >
    <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--{variant}" />
    <span class="mdc-evolution-chip__icon mdc-evolution-chip__icon--{variant} chip-icon">
      <slot />
    </span>
  </Box>
</span>

<style lang="scss" global>
  .chip-trailing {
    padding-right: 4px !important;
  }
  .chip-primary {
    padding-left: 4px !important;
    padding-right: 0px !important;
  }
</style>
