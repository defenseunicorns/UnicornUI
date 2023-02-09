<script lang="ts">
  import { scopedStyles, type ScopedStyles } from '@uui';
  export let scopedStyle: ScopedStyles | undefined = undefined;
</script>

<div use:scopedStyles={scopedStyle}>
  <slot />
</div>
