<!--ExampleComponent-->
<script lang="ts">
  type T = $$Generic<EventTarget>;
  import { scopedStyles, type SSX } from '@uui';
  import type { HTMLAttributes } from 'svelte/elements';
  export let ssx: SSX | undefined = undefined;
  interface $$Props extends HTMLAttributes<T> {
    ssx?: SSX | undefined;
  }
</script>

<div use:scopedStyles={{ ssx }} {...$$restProps}>
  <slot />
</div>
