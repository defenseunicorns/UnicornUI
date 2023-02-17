<script lang="ts">
  import ListItem from './ListItem.svelte';

  export let listItems: any[] = [];
</script>

<ul class="mdc-deprecated-list {$$restProps.class || ''}">
  {#each listItems as item}
    <ListItem {...item} />
  {/each}
</ul>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
