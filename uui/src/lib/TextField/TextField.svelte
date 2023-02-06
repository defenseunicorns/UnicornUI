<script lang="ts">
  import { onMount } from 'svelte';
  import { current_component } from 'svelte/internal';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import type { TextFieldProps, TextFieldVariant } from './TextField.types';
  import { eventRedirection } from '../shared/utils/eventRedirection';

  //Props
  type $$Props = TextFieldProps;
  export let variant: TextFieldVariant = 'outlined';
  export let label = '';
  export let color: ThemeColors = 'inherit';
  export let onSurfaceColor: ThemeColors = 'inherit';
  export let helperText = '';
  export let characterCounter = false;
  export let value = '';

  // locals
  let inputRef: HTMLInputElement;
  let labelRef: HTMLLabelElement;
  let focused = '';
  let notched = '';
  let floating = '';
  let charCount = '';
  let notchWidth = '';
  let active = '';
  let invalid = false;

  // functions
  function clickAway(evt: any) {
    if (evt.target !== inputRef && !$$restProps.placeholder) {
      focused = '';
      active = '';
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
    active = 'active';
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

  onMount(() => {
    if (inputRef) {
      inputRef.oninvalid = (evt: Event) => {
        evt.preventDefault();
        invalid = true;
      };
    }
    if ($$restProps.placeholder) {
      setFocusStates();
    }
  });

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

  $: eventComponents = [current_component];
  $: computedColor = makeThemeColor(color);
  $: computedOnSurfaceColor = makeThemeColor(onSurfaceColor);
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
    class:mdc-ripple-upgraded--background-focused={variant === 'filled' && focused === 'focused'}
    class:mdc-text-field--no-label={label === ''}
  >
    <slot name="leadingIcon" />
    <input
      use:eventRedirection={eventComponents}
      bind:this={inputRef}
      bind:value
      on:focus={setFocusStates}
      on:input={() => {
        invalid = false;
      }}
      type="text"
      class="mdc-text-field__input"
      aria-labelledby="textfield-label"
      {...$$restProps}
    />
    <slot name="trailingIcon" />
    {#if variant === 'outlined'}<span
        class={`mdc-notched-outline mdc-notched-outline--upgraded ${notched}`}
        class:mdc-notched-outline--no-label={label === ''}
      >
        <span class="mdc-notched-outline__leading" />
        {#if label !== ''}<span
            class="mdc-notched-outline__notch"
            style={`padding: 0; width: ${notchWidth}`}
          >
            <label
              bind:this={labelRef}
              class={`mdc-floating-label ${floating}`}
              class:required={$$restProps.required}
              for={`text-field-${variant}`}
              id="textfield-label"
              >{label}
            </label>
          </span>{/if}
        <span class="mdc-notched-outline__trailing" />
      </span>{/if}
    {#if variant === 'filled'}
      {#if label !== ''}<label
          bind:this={labelRef}
          class={`mdc-floating-label ${floating}`}
          class:required={$$restProps.required}
          for={`text-field-${variant}`}
          id="textfield-label"
          >{label}
        </label>{/if}
      <div class={`mdc-line-ripple mdc-line-ripple--${active}`} />
    {/if}
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

  .required {
    @extend .mdc-floating-label--required;
  }

  .mdc-text-field.focused {
    @extend .mdc-text-field--focused;
  }

  .mdc-text-field,
  .mdc-text-field--focused {
    @include mdc-text-field-ink-color(var(--on-surface-color));
    @include mdc-text-field-hover-outline-color(var(--on-surface-color));
    @include mdc-text-field-placeholder-color(var(--on-surface-color));
    @include mdc-text-field-outline-color(var(--color));
    @include mdc-text-field-caret-color(var(--on-surface-color));
  }

  .mdc-text-field--disabled {
    @include mdc-text-field-ink-color(var(--disabled));
    @include mdc-text-field-hover-outline-color(var(--disabled));
    @include mdc-text-field-placeholder-color(var(--disabled));
    @include mdc-text-field-focused-outline-color(var(--disabled));
    @include mdc-text-field-caret-color(var(--disabled));
  }

  .mdc-text-field--invalid {
    @include mdc-text-field-ink-color(var(--error));
    @include mdc-text-field-focused-outline-color(var(--error));
  }

  // Label

  .mdc-floating-label.floating {
    @extend .mdc-floating-label--float-above;
  }

  .mdc-text-field.focused:not(.mdc-text-field--disabled) .mdc-floating-label,
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: var(--color);
  }

  .mdc-text-field--invalid.focused:not(.mdc-text-field--disabled) .mdc-floating-label,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: var(--error);
  }

  // Helper Line
  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text,
  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-character-counter {
    color: var(--on-surface-color);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-character-counter {
    color: var(--error);
  }

  // Variants

  // filled
  .mdc-text-field--filled {
    @include mdc-text-field-fill-color(lightgray);
  }
  .mdc-text-field--filled.focused {
    @include mdc-text-field-fill-color(gray);
  }

  // outlined
  .mdc-text-field--outlined {
    @include mdc-text-field-outline-color(var(--color));
  }
  .mdc-notched-outline.notched {
    @extend .mdc-notched-outline--notched;
  }
  .mdc-text-field--outlined.mdc-text-field.focused:not(.mdc-text-field--disabled) {
    @include mdc-notched-outline-color(var(--color));
  }

  .mdc-text-field--outlined.mdc-text-field--invalid.mdc-text-field:not(.mdc-text-field--disabled),
  .mdc-text-field--outlined.mdc-text-field--invalid.mdc-text-field.focused:not(
      .mdc-text-field--disabled
    ) {
    @include mdc-notched-outline-color(var(--error));
  }
</style>
