<script lang="ts">
  import ListItem from './ListItem.svelte';
  import type { ListItemProps } from './ListItem.types';

  export let listItems: ListItemProps[] = [];
  export let variant = '';
  export let useSlot = false;

  let listClass = '';

  $: listClass = variant.includes('two-line') ? '--two-line' : '';
</script>

<ul class="mdc-deprecated-list mdc-deprecated-list{listClass} {$$restProps.class || ''}">
  {#if useSlot}
    <slot name="listItems" />
  {:else}
    {#each listItems as item}
      <ListItem {...item} />
    {/each}
  {/if}
</ul>

<style lang="scss" global>
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
