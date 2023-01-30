<script lang="ts">
  import { onMount } from 'svelte';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import type { TextFieldProps, TextFieldVariant } from './TextField.types';

  //Props
  type $$Props = TextFieldProps;
  export let variant: TextFieldVariant = 'outlined';
  export let label = '';
  export let hoverColor: ThemeColors = 'inherit';
  export let color: ThemeColors = 'inherit';
  export let helperText = '';
  export let characterCounter = false;

  // locals
  let inputRef: HTMLInputElement;
  let labelRef: HTMLLabelElement;
  let inputValue = '';
  let focused = '';
  let notched = '';
  let floating = '';
  let charCount = '';
  let notchWidth = '';

  // functions
  function clickAway(evt: any) {
    if (document.activeElement !== evt.target && !$$restProps.placeholder) {
      focused = '';
      if (inputRef.value === '') {
        notched = '';
        floating = '';
      }
    }
  }

  function setFocusStates() {
    focused = 'focused';
    notched = 'notched';
    floating = 'floating';
  }

  onMount(() => {
    if ($$restProps.placeholder) {
      setFocusStates();
    }
  });

  $: computedColor = makeThemeColor(color);
  $: computedHoverColor = makeThemeColor(hoverColor);
  $: if (inputRef && characterCounter) {
    if ($$restProps.maxlength) {
      charCount = `${inputRef.value.length} / ${$$restProps.maxlength}`;
    }
  }

  $: if (labelRef) {
    if (focused === 'focused') {
      notchWidth = `${labelRef.offsetWidth * 0.9}px`;
    } else {
      notchWidth = 'auto';
    }
  }
</script>

<svelte:window on:click={clickAway} />

<div class="text-field-conainer">
  <div
    class={`mdc-text-field text-field-${variant} ${focused}`}
    class:mdc-text-field--disabled={$$restProps.disabled}
    style="--color: {computedColor}; --hover-color: {computedHoverColor};"
  >
    <slot name="leadingIcon" />
    <input
      bind:this={inputRef}
      bind:value={inputValue}
      on:focus={setFocusStates}
      type="text"
      class="mdc-text-field__input"
      aria-labelledby="textfield-label"
      {...$$restProps}
    />
    <slot name="trailingIcon" />
    <span class={`mdc-notched-outline mdc-notched-outline--upgraded ${notched}`}>
      <span class="mdc-notched-outline__leading" />
      <span class="mdc-notched-outline__notch" style={`padding: 0; width: ${notchWidth}`}>
        <label
          bind:this={labelRef}
          class={`mdc-floating-label ${floating}`}
          for="text-field-outlined"
          id="textfield-label"
          class:required={$$restProps.required}
          >{label}
        </label>
      </span>
      <span class="mdc-notched-outline__trailing" />
    </span>
  </div>
  <div class="mdc-text-field-helper-line">
    <p
      class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg"
    >
      {helperText}
    </p>
    <div class="mdc-text-field-character-counter">{charCount}</div>
  </div>
</div>

<style lang="scss">
  @import '@material/textfield/mdc-text-field';

  .text-field-container {
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .required {
    @extend .mdc-floating-label--required;
  }

  .mdc-text-field-helper-text {
    color: var(--color) !important;
  }

  .mdc-text-field-character-counter {
    color: var(--color) !important;
  }

  .mdc-text-field {
    // Typed input text
    @include mdc-text-field-ink-color(var(--hover-color));
    @include mdc-text-field-hover-outline-color(var(--hover-color));
    @include mdc-text-field-placeholder-color(var(--color));
    @include mdc-text-field-focused-outline-color(var(--color));
    @include mdc-text-field-caret-color(var(--color));

    //disabled
    @include mdc-text-field-disabled-label-color(red);
  }

  .text-field-outlined {
    @extend .mdc-text-field--outlined;
    @include mdc-text-field-outline-color(var(--color));
  }

  .mdc-text-field--disabled .mdc-floating-label {
    color: var(--mdc-theme-text-disabled-on-dark) !important;
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
