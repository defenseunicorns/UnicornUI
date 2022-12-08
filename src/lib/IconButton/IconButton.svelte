<script lang="ts">
  import { onMount } from 'svelte';
  import Box from '$lib/Box/box.svelte';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import type { IconButtonColor, IconButtonProps } from './IconButton.types';

  // Props
  export let toggleable = false;
  export let toggled = false;

  export let iconClass = '';
  export let iconContent = '';
  export let iconColor: IconButtonColor = 'inherit';

  export let toggledIconClass = '';
  export let toggledIconContent = '';
  export let toggledIconColor: IconButtonColor = 'inherit';

  type $$Props = IconButtonProps;

  // Vars
  let disabled = false;
  let mdcIconButtonTarget: HTMLButtonElement | HTMLAnchorElement;

  // Lifecycle
  onMount((): void => {
    if (mdcIconButtonTarget) {
      const iconButtonRipple = new MDCRipple(mdcIconButtonTarget);
      iconButtonRipple.unbounded = true;
    }
    disabled = $$restProps.disabled;
  });

  // Watch
  $: showToggle = toggleable && toggled;
  $: toggledColor = showToggle ? toggledIconColor : iconColor;
  $: currentColor = disabled ? '' : toggledColor;
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
  bind:ref={mdcIconButtonTarget}
  element={$$restProps.href ? 'a' : 'button'}
  eventComponent={current_component}
  aria-pressed={ariaPressed}
  class="icon-button mdc-icon-button {currentColor} {constructContainerClass()}"
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
  }
  .mdc-icon-button.primary {
    @include mdc-icon-button-ink-color(var(--mdc-theme-primary, $mdc-theme-primary));
  }
  .mdc-icon-button.secondary {
    @include mdc-icon-button-ink-color(var(--mdc-theme-secondary, $mdc-theme-secondary));
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
