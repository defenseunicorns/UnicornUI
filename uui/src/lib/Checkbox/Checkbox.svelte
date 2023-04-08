<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import type { CheckboxProps } from './Checkbox.types';
  import Box from '../Box/box.svelte';

  // Props
  //   type T = $$Generic<EventTarget>
  type $$Props = CheckboxProps<HTMLInputElement>;
  export let indeterminate: boolean | undefined = undefined;

  let checked = $$restProps.checked;

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
  $: stateClasses = `${
    checked && 'mdc-checkbox--selected mdc-ripple-upgraded--background-focused'
  }`;
</script>

<Box
  bind:ref={checkboxRef}
  element="div"
  class="checkbox mdc-checkbox mdc-checkbox--upgraded {stateClasses} {$$restProps.class || ''}"
>
  <input
    use:eventRedirection={eventComponents}
    type="checkbox"
    bind:checked
    class="mdc-checkbox__native-control"
    disabled={$$restProps.disabled}
    data-indeterminate={dataIndeterminate}
    id={$$restProps.id}
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

<style lang="scss" global>
  @use '@material/checkbox';
  @use '@material/form-field';

  .checkbox {
    @include checkbox.core-styles;
    @include form-field.core-styles;
  }

  .checkbox.mdc-checkbox {
    width: 40px;
    height: 40px;
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
