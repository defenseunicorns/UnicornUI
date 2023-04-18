<script lang="ts">
  import Typography from '../Typography/typography.svelte';

  export let secondary = false;

  $: variantClass = secondary ? 'list-item-secondary-text' : '';
</script>

<Typography {...$$restProps} class="list-item-typography {variantClass} {$$restProps.class || ''}">
  <slot />
</Typography>
