<script lang="ts">
  import Box from '../Box/box.svelte';
  import type { PaperProps } from './Paper.types';
  import { current_component } from 'svelte/internal';

  type T = $$Generic<EventTarget>;
  type $$Props = PaperProps<T>;

  export let variant = 'elevation';
  export let elevation = 0;
</script>

<Box
  element="div"
  eventComponent={current_component}
  {...$$restProps}
  class="mdc-elevation--z{elevation} mdc-elevation-transition {$$restProps.class || ''}"
>
  <slot />
</Box>

<style lang="scss" global>
  @use '@material/elevation/mdc-elevation';
</style>
