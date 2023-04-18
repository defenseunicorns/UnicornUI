<script lang="ts">
  import { onMount } from 'svelte/internal';
  import { MDCRipple } from '@material/ripple';
  import { current_component } from 'svelte/internal';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { ListItemProps } from './ListItem.types';
  import Box from '../Box/box.svelte';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = ListItemProps<T>;
  export let textColor = 'on-background';
  export let selected = false;
  export let disabled = false;
  export let disableGutters = false;
  export let divider = false;

  // Local Variables
  let listItemContainerRef: HTMLDivElement;
  let listItemRef: HTMLLIElement;
  let element = $$restProps.element || 'div';

  // Lifecycle Hooks

  // Create Ripple for list item
  onMount((): void => {
    if (listItemRef) {
      new MDCRipple(listItemRef);
    }
  });
</script>

<Box
  {element}
  {...$$restProps}
  ref={listItemContainerRef}
  eventComponent={current_component}
  class="list-item-container"
  style="--list-item-text-color: {makeThemeColor(textColor)}"
>
  <li
    bind:this={listItemRef}
    class="list-item mdc-deprecated-list-item mdc-ripple-upgraded"
    class:mdc-deprecated-list-item--selected={selected}
    class:mdc-ripple-upgraded--background-focused={selected}
    class:mdc-deprecated-list-item--disabled={disabled}
    class:disabled-gutters={disableGutters}
    class:divider
  >
    <slot name="leading" />

    <span class="mdc-deprecated-list-item__ripple" />

    <div class="mdc-deprecated-list-item__text">
      <slot />
    </div>

    <slot name="trailing" />
  </li>
  {#if selected && $$slots.sublist}
    <div class="sublist">
      <slot name="sublist" />
    </div>
  {/if}
</Box>

<style lang="scss" global>
  @use '@material/list';
  .list-group .list .list-item-container,
  .list.disabled-padding,
  .list-item-container {
    @include list.deprecated-core-styles;
    display: flex;
    flex-direction: column;

    // Enabled State
    .mdc-deprecated-list-item {
      @include list.deprecated-item-primary-text-ink-color(var(--list-item-text-color));
      @include list.deprecated-item-secondary-text-ink-color(var(--list-item-text-color));
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

    $two_line: '.list-item:has(.mdc-deprecated-list-item__text):has(.list-item-secondary-text)';
    #{$two_line} {
      height: 4.5rem;
    }

    .mdc-deprecated-list-item__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    // Item Height
    .mdc-deprecated-list-item:not(#{$two_line}) {
      @include list.deprecated-single-line-height(48px);
    }

    .mdc-deprecated-list-item:not(#{$two_line}):has(.mdc-deprecated-list-item__graphic),
    .mdc-deprecated-list-item:not(#{$two_line}):has(.mdc-deprecated-list-item__meta) {
      @include list.deprecated-single-line-height(56px);
    }

    // Variants: Graphic Size
    .mdc-deprecated-list-item .mdc-deprecated-list-item__graphic:has(.avatar) {
      @include list.deprecated-graphic-size(0, 56px, 40px, 40px);
      display: inline-block;
    }

    .mdc-deprecated-list-item .mdc-deprecated-list-item__meta,
    .mdc-deprecated-list-item .mdc-deprecated-list-item__meta > * {
      @include list.deprecated-graphic-size(0, 56px, 24px, 24px);
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    // Nested Content
    .sublist {
      padding-left: 1rem;
    }
  }
</style>
