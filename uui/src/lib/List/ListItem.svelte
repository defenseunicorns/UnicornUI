<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { ListItemProps, ListItemSlots, ListItemVariant } from './ListItem.types';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import { current_component } from 'svelte/internal';

  // Props
  type $$Props = ListItemProps;
  export let text = '';
  export let secondaryText: string | undefined = undefined;
  export let variant: ListItemVariant = 'textual';
  export let selected: boolean | undefined = undefined;
  export let disabled: boolean | undefined = undefined;
  export let disabledGutters: boolean | undefined = undefined;
  export let divider: boolean | undefined = undefined;

  // Slot Types
  type $$Slots = ListItemSlots;

  // Local Variables
  let listContainerRef: HTMLDivElement;
  let listItemRef: HTMLLIElement;

  // Functions

  // Create the Ripple for this list item
  onMount((): void => {
    if (listItemRef) {
      new MDCRipple(listItemRef);
    }
  });

  // For when user clicks the list item
  function handleInteraction() {
    if (!disabled) selected = !selected;
  }

  // When user clicks off of list item or its children (i.e adornments, nested lists);
  function clickAway(evt: MouseEvent | KeyboardEvent) {
    if (evt.target !== listContainerRef && !listContainerRef.contains(evt.target as Node)) {
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

<div class="list-item-container " bind:this={listContainerRef}>
  <li
    bind:this={listItemRef}
    use:eventRedirection={eventComponents}
    on:click={handleInteraction}
    on:keydown={(e) => {
      if (e.key === 'enter') handleInteraction();
    }}
    class="mdc-deprecated-list-item mdc-ripple-upgraded {variant}"
    class:mdc-deprecated-list-item--selected={selected}
    class:mdc-ripple-upgraded--background-focused={selected}
    class:mdc-deprecated-list-item--disabled={disabled}
    class:disabled-gutters={disabledGutters}
    class:two-line={secondaryText}
    class:divider
  >
    <slot name="leadingAdornment" {selected} {disabled} />

    <span class="mdc-deprecated-list-item__ripple" />

    {#if secondaryText}
      <span class="mdc-deprecated-list-item__text">
        <span class="mdc-deprecated-list-item__primary-text">{text}</span>
        <span class="mdc-deprecated-list-item__secondary-text">{secondaryText} </span>
      </span>
    {:else}
      <span class="mdc-deprecated-list-item__text">{text}</span>
    {/if}

    <slot name="trailingAdornment" {selected} {disabled} />
  </li>
  {#if selected && $$slots.nested}
    <div class="nested-item">
      <slot name="nested" />
    </div>
  {/if}
</div>

<style lang="scss" global>
  @use '@material/list';
  @include list.deprecated-core-styles;

  .list-item-container {
    display: flex;
    flex-direction: column;
  }

  // Enabled State
  .mdc-deprecated-list-item {
    @include list.deprecated-item-primary-text-ink-color(var(--on-background));
    @include list.deprecated-item-secondary-text-ink-color(var(--on-background));
  }

  .mdc-deprecated-list-item__graphic {
    color: var(--on-background);
  }

  .mdc-deprecated-list-item__meta {
    color: var(--on-background);
  }

  // Selected State

  .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic {
    color: var(--on-background);
  }

  // Style Options
  .disabled-gutters {
    @include list.deprecated-list-item-padding(0);
  }

  .divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  // With Secondary Text

  .two-line {
    height: 4.5rem;

    .mdc-deprecated-list-item__text {
      align-self: flex-start;
    }
  }

  // Variants: Item Height
  .mdc-deprecated-list-item.textual:not(.two-line) {
    @include list.deprecated-single-line-height(48px);
  }

  .mdc-deprecated-list-item.avatar:not(.two-line),
  .mdc-deprecated-list-item.icon:not(.two-line) {
    @include list.deprecated-single-line-height(56px);
  }

  // Variants: Graphic Size and Offsets

  .mdc-deprecated-list-item.avatar .mdc-deprecated-list-item__graphic > * {
    @include list.deprecated-graphic-size(-16px, 0, 40px, 40px);
    border-radius: 50%;
  }

  .mdc-deprecated-list-item.icon .mdc-deprecated-list-item__graphic > * {
    @include list.deprecated-graphic-size(-16px, 0px, 40px, 40px);
  }

  // Nested Content
  .nested-item {
    padding-left: 1rem;
  }
</style>
