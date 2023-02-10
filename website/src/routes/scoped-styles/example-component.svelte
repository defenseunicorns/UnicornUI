<!--ExampleComponent-->
<script lang="ts">
  type T = $$Generic<EventTarget>;
  import { scopedStyles, type ScopedStyles } from '@uui';
  import type { HTMLAttributes } from 'svelte/elements';
  export let scopedStyle: ScopedStyles | undefined = undefined;
  interface $$Props extends HTMLAttributes<T> {
    scopedStyle?: ScopedStyles;
  }
</script>

<div use:scopedStyles={scopedStyle} {...$$restProps}>
  <slot />
</div>
