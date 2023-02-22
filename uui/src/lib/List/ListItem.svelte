<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { ListItemProps } from './ListItem.types';
  import ListItemCheckbox from './ListItemCheckbox.svelte';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import { current_component } from 'svelte/internal';

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

  // Local Variables
  let listItemRef: HTMLLIElement;

  // Functions
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

  $: eventComponents = [current_component];
</script>

<svelte:window
  on:click={clickAway}
  on:keydown={(e) => {
    if (e.key === 'enter') clickAway(e);
  }}
/>

<li
  use:eventRedirection={eventComponents}
  bind:this={listItemRef}
  on:click={handleInteraction}
  on:keydown={(e) => {
    if (e.key === 'enter') handleInteraction();
  }}
  class="mdc-deprecated-list-item mdc-ripple-upgraded"
  class:mdc-ripple-upgraded--background-focused={selected}
  class:mdc-deprecated-list-item--disabled={disabled}
  class:disabled-gutters={disabledGutters}
  class:divider
>
  {#if checkBox && checkBox === 'leading' && !leadingAdornment}
    <ListItemCheckbox
      {selected}
      class="mdc-deprecated-list-item__graphic"
      {disabled}
      on:change={handleInteraction}
    />
  {:else if leadingAdornment}
    <svelte:component
      this={leadingAdornment.component}
      {...leadingAdornment.props}
      {disabled}
      class="mdc-deprecated-list-item__graphic"
    />
  {/if}

  <span class="mdc-deprecated-list-item__ripple" />
  <span class="mdc-deprecated-list-item__text">
    <span class="mdc-deprecated-list-item__primary-text">{text}</span>
    <span class="mdc-deprecated-list-item__secondary-text">{secondaryText}</span>
  </span>

  {#if checkBox && checkBox === 'trailing' && !trailingAdornment}
    <ListItemCheckbox
      {selected}
      class="mdc-deprecated-list-item__meta"
      {disabled}
      on:change={handleInteraction}
    />
  {:else if trailingAdornment}
    <svelte:component
      this={trailingAdornment.component}
      {...trailingAdornment.props}
      {disabled}
      class="mdc-deprecated-list-item__meta"
    />
  {/if}
</li>

<style lang="scss" global>
  @use '@material/list';
  @include list.deprecated-core-styles;

  .mdc-deprecated-list-item__primary-text {
    color: var(--on-background);
  }

  .mdc-deprecated-list-item__secondary-text {
    color: var(--on-background);
  }

  .disabled-gutters {
    @include list.deprecated-list-item-padding(0);
  }

  .divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>
