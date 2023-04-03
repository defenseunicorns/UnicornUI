<script lang="ts">
  import { onMount } from 'svelte';
  import Box from '../Box/box.svelte';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import type { ButtonVariant, ButtonShape, ButtonProps } from './Button.types';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';

  // Props
  export let backgroundColor: ThemeColors = '';
  export let textColor: ThemeColors = '';
  export let color: ThemeColors = 'primary';
  export let shape: ButtonShape = 'squared';
  export let variant: ButtonVariant = 'text';
  export let ref: Node | undefined = undefined;

  type $$Props = ButtonProps;

  // Lifecycle
  onMount((): void => {
    if (ref) {
      new MDCRipple(ref as HTMLElement);
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

  // Override the color prop --on-color if textColor is defined
  $: computedTextColor = (textColor && makeThemeColor(textColor)) || makeThemeColor(`on-${color}`);
  // Override the backgroundColor prop --color if backgroundColor is defined
  $: computedBackgoundColor =
    (backgroundColor && makeThemeColor(backgroundColor)) || makeThemeColor(color);
  $: computedStyle = `--bg-color:${computedBackgoundColor};--text-color:${computedTextColor};${
    $$restProps.style || ''
  }`;
</script>

<Box
  bind:ref
  eventComponent={current_component}
  element={$$restProps.href ? 'a' : 'button'}
  {...$$restProps}
  class={`button mdc-button ${getIconClass()} ${variant} ${shape} ${$$restProps.class || ''}`}
  style={computedStyle}
>
  <span class="button-ripple mdc-button__ripple" />
  <span class="button-focus-ring mdc-button__focus-ring" />
  <slot name="leadingIcon" />
  <span class="button-label mdc-button__label"><slot>{`${variant} button`}</slot></span>
  <slot name="trailingIcon" />
</Box>

<style lang="scss" global>
  @import '@material/button/mdc-button';

  .mdc-button:not(:disabled) {
    color: var(--bg-color);
  }
  .mdc-button.outlined {
    @extend .mdc-button--outlined;
  }
  .mdc-button.outlined:not(:disabled) {
    color: var(--bg-color);
  }
  .mdc-button.raised {
    @extend .mdc-button--raised;
  }
  .mdc-button.raised:not(:disabled) {
    background-color: var(--bg-color);
  }
  .mdc-button.flat {
    @extend .mdc-button--unelevated;
  }
  .mdc-button.flat:not(:disabled) {
    background-color: var(--bg-color);
  }

  .mdc-button.rounded {
    @include mdc-button-shape-radius(100px);
  }

  .mdc-button > .button-label,
  mdc-button.outlined > .button-label {
    color: var(--bg-color);
  }
  .mdc-button.outlined > .mdc-button__ripple {
    border-color: var(--bg-color);
  }
  .mdc-button.raised > .button-label,
  .mdc-button.flat > .button-label {
    color: var(--text-color);
  }
  .button.mdc-button:not(.flat):not(.raised) > .mdc-button__ripple::before,
  .button.mdc-button:not(.flat):not(.raised) > .mdc-button__ripple::after {
    color: var(--bg-color);
    background-color: var(--bg-color);
  }

  .button.mdc-button.flat > .mdc-button__ripple::before,
  .button.mdc-button.flat > .mdc-button__ripple::after,
  .button.mdc-button.raised > .mdc-button__ripple::before,
  .button.mdc-button.raised > .mdc-button__ripple::after {
    color: var(--text-color);
    background-color: var(--text-color);
  }

  .button.mdc-button:disabled,
  .button.mdc-button:disabled > .button-label {
    color: var(--on-disabled) !important;
    background-color: var(--disabled) !important;
    box-shadow: unset;
  }
  .button.mdc-button:disabled > .mdc-button__ripple {
    border-color: black !important;
  }
  .button.mdc-button:disabled > .mdc-button__ripple::before,
  .button.mdc-button:disabled > .mdc-button__ripple::after {
    color: var(--on-disabled);
    background-color: var(--on-disabled);
  }
</style>
