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
  class:mdc-deprecated-list-item--two-line={secondaryText}
  class:mdc-ripple-upgraded--background-focused={selected}
  class:mdc-deprecated-list-item--disabled={disabled}
  on:click={setSelected}
  on:keydown={setSelected}
>
  {#if checkBox && checkBox === 'leading'}
    <ListItemCheckbox {selected} />
  {:else}
    <slot name="leading" />
  {/if}

  <span class="mdc-deprecated-list-item__ripple" />
  <span class="mdc-deprecated-list-item__text">
    <span class="mdc-deprecated-list-item__primary-text">{text}</span>
    <span class="mdc-deprecated-list-item__secondary-text">{secondaryText}</span>
  </span>

  {#if checkBox && checkBox === 'trailing'}
    <ListItemCheckbox {selected} />
  {:else}
    <slot name="trailing" />
  {/if}
</li>

<style lang="scss">
  @use '@material/ripple';
  @use '@material/list';
  @include list.deprecated-core-styles;

  .mdc-deprecated-list-item--two-line {
    .mdc-deprecated-list-item__text {
      align-self: flex-start;
    }

    height: 4.5rem;
  }
</style>
