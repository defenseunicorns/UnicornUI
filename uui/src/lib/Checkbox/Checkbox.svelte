<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { CheckboxProps } from './Checkbox.types';
  import Box from '../Box/box.svelte';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

  // Props
  type $$Props = CheckboxProps<HTMLInputElement>;
  export let indeterminate: boolean | undefined = undefined;
  export let color: ThemeColors = 'on-surface';
  export let backgroundColor: ThemeColors = 'secondary';
  export let checked = false;
  export let value: string | undefined = undefined;

  // Local Variables
  let checkboxRef: HTMLDivElement;

  const { id, name, disabled } = $$restProps;

  // Functions
  onMount((): void => {
    if (checkboxRef && !$$restProps.disabled) {
      const checkboxRipple = new MDCRipple(checkboxRef);
      checkboxRipple.unbounded = true;
    }
  });

  $: dataIndeterminate = !checked && indeterminate;
  $: stateClasses = `${
    checked && 'mdc-checkbox--selected mdc-ripple-upgraded--background-focused'
  }`;
</script>

<Box class="mdc-form-field">
  <Box
    bind:ref={checkboxRef}
    element="div"
    class="checkbox mdc-checkbox mdc-checkbox--upgraded {stateClasses} {$$restProps.class || ''}"
    style="--color: {makeThemeColor(color)}; --background-color: {makeThemeColor(backgroundColor)}"
  >
    <input
      bind:checked
      bind:value
      type="checkbox"
      {id}
      {name}
      {disabled}
      class="mdc-checkbox__native-control"
      data-indeterminate={dataIndeterminate}
    />
    <div class="mdc-checkbox__background">
      {#if checked}
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
      {/if}
      <div class="mdc-checkbox__mixedmark" />
    </div>
    {#if !$$restProps.disabled}
      <div class="mdc-checkbox__ripple" />
    {/if}
    <div class="mdc-checkbox__focus-ring" />
  </Box>
  <label for={$$restProps.id}>{$$restProps.label || ''}</label>
</Box>

<style lang="scss" global>
  @use '@material/checkbox';
  @use '@material/form-field';

  @include checkbox.core-styles;
  @include form-field.core-styles;

  .checkbox.mdc-checkbox {
    width: 40px;
    height: 40px;
    flex: 0 0 auto;
  }

  // Color States
  .checkbox.mdc-checkbox {
    @include checkbox.ink-color(var(--color));
    @include checkbox.disabled-ink-color(var(--text-disabled));
    @include checkbox.disabled-container-colors(
      var(--disabled),
      var(--disabled),
      var(--disabled),
      var(--disabled)
    );
  }

  .checkbox.mdc-checkbox .mdc-checkbox__native-control:enabled:checked + .mdc-checkbox__background {
    background-color: var(--background-color);
    border-color: var(--background-color);
  }

  // Override default MDC theme --mdc-checkbox-unchecked-color
  .mdc-checkbox
    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not(
      [data-indeterminate='true']
    )
    ~ .mdc-checkbox__background {
    border-color: var(--on-background);
  }
</style>
