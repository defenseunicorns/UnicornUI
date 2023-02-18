<script lang="ts">
  import ListItem from './ListItem.svelte';
  import type { ListItemProps } from './ListItem.types';

  export let listItems: ListItemProps[] = [];
  export let variant = '';
  export let disabledPadding: boolean;

  let listClass = '';
  $: listClass = variant.includes('two-line') ? '--two-line' : '';
</script>

<ul
  class="mdc-deprecated-list mdc-deprecated-list{listClass} {$$restProps.class || ''}"
  class:disabled-padding={disabledPadding}
>
  {#each listItems as item}
    <ListItem {...item} />
  {/each}
</ul>

<style lang="scss" global>
  @use '@material/list' as list;
  @include list.deprecated-core-styles;

  .mdc-deprecated-list {
    padding: 32px 16px;
  }

  .disabled-padding {
    padding: 0;
  }
</style>
