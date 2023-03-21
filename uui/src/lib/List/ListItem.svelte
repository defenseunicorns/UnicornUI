<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import type { ListItemProps, ListItemSlots } from './ListItem.types';
  import { current_component } from 'svelte/internal';
  import Box from '../Box/box.svelte';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = ListItemProps<T>;
  export let text = '';
  export let secondaryText: string | undefined = undefined;
  export let selected: boolean | undefined = undefined;
  export let disabled: boolean | undefined = undefined;
  export let disableGutters: boolean | undefined = undefined;
  export let divider: boolean | undefined = undefined;

  // Slot Types
  type $$Slots = ListItemSlots;

  // Local Variables
  let listItemContainerRef: HTMLDivElement;
  let listItemRef: HTMLLIElement;

  // Functions

  // Create Ripple for list item
  onMount((): void => {
    if (listItemRef) {
      new MDCRipple(listItemRef);
    }
  });

  // Reactive Variables
</script>

<Box
  class="list-item-container"
  element="div"
  ref={listItemContainerRef}
  eventComponent={current_component}
  {...$$restProps}
>
  <li
    bind:this={listItemRef}
    class="list-item mdc-deprecated-list-item mdc-ripple-upgraded"
    class:mdc-deprecated-list-item--selected={selected}
    class:mdc-ripple-upgraded--background-focused={selected}
    class:mdc-deprecated-list-item--disabled={disabled}
    class:disabled-gutters={disableGutters}
    class:two-line={secondaryText}
    class:divider
  >
    <slot name="leading-adornment" {selected} {disabled} />

    <span class="mdc-deprecated-list-item__ripple" />

    {#if secondaryText}
      <span class="mdc-deprecated-list-item__text">
        <span class="mdc-deprecated-list-item__primary-text">{text}</span>
        <span class="mdc-deprecated-list-item__secondary-text">{secondaryText} </span>
      </span>
    {:else}
      <span class="mdc-deprecated-list-item__text">{text}</span>
    {/if}

    <slot name="trailing-adornment" {selected} {disabled} />
  </li>
  {#if selected && $$slots['nested-content']}
    <div class="nested-content">
      <slot name="nested-content" />
    </div>
  {/if}
</Box>

<style lang="scss" global>
  @use '@material/list';
  .list-group .list .list-item-container,
  .list-item-container {
    @include list.deprecated-core-styles;
    display: flex;
    flex-direction: column;

    // Enabled State
    .mdc-deprecated-list-item {
      @include list.deprecated-item-primary-text-ink-color(var(--on-background));
      @include list.deprecated-item-secondary-text-ink-color(var(--on-background));
    }

    .mdc-deprecated-list-item__graphic,
    .mdc-deprecated-list-item__meta {
      color: var(--on-background);
      display: inline-flex;
    }

    // Selected State
    .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic {
      color: var(--on-background);
    }

    // Disabled state
    .mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__graphic,
    .mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__meta {
      color: var(--disabled);
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

    // Item Height
    .mdc-deprecated-list-item:not(.two-line) {
      @include list.deprecated-single-line-height(48px);
    }

    .mdc-deprecated-list-item:not(.two-line):has(.mdc-deprecated-list-item__graphic),
    .mdc-deprecated-list-item:not(.two-line):has(.mdc-deprecated-list-item__meta) {
      @include list.deprecated-single-line-height(56px);
    }

    // Variants: Graphic Size
    .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic:has(.avatar) {
      @include list.deprecated-graphic-size(0, 56px, 40px, 40px);
      display: inline-block;
    }

    // Nested Content
    .nested-content {
      padding-left: 1rem;
    }
  }
</style>
