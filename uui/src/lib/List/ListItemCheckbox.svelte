<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import type { ListItemCheckboxProps } from './ListItemCheckbox.types';

  // Props
  type $$Props = ListItemCheckboxProps;
  export let checked: boolean | undefined = undefined;
  export let indeterminate: boolean | undefined = undefined;

  // Local Variables
  let checkboxRef: HTMLDivElement;

  // Functions
  onMount((): void => {
    if (checkboxRef && !$$restProps.disabled) {
      const checkboxRipple = new MDCRipple(checkboxRef);
      checkboxRipple.unbounded = true;
    }
  });

  $: eventComponents = [current_component];
  $: dataIndeterminate = !checked && indeterminate;
</script>

<div
  bind:this={checkboxRef}
  class="mdc-checkbox mdc-checkbox--upgraded {$$restProps.class || ''}"
  class:mdc-checkbox--selected={checked}
  class:mdc-ripple-upgraded--background-focused={checked}
>
  <input
    use:eventRedirection={eventComponents}
    type="checkbox"
    class="mdc-checkbox__native-control"
    {checked}
    disabled={$$restProps.disabled}
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
</div>

<style lang="scss">
  @use '@material/checkbox';
  @use '@material/form-field';

  @include checkbox.core-styles;
  @include form-field.core-styles;
</style>
