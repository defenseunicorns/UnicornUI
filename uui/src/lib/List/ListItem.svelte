<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { ListItemProps, ListItemVariant } from './ListItem.types';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import { current_component } from 'svelte/internal';

  // Props
  type $$Props = ListItemProps;
  export let text = '';
  export let secondaryText = '';
  export let variant: ListItemVariant = 'textual';
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
  class="mdc-deprecated-list-item mdc-ripple-upgraded {variant}"
  class:mdc-ripple-upgraded--background-focused={selected}
  class:mdc-deprecated-list-item--disabled={disabled}
  class:disabled-gutters={disabledGutters}
  class:divider
  class:two-line={secondaryText}
>
  <slot name="leadingAdornment" />

  <span class="mdc-deprecated-list-item__ripple" />

  {#if secondaryText}
    <span class="mdc-deprecated-list-item__text">
      <span class="mdc-deprecated-list-item__primary-text">{text}</span>
      <span class="mdc-deprecated-list-item__secondary-text">{secondaryText} </span>
    </span>
  {:else}
    <span class="mdc-deprecated-list-item__text">{text}</span>
  {/if}

  <slot name="trailingAdornment" />
</li>

<style lang="scss" global>
  @use '@material/list';
  @use '@material/typography';
  @include list.deprecated-core-styles;

  .mdc-deprecated-list-item {
    @include list.deprecated-item-primary-text-ink-color(var(--on-background));
    @include list.deprecated-item-secondary-text-ink-color(var(--on-background));
    @include list.deprecated-item-selected-text-color(var(--primary));
  }

  .disabled-gutters {
    @include list.deprecated-list-item-padding(0);
  }

  .divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  .two-line {
    height: 4.5rem;

    .mdc-deprecated-list-item__text {
      align-self: flex-start;
    }
  }

  .mdc-deprecated-list-item.avatar:not(.two-line) {
    @include list.deprecated-single-line-height(56px);
  }

  .mdc-deprecated-list-item.avatar .mdc-deprecated-list-item__graphic > * {
    @include list.deprecated-graphic-size(0, 0, 40px, 40px);
    border-radius: 50%;
  }
</style>
