<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { ListItemProps } from './ListItem.types';
  import ListItemCheckbox from './ListItemCheckbox.svelte';

  // Local Vars
  let listItemRef: HTMLLIElement;

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
  export let divider: boolean;
  export let order: number;

  // Local Variables

  // functions
  onMount((): void => {
    if (listItemRef) {
      new MDCRipple(listItemRef);
    }
  });

  function handleInteraction() {
    if (!disabled) selected = true;
  }

  function clickAway(evt: MouseEvent | KeyboardEvent) {
    if (evt.target !== listItemRef && !listItemRef.contains(evt.target as Node)) {
      selected = false;
    }
  }
</script>

<svelte:window on:click={clickAway} on:keydown={clickAway} />

<li
  bind:this={listItemRef}
  class="mdc-deprecated-list-item mdc-ripple-upgraded"
  class:mdc-ripple-upgraded--background-focused={selected}
  class:mdc-deprecated-list-item--disabled={disabled}
  class:disabled-gutters={disabledGutters}
  on:click={handleInteraction}
  on:keydown={handleInteraction}
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
  @use '@material/list';
  @use '@material/ripple';

  .disabled-gutters {
    @include list.deprecated-list-item-padding(0);
  }
</style>
