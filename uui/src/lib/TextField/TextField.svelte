<script lang="ts">
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import type { TextFieldProps, TextFieldVariant } from './TextField.types';

  //Props
  type $$Props = TextFieldProps;
  export let variant: TextFieldVariant = 'outlined';
  export let label = 'test';
  export let hoverColor: ThemeColors = 'inherit';
  export let color: ThemeColors = 'inherit';

  // locals
  let input: HTMLInputElement;
  let focused = '';
  let notched = '';
  let floating = '';

  // functions
  function clickAway(evt: any) {
    if (document.activeElement !== evt.target) {
      focused = '';
      if (input.value === '') {
        notched = '';
        floating = '';
      }
    }
  }

  $: computedColor = makeThemeColor(color);
  $: computedHoverColor = makeThemeColor(hoverColor);
</script>

<svelte:window on:click={clickAway} />

<div
  class={`mdc-text-field text-field-${variant} ${focused}`}
  style="--color: {computedColor}; --hover-color: {computedHoverColor};"
>
  <slot name="leadingIcon" />
  <input
    bind:this={input}
    on:focus={() => {
      focused = 'focused';
      notched = 'notched';
      floating = 'floating';
    }}
    type="text"
    class="mdc-text-field__input"
    aria-labelledby="textfield-label"
  />
  <slot name="trailingIcon" />
  <span class={`mdc-notched-outline mdc-notched-outline--upgraded ${notched}`}>
    <span class="mdc-notched-outline__leading" />
    <span class="mdc-notched-outline__notch">
      <label class={`mdc-floating-label ${floating}`} for="text-field-outlined" id="textfield-label"
        >{label}</label
      >
    </span>
    <span class="mdc-notched-outline__trailing" />
  </span>
</div>

<style lang="scss">
  @import '@material/textfield/mdc-text-field';

  .text-field-outlined {
    @extend .mdc-text-field--outlined;
    @include mdc-text-field-outline-color(var(--color));

    // Placeholder text non-focused
    /* @include mdc-text-field-label-color('green'); */

    // Typed input text
    @include mdc-text-field-ink-color(var(--hover-color));
    @include mdc-text-field-hover-outline-color(var(--hover-color));
    @include mdc-text-field-placeholder-color(var(--color));
    @include mdc-text-field-focused-outline-color(var(--color));
    @include mdc-text-field-caret-color(var(--color));
  }

  .mdc-floating-label {
    color: var(--color) !important;
  }

  .mdc-text-field.focused {
    @extend .mdc-text-field--focused;
  }

  .mdc-notched-outline.notched {
    @extend .mdc-notched-outline--notched;
  }

  .mdc-floating-label.floating {
    @extend .mdc-floating-label--float-above;
  }
</style>
