<script lang="ts">
  import type { AccordionGroupProps } from './accordion.types';
  import Box from '$lib/Box/box.svelte';
  import { current_component } from 'svelte/internal';

  type T = $$Generic<EventTarget>;

  type $$Props = AccordionGroupProps<T>;
</script>

<Box
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="accordion-group {$$restProps.class || ''}"
>
  <slot />
</Box>

<style lang="scss" global>
  .accordion-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px 4px 0 0;
  }
  .accordion-group > :first-child {
    border-radius: 4px 4px 0 0;
  }
  .accordion-group > :last-child {
    border-radius: 0 0 4px 4px;
  }

  .accordion-group .accordion {
    margin: 0px;
  }
  .accordion-group .accordion:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.12);
    height: 1px;
  }
</style>
