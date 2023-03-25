<script lang="ts">
  /* Slots
   * icon (replace the expand (more/less) icon button)
   * headerContent - parent .accordian-content
   * content - parent .accordian-content
   */
  import { slide } from 'svelte/transition';
  import { createEventDispatcher, current_component } from 'svelte/internal';
  import type { AccordionProps } from './accordion.types';
  import IconButton from '../IconButton/IconButton.svelte';
  import ExpandLess from '../shared/assets/svg/expand-less.svelte';
  import ExpandMore from '../shared/assets/svg/expand-more.svelte';
  import Paper from '../Paper/Paper.svelte';
  type T = $$Generic<EventTarget>;

  // Props
  export let elevation = 2;
  export let isOpen = false;
  export let headerClass = '';
  export let contentClass = '';
  export let square = false;

  const dispatch = createEventDispatcher();

  type $$Props = AccordionProps<T>;
  $: accordionClass = `accordion ${(isOpen && 'accordion-open') || ''} ${$$restProps.class || ''}`;
</script>

<Paper eventComponent={current_component} {...$$restProps} {square} class={accordionClass}>
  <Paper {elevation} {square} class="accordion-header-wrapper">
    <slot name="icon">
      <IconButton
        class="accordion-toggle"
        on:click={() => {
          isOpen = !isOpen;
          dispatch('change');
        }}
        toggleable
        toggled={isOpen}
      >
        <ExpandMore slot="icon" />
        <ExpandLess slot="toggledIcon" />
      </IconButton>
    </slot>
    <div class="accordion-header {headerClass}">
      <slot name="headerContent" />
    </div>
  </Paper>
  {#if isOpen}
    <div transition:slide class="accordion-content {contentClass}">
      <slot name="content" />
    </div>
  {/if}
</Paper>

<style lang="scss" global>
  .accordion {
    display: flex;
    flex-direction: column;
  }
  .accordion-header-wrapper * {
    z-index: inherit !important;
  }
  .accordion-header-wrapper {
    padding: 1rem;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  .accordion-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: inherit;
  }

  .accordion .mdc-icon-button i svg path {
    fill: var(--on-surface);
  }
  .accordion .mdc-icon-button:hover i svg path {
    fill: var(--primary);
  }
</style>
