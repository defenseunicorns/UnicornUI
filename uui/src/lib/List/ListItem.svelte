<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { ListItemProps } from './ListItem.types';
  import ListItemCheckbox from './ListItemCheckbox.svelte';

  // Local Vars
  let listElement: HTMLLIElement;

  // Props
  type $$Props = ListItemProps;
  export let text = '';
  export let secondaryText = '';
  export let selected: boolean;
  export let checkBox: 'leading' | 'trailing';
  export let leadingAdornment: any;
  export let trailingAdornment: any;
  export let disabled: boolean;
  export let disabledGutters: boolean;
  export let disabledPadding: boolean;
  export let divider: boolean;
  export let order: number;

  // functions
  onMount((): void => {
    if (listElement) {
      new MDCRipple(listElement);
    }
  });

  function setSelected() {
    if (!disabled) selected = !selected;
  }
</script>

<li
  bind:this={listElement}
  class="mdc-deprecated-list-item mdc-ripple-upgraded"
  class:mdc-ripple-upgraded--background-focused={selected}
  class:mdc-deprecated-list-item--disabled={disabled}
  on:click={setSelected}
  on:keydown={setSelected}
>
  {#if checkBox && checkBox === 'leading' && !leadingAdornment}
    <ListItemCheckbox {selected} placement="graphic" />
  {:else if leadingAdornment}
    <svelte:component
      this={leadingAdornment.element}
      {...leadingAdornment.props}
      class="mdc-deprecated-list-item__graphic"
    />
  {/if}

  <span class="mdc-deprecated-list-item__ripple" />
  <span class="mdc-deprecated-list-item__text">
    <span class="mdc-deprecated-list-item__primary-text">{text}</span>
    <span class="mdc-deprecated-list-item__secondary-text">{secondaryText}</span>
  </span>

  {#if checkBox && checkBox === 'trailing' && !trailingAdornment}
    <ListItemCheckbox {selected} placement="meta" />
  {:else if trailingAdornment}
    <svelte:component
      this={trailingAdornment.element}
      {...trailingAdornment.props}
      class="mdc-deprecated-list-item__meta"
    />
  {/if}
</li>

<style lang="scss">
  @use '@material/ripple';
</style>
