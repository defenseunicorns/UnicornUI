<script lang="ts">
  import { onMount } from 'svelte';
  import Box from '$lib/Box/box.svelte';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import type { ButtonVariant, ButtonColor, ButtonShape, ButtonProps } from './Button.types';

  // Props
  export let color: ButtonColor = 'primary';
  export let shape: ButtonShape = 'squared';
  export let variant: ButtonVariant = 'text';

  type $$Props = ButtonProps;

  // Local Vars
  let buttonElement: HTMLButtonElement | HTMLAnchorElement;

  // Lifecycle
  onMount((): void => {
    if (buttonElement) {
      new MDCRipple(buttonElement);
    }
  });

  function getIconClass(): string {
    let classes: string[] = [];
    if ($$slots.leadingIcon) {
      classes.push('mdc-button--icon-leading');
    }
    if ($$slots.trailingIcon) {
      classes.push('mdc-button--icon-leading');
    }
    return classes.join(' ');
  }
</script>

<Box
  {...$$restProps}
  bind:ref={buttonElement}
  eventComponent={current_component}
  element={$$restProps.href ? 'a' : 'button'}
  class={`button mdc-button ${getIconClass()} ${variant} ${color} ${shape} ${
    $$restProps.class || ''
  }`}
>
  <span class="button-ripple mdc-button__ripple" />
  <span class="button-focus-ring mdc-button__focus-ring" />
  <slot name="leadingIcon" />
  <span class="button-label mdc-button__label"><slot>{`${variant} button`}</slot></span>
  <slot name="trailingIcon" />
</Box>

<style lang="scss" global>
  @import '@material/button/mdc-button';
  .outlined {
    @extend .mdc-button--outlined;
    @include mdc-button-outline-color(var(--mdc-theme-primary, $mdc-theme-primary));
  }
  .raised {
    @extend .mdc-button--raised;
  }
  .flat {
    @extend .mdc-button--unelevated;
  }

  .rounded {
    @include mdc-button-shape-radius(100px);
  }

  .mdc-button.secondary,
  .mdc-button.outlined.secondary {
    @include mdc-button-ink-color(var(--mdc-theme-secondary, $mdc-theme-secondary));
    @include mdc-button-ripple-states(var(--mdc-theme-secondary, $mdc-theme-secondary));
  }
  .mdc-button.outlined.secondary {
    @include mdc-button-outline-color(var(--mdc-theme-secondary, $mdc-theme-secondary));
  }
  .mdc-button.raised.secondary,
  .mdc-button.flat.secondary {
    @include mdc-button-filled-accessible(var(--mdc-theme-secondary, $mdc-theme-secondary));
    color: var(--mdc-theme-on-secondary) !important;
  }
</style>
