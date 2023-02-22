<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import type { ListItemCheckboxProps } from './ListItemCheckbox.types';

  // Props
  type $$Props = ListItemCheckboxProps;
  export let selected = false;

  // Local Variables
  let checkboxRef: HTMLDivElement;
  let strokeColor = 'black';

  // Functions
  onMount((): void => {
    if (checkboxRef && !$$restProps.disabled) {
      const checkboxRipple = new MDCRipple(checkboxRef);
      checkboxRipple.unbounded = true;
    }
  });

  function setSelected() {
    selected = !selected;
  }

  $: eventComponents = [current_component];
</script>

<!-- <div class="mdc-form-field"> -->
<div
  bind:this={checkboxRef}
  class="mdc-checkbox mdc-checkbox--upgraded {$$restProps.class || ''}"
  class:mdc-checkbox--selected={selected}
  class:mdc-ripple-upgraded--background-focused={selected}
>
  <input
    use:eventRedirection={eventComponents}
    type="checkbox"
    class="mdc-checkbox__native-control"
    checked={selected}
    disabled={$$restProps.disabled}
  />
  <div class="mdc-checkbox__background">
    {#if selected}
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path
          class="mdc-checkbox__checkmark-patch"
          fill="none"
          stroke={`${strokeColor}`}
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    {/if}
    <div class="mdc-checkbox__mixedmark" />
  </div>
  {#if !$$restProps.disabled}<div class="mdc-checkbox__ripple" />{/if}
  <div class="mdc-checkbox__focus-ring" />
</div>

<!-- </div> -->
<style lang="scss">
  @use '@material/checkbox';
  @use '@material/form-field';
  @use '@material/list';

  @include checkbox.core-styles;
  @include form-field.core-styles;
  @include list.deprecated-core-styles;
</style>
