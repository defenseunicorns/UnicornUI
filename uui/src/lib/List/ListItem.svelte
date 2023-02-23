<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { ListItemProps } from './ListItem.types';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import { current_component } from 'svelte/internal';

  // Props
  type $$Props = ListItemProps;
  export let text = '';
  export let secondaryText = '';
  export let selected: boolean | undefined = undefined;
  export let disabled: boolean | undefined = undefined;
  export let disabledGutters: boolean | undefined = undefined;
  export let divider: boolean | undefined = undefined;

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

  // Reactive Variables
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
  <slot name="leadingAdornment" />

  <span class="mdc-deprecated-list-item__ripple" />
  <span class="mdc-deprecated-list-item__text">
    <span class="mdc-deprecated-list-item__primary-text">{text}</span>
    <span class="mdc-deprecated-list-item__secondary-text">{secondaryText}</span>
  </span>

  <slot name="trailingAdornment" />
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
