<script lang="ts">
  import { onMount } from 'svelte';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import type { TextFieldProps, TextFieldVariant } from './TextField.types';

  //Props
  type $$Props = TextFieldProps;
  export let variant: TextFieldVariant = 'outlined';
  export let label = '';
  export let color: ThemeColors = 'inherit';
  export let onSurfaceColor: ThemeColors = 'inherit';
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
  let invalid = false;

  // functions
  function clickAway(evt: any) {
    if (evt.target !== inputRef && !$$restProps.placeholder) {
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

  function getIconClass(): string {
    let classes: string[] = [];
    if ($$slots.leadingIcon) {
      classes.push('mdc-text-field--with-leading-icon');
    }
    if ($$slots.trailingIcon) {
      classes.push('mdc-text-field--with-trailing-icon');
    }
    return classes.join(' ');
  }

  function getIconSlot() {
    let tag = '';
    if ($$slots.leadingIcon) {
      tag = '-leading';
    }
    if ($$slots.trailingIcon) {
      tag = '-trailing';
    }
    return tag;
  }

  onMount(() => {
    inputRef.oninvalid = (evt: Event) => {
      evt.preventDefault();
      invalid = true;
    };
    if ($$restProps.placeholder) {
      setFocusStates();
    }
  });

  $: computedColor = makeThemeColor(color);
  $: computedOnSurfaceColor = makeThemeColor(onSurfaceColor);
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

<div
  class="text-field-conainer"
  style="--color: {computedColor}; --on-surface-color: {computedOnSurfaceColor};"
>
  <div
    class={`mdc-text-field text-field mdc-text-field--${variant} ${focused} ${getIconClass()}`}
    class:mdc-text-field--disabled={$$restProps.disabled}
    class:mdc-text-field--invalid={invalid}
  >
    <slot name="leadingIcon" />
    <input
      bind:this={inputRef}
      bind:value={inputValue}
      on:focus={setFocusStates}
      on:input={() => {
        invalid = false;
      }}
      type="text"
      id={`text-field-${variant}${getIconSlot()}`}
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
          class:required={$$restProps.required}
          for={`text-field-outlined${getIconSlot()}`}
          id="textfield-label"
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

<style lang="scss" global>
  @import '@material/textfield/mdc-text-field';

  .text-field-container {
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .mdc-text-field,
  .mdc-text-field--focused {
    @include mdc-text-field-ink-color(var(--on-surface-color));
    @include mdc-text-field-hover-outline-color(var(--on-surface-color));
    @include mdc-text-field-placeholder-color(var(--on-surface-color));
    @include mdc-text-field-outline-color(var(--color));
    @include mdc-text-field-caret-color(var(--on-surface-color));
  }

  .mdc-text-field--disabled,
  .mdc-text-field--disabled .mdc-floating-label {
    @include mdc-text-field-ink-color(var(--mdc-theme-disabled));
    @include mdc-text-field-hover-outline-color(var(--mdc-theme-disabled));
    @include mdc-text-field-placeholder-color(var(--mdc-theme-disabled));
    @include mdc-text-field-focused-outline-color(var(--mdc-theme-disabled));
    @include mdc-text-field-caret-color(var(--mdc-theme-disabled));
  }

  .mdc-text-field--invalid {
    @include mdc-text-field-ink-color(var(--mdc-theme-error));
    @include mdc-text-field-hover-outline-color(var(--mdc-theme-error));
    @include mdc-text-field-placeholder-color(var(--mdc-theme-error));
    @include mdc-text-field-focused-outline-color(var(--mdc-theme-error));
    @include mdc-text-field-caret-color(var(--mdc-theme-error));
  }

  .mdc-text-field--outlined.mdc-text-field.focused:not(.mdc-text-field--disabled) {
    @include mdc-notched-outline-color(var(--color));
  }

  .mdc-text-field--invalid.mdc-text-field.focused:not(.mdc-text-field--disabled) {
    @include mdc-notched-outline-color(var(--mdc-theme-error));
  }

  .required {
    @extend .mdc-floating-label--required;
  }

  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text,
  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-character-counter {
    color: var(--on-surface-color);
  }

  .mdc-text-field--outlined {
    @include mdc-text-field-outline-color(var(--color));
  }

  .mdc-text-field.focused {
    @extend .mdc-text-field--focused;
  }

  .mdc-notched-outline.notched {
    @extend .mdc-notched-outline--notched;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label,
  .mdc-text-field.focused:not(.mdc-text-field--disabled) .mdc-floating-label,
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: var(--color);
  }

  .mdc-text-field--invalid .mdc-notched-outline .mdc-notched-outline__notch .mdc-floating-label {
    color: var(--mdc-theme-error);
  }

  .mdc-floating-label.floating {
    @extend .mdc-floating-label--float-above;
  }
</style>
