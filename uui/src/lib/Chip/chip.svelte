<script lang="ts">
  import Box from '../Box/box.svelte';
  import Typography from '../Typography/typography.svelte';
  import { MDCRipple } from '@material/ripple';
  import { current_component, onMount } from 'svelte/internal';
  import type { ChipColor, ChipProps, ChipVariant } from './chip.types';

  let buttonElement: HTMLButtonElement | HTMLAnchorElement;

  type T = $$Generic<EventTarget>;
  type $$Props = ChipProps<T>;

  export let variant: ChipVariant = 'filled';
  export let color: ChipColor = 'default';

  onMount((): void => {
    if (buttonElement) {
      new MDCRipple(buttonElement);
    }
  });
</script>

<span class="chip-wrapper chip-{variant}-{color}" role="row">
  <span
    class="mdc-evolution-chip__cell mdc-evolution-chip--with-primary-graphic mdc-evolution-chip__cell--primary"
    role="gridcell"
  >
    <slot name="primary" />
    <Box
      bind:ref={buttonElement}
      element={$$restProps.href ? 'a' : 'button'}
      eventComponent={current_component}
      tabindex={0}
      {...$$restProps}
      class={` mdc-evolution-chip__action mdc-evolution-chip__action--primary ${
        $$restProps.class || ''
      }`}
      disabled={$$restProps.disabled == undefined ? !$$restProps.clickable : $$restProps.disabled}
    >
      <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary" />
      <span class="mdc-evolution-chip__text-label" />
      <Typography variant="body2"><slot /></Typography>
    </Box>
  </span>
  <slot name="trailing" />
</span>

<style lang="scss" global>
  @use '@material/chips' as chips;
  @use '@material/chips/styles' as styles;
  .chip-wrapper {
    @extend .mdc-evolution-chip;
  }
  .chip-filled-default {
    @include chips.ripple-color(
      var(
        --mdc-chip-filled-ripple-color,
        var(--mdc-chip-color, var(--uui-default-colors-on-default))
      )
    );
    background-color: var(--mdc-chip-background-color, var(--uui-default-colors-default));
    color: var(--mdc-chip-color, var(--uui-default-colors-on-default));
  }
  .chip-outlined-default {
    @include chips.ripple-color(
      var(
        --mdc-chip-outlined-ripple-color,
        var(--mdc-chip-background-color, var(--uui-default-colors-on-default))
      )
    );

    background-color: transparent;
    color: var(--mdc-chip-background-color, var(--uuid-default-colors-on-default));
    border-color: var(--mdc-chip-background-color, var(--uuid-default-colors-ondefault));
    border-width: 1px;
    border-style: solid;
  }
  .chip-outlined-primary {
    @extend .chip-outlined-default;
    @include chips.ripple-color(var(--mdc-theme-primary));
    color: var(--mdc-theme-primary);
    border-color: var(--mdc-theme-primary);
  }
  .chip-filled-primary {
    @include chips.ripple-color(var(--mdc-theme-on-primary));
    background-color: var(--mdc-theme-primary);
    color: var(--mdc-theme-on-primary);
  }
  .chip-outlined-secondary {
    @extend .chip-outlined-default;
    @include chips.ripple-color(var(--mdc-theme-secondary));
    color: var(--mdc-theme-secondary);
    border-color: var(--mdc-theme-secondary);
  }
  .chip-filled-secondary {
    @include chips.ripple-color(var(--mdc-theme-on-secondary));
    background-color: var(--mdc-theme-secondary);
    color: var(--mdc-theme-on-secondary);
  }
  .chip-outlined-error {
    @extend .chip-outlined-default;
    @include chips.ripple-color(var(--mdc-theme-error, var(--uui-default-colors-error)));
    color: var(--mdc-theme-error, var(--uui-default-colors-error));
    border-color: var(--mdc-theme-error, var(--uui-default-colors-error));
  }
  .chip-filled-error {
    @include chips.ripple-color(var(--mdc-theme-on-error, var(--uui-default-colors-on-error)));
    background-color: var(--mdc-theme-error, var(--uui-default-colors-error));
    color: var(--mdc-theme-on-error, var(--uui-default-colors-on-error));
  }
  .chip-outlined-warning {
    @extend .chip-outlined-default;
    @include chips.ripple-color(var(--mdc-theme-warning, var(--uui-default-colors-warning)));
    color: var(--mdc-theme-warning, var(--uui-default-colors-warning));
    border-color: var(--mdc-theme-warning, var(--uui-default-colors-warning));
  }
  .chip-filled-warning {
    @include chips.ripple-color(var(--mdc-theme-on-warning, --uui-default-colors-on-warning));
    background-color: var(--mdc-theme-warning, --uui-default-colors-warning);
    color: var(--mdc-theme-on-warning, --uui-default-colors-on-warning);
  }
  .chip-outlined-success {
    @extend .chip-outlined-default;
    @include chips.ripple-color(var(--mdc-theme-success, var(--uui-default-colors-success)));
    color: var(--mdc-theme-success, var(--uui-default-colors-success));
    border-color: var(--mdc-theme-success, var(--uui-default-colors-success));
  }
  .chip-filled-success {
    @include chips.ripple-color(var(--mdc-theme-on-success, var(--uui-default-colors-on-success)));
    background-color: var(--mdc-theme-success, var(--uui-default-colors-success));
    color: var(--mdc-theme-on-success, var(--uui-default-colors-on-success));
  }
  .chip-outlined-info {
    @extend .chip-outlined-default;
    @include chips.ripple-color(var(--mdc-theme-info, var(--uui-default-colors-info)));
    color: var(--mdc-theme-info, var(--uui-default-colors-info));
    border-color: var(--mdc-theme-info, var(--uui-default-colors-info));
  }
  .chip-filled-info {
    @include chips.ripple-color(var(--mdc-theme-on-info, var(--uui-default-colors-on-info)));
    background-color: var(--mdc-theme-info, var(--uui-default-colors-info));
    color: var(--mdc-theme-on-info, var(--uui-default-colors-on-info));
  }
</style>
