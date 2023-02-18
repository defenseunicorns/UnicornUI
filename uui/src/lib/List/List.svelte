<script lang="ts">
  import type { ComponentProps } from './List.types';
  import ListItem from './ListItem.svelte';
  import type { ListItemProps } from './ListItem.types';

  export let listItems: ListItemProps[] = [];
  export let variant = '';

  let listClass = '';
  $: listClass = variant.includes('two-line') ? '--two-line' : '';
</script>

<ul class="mdc-deprecated-list mdc-deprecated-list{listClass} {$$restProps.class || ''}">
  {#each listItems as item}
    <ListItem {...item} />
  {/each}
</ul>

<style lang="scss" global>
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
