<script lang="ts">
  import { onMount } from 'svelte';
  import Box from '../Box/box.svelte';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import type { IconButtonProps } from './IconButton.types';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';

  // Props
  export let toggleable = false;
  export let toggled = false;

  export let iconClass = '';
  export let iconContent = '';
  export let iconColor: ThemeColors = 'inherit';

  export let toggledIconClass = '';
  export let toggledIconContent = '';
  export let toggledIconColor: ThemeColors = 'inherit';
  export let ref: HTMLButtonElement | HTMLAnchorElement | undefined;

  type $$Props = IconButtonProps;

  // Vars
  let disabled = false;

  // Lifecycle
  onMount((): void => {
    if (ref) {
      const iconButtonRipple = new MDCRipple(ref);
      iconButtonRipple.unbounded = true;
    }
    disabled = $$restProps.disabled;
  });

  // Watch
  $: showToggle = toggleable && toggled;
  $: toggledColor = showToggle ? toggledIconColor : iconColor;
  $: currentColor = disabled ? 'disabled' : toggledColor;
  $: ariaPressed = toggleable ? showToggle : null;
  $: constructContainerClass = (): string => {
    let classes: string[] = [];
    if (showToggle) classes.push('mdc-icon-button--on');
    if ($$restProps.class) classes.push($$restProps.class);

    return classes.join(' ');
  };
</script>

<Box
  {...$$restProps}
  bind:ref
  element={$$restProps.href ? 'a' : 'button'}
  eventComponent={current_component}
  aria-pressed={ariaPressed}
  class="icon-button mdc-icon-button {currentColor} {constructContainerClass()}"
  style="--iconColor:{makeThemeColor(currentColor)};--disabled-background:{makeThemeColor(
    'on-disabled'
  )};{$$restProps.style}"
>
  <div class="mdc-icon-button__ripple" />
  <span class="mdc-icon-button__focus-ring" />
  <i
    class={`icon-button-icon mdc-icon-button__icon mdc-icon-button__icon--on ${
      toggledIconClass || iconClass
    }`}
  >
    <slot name="toggledIcon">
      {toggledIconContent || iconContent}
    </slot>
  </i>
  <i class={`icon-button-icon mdc-icon-button__icon ${iconClass}`}>
    <slot name="icon">
      {iconContent}
    </slot>
  </i>
  <div class="mdc-icon-button__touch" />
</Box>

<style lang="scss" global>
  @import '@material/icon-button/mdc-icon-button';

  .mdc-icon-button {
    width: 40px !important;
    height: 40px !important;
    padding: 8px !important;
    display: flex !important;
    border-radius: 100% !important;
    align-items: center !important;
    justify-content: center !important;
    @include mdc-icon-button-ink-color(var(--iconColor));
  }

  .mdc-icon-button:disabled {
    background-color: var(--iconColor);
    @include mdc-icon-button-ink-color(var(--disabled-background));
  }

  .mdc-icon-button__icon {
    display: flex;
    align-content: center;
  }
  .mdc-icon-button--on .mdc-icon-button__icon--on {
    display: flex !important;
    align-content: center;
  }
</style>
