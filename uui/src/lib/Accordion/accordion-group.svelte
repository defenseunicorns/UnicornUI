<script lang="ts">
  import type { AccordionGroupProps } from './accordion.types';
  import { current_component } from 'svelte/internal';
  import Paper from '../Paper/Paper.svelte';

  type T = $$Generic<EventTarget>;

  type $$Props = AccordionGroupProps<T>;

  export let elevation = 2;

  $: borderRadius = ($$restProps.square && 0) || '4px';
</script>

<Paper
  element="div"
  eventComponent={current_component}
  {elevation}
  {...$$restProps}
  style="--border-radius:{borderRadius};{$$restProps.style || ''}"
  class="accordion-group {$$restProps.class || ''}"
>
  <slot />
</Paper>

<style lang="scss" global>
  .accordion-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border-width: 0px;
  }

  .accordion-group .accordion:first-child {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .accordion-group .accordion:last-child {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  .accordion-group .accordion {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: unset;
  }

  .accordion-group .accordion {
    margin: 0px;
  }
  .accordion-group .accordion:not(:last-child):after {
    content: '';
    background-color: rgba(0, 0, 0, 0.12);
    height: 1px;
  }
</style>
