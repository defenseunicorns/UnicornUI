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
  export let label: string;
  export let color: ThemeColors = 'inherit';
  export let onSurfaceColor: ThemeColors = 'inherit';
  export let helperText = '';
  export let characterCounter = false;
  export let value = '';

  // locals
  let inputRef: HTMLInputElement;
  let labelRef: HTMLLabelElement;
  let focused = false;
  let notched = false;
  let floating = false;
  let invalid = false;
  let charCount = '';
  let notchWidth = '';
  let active = '';

  let inputProps: any = {};
  let containerProps: any = {};
  ({
    required: inputProps.required,
    disabled: inputProps.disabled,
    minlength: inputProps.minlength,
    maxlength: inputProps.maxlengh,
    pattern: inputProps.pattern,
    ...containerProps
  } = $$restProps);

  // functions
  function setFocusStates() {
    focused = true;
    notched = true;
    floating = true;
    active = 'active';
  }

  function clickAway(evt: MouseEvent) {
    if (evt.target !== inputRef && !$$restProps.placeholder) {
      focused = false;
      active = '';
      if (inputRef.value === '') {
        notched = false;
        floating = false;
      }
    }
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
    if (value) {
      setFocusStates();
    }
  });

  $: if (inputRef && characterCounter) {
    if ($$restProps.maxlength) {
      charCount = `${inputRef.value.length} / ${$$restProps.maxlength}`;
    }
  }

  $: if (labelRef) {
    if (focused) {
      notchWidth = `${labelRef.offsetWidth * 0.9}px`;
    } else {
      notchWidth = 'auto';
    }
  }

  $: eventComponents = [current_component];
  $: computedColor = makeThemeColor(color);
  $: computedOnSurfaceColor = makeThemeColor(onSurfaceColor);
  $: containerProps.style =
    containerProps.style +
    `;--color: ${computedColor}; --on-surface-color: ${computedOnSurfaceColor};`;
  $: containerProps.class = containerProps.class + ' text-field-container';
</script>

<svelte:window on:click={clickAway} />

<div {...containerProps}>
  <div
    class={`mdc-text-field text-field mdc-text-field--${variant} ${getIconClass()}`}
    class:mdc-text-field--disabled={$$restProps.disabled}
    class:mdc-text-field--invalid={invalid}
    class:mdc-text-field--focused={focused}
    class:mdc-ripple-upgraded--background-focused={variant === 'filled' && focused}
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
      {...inputProps}
    />
    {#if invalid}
      <span class:errorIcon={invalid} class="material-symbols-outlined mdc-text-field__icon">
        error
      </span>
    {:else}
      <slot name="trailingIcon" />
    {/if}
    {#if variant === 'outlined'}
      <span
        class={`mdc-notched-outline mdc-notched-outline--upgraded`}
        class:mdc-notched-outline--notched={notched}
      >
        <span class="mdc-notched-outline__leading" />
        <span class="mdc-notched-outline__notch" style={`padding: 0; width: ${notchWidth}`}>
          <label
            bind:this={labelRef}
            class={`mdc-floating-label`}
            class:mdc-floating-label--float-above={floating}
            class:mdc-floating-label--required={$$restProps.required}
            for={`text-field-${variant}`}
            id="textfield-label"
            >{label}
          </label>
        </span>
        <span class="mdc-notched-outline__trailing" />
      </span>
    {/if}
    {#if variant === 'filled'}
      <label
        bind:this={labelRef}
        class={`mdc-floating-label`}
        class:mdc-floating-label--float-above={floating}
        class:mdc-floating-label--required={$$restProps.required}
        for={`text-field-${variant}`}
        id="textfield-label"
        >{label}
      </label>
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
  }

  // Ready State Colors
  .mdc-text-field {
    @include mdc-text-field-ink-color(var(--on-background));
    @include mdc-text-field-outline-color(var(--text-field-inactive));
    @include mdc-text-field-hover-outline-color(var(--text-field-hover));
  }

  // Focused State Classes / Colors
  .mdc-text-field--focused {
    @include mdc-text-field-caret-color(var(--on-background));

    &.mdc-text-field--outlined:not(.mdc-text-field--invalid) {
      @include mdc-text-field-focused-outline-color(var(--color));
    }
  }

  // Disabled State Classes
  .mdc-text-field--disabled {
    @include mdc-text-field-disabled-outline-color(var(--disabled));
    @include mdc-text-field-disabled-ink-color(var(--disabled));
    @include mdc-text-field-disabled-label-color(var(--disabled));

    &:not(.mdc-text-field--outlined) {
      @include mdc-text-field-disabled-fill-color(var(--disabled));
      @include mdc-text-field-disabled-bottom-line-color(var(--disabled));
      @include mdc-text-field-disabled-ink-color(var(--on-disabled));
      @include mdc-text-field-disabled-label-color(var(--on-disabled));
    }
  }

  // Invalid State Classes
  .mdc-text-field--invalid {
    @include mdc-text-field-ink-color(var(--error));
    @include mdc-text-field-hover-outline-color(var(--error));
    @include mdc-text-field-outline-color(var(--error));
    @include mdc-text-field-focused-outline-color(var(--error));
  }

  // Label
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    @include mdc-floating-label-ink-color(var(--text-field-inactive));
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    @include mdc-floating-label-ink-color(var(--color));
  }

  .mdc-text-field--invalid.mdc-text-field--focused:not(.mdc-text-field--disabled)
    .mdc-floating-label,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
    @include mdc-floating-label-ink-color(var(--error));
  }

  // Helper Line
  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text,
  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-character-counter {
    color: var(--text-field-inactive);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-character-counter {
    color: var(--error);
  }

  // Variants

  // outlined

  // filled
  .mdc-text-field--filled {
    @include mdc-text-field-fill-color(var(--text-field-background));
    @include mdc-text-field-bottom-line-color(var(--text-field-inactive));
  }
  .mdc-text-field--filled:hover {
    @include mdc-text-field-fill-color(var(--text-field-background-hover));
    @include mdc-text-field-bottom-line-color(var(--text-field-bottom-line-hover));
  }

  .mdc-text-field--filled.mdc-text-field--focused {
    @include mdc-text-field-fill-color(var(--text-field-background));
  }

  // Icon Overrides
  .mdc-text-field__icon {
    fill: var(--on-background) !important;
    color: var(--on-background) !important;
  }

  .errorIcon {
    fill: var(--error) !important;
    color: var(--error) !important;
  }
</style>
