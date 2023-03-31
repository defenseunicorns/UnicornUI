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
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  type T = $$Generic<EventTarget>;

  // Props
  export let elevation = 2;
  export let isOpen = false;
  export let headerClass = '';
  export let contentClass = '';
  export let square = false;
  export let backgroundColor = 'surface';
  export let color = 'on-surface';
  export let hoverColor = 'primary';

  const dispatch = createEventDispatcher();

  type $$Props = AccordionProps<T>;
  $: accordionClass = `accordion ${(isOpen && 'accordion-open') || ''} ${$$restProps.class || ''}`;
  $: accordionStyle = `--accordion-icon-hover-color:${makeThemeColor(hoverColor)};${
    $$restProps.style || ''
  }`;
</script>

<Paper
  eventComponent={current_component}
  {...$$restProps}
  style={accordionStyle}
  class={accordionClass}
  {color}
  {backgroundColor}
  {square}
>
  <Paper {elevation} {square} {color} {backgroundColor} class="accordion-header-wrapper">
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

  .accordion.accordion-open .accordion-header-wrapper {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .accordion .mdc-icon-button i svg path {
    fill: var(--paper-color);
  }
  .accordion .mdc-icon-button:hover i svg path {
    fill: var(--accordion-icon-hover-color);
  }
</style>
