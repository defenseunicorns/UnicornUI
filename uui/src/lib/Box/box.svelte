<script lang="ts">
  import type { ScopedStyles } from '../shared/theme/config/theme-config.types';
  import { scopedStyles } from '../shared/utils/scopedStyle';
  import { current_component } from 'svelte/internal';
  import { eventRedirection } from '../shared/utils/eventRedirection';
  import type { BoxProps } from './box.types';

  // Svelte does generics
  type T = $$Generic<EventTarget>;

  // Props
  export let element = 'div';
  export let ref: Node | undefined = undefined;
  export let eventComponent: typeof current_component | undefined = undefined;
  export let scopedStyle: ScopedStyles | undefined = undefined;

  type $$Props = BoxProps<T>;

  // Watch
  $: eventComponents = [current_component, eventComponent];
</script>

{#if $$slots.default}
  <svelte:element
    this={element}
    use:scopedStyles={scopedStyle}
    use:eventRedirection={eventComponents}
    bind:this={ref}
    {...$$restProps}
    class="unstyled-box {$$restProps.class || ''}"
  >
    <slot />
  </svelte:element>
{:else}
  <!--Prevents self closing tag warning-->
  <svelte:element
    this={element}
    use:scopedStyles={scopedStyle}
    use:eventRedirection={eventComponents}
    bind:this={ref}
    {...$$restProps}
    class="unstyled-box {$$restProps.class || ''}"
  />
{/if}

<style lang="scss">
  .unstyled-box,
  .unstyled-box::before,
  .unstyled-box::after {
    box-sizing: border-box;
    margin-block: unset;
  }
</style>
