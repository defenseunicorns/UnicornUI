<script lang="ts">
  import type { ListProps } from './List.types';
  import ListItem from './ListItem.svelte';
  import type { ListItemProps } from './ListItem.types';

  // Props
  type $$Props = ListProps;
  export let listItems: ListItemProps[] = [];
  export let variant = 'single-line';
  export let disabledPadding: boolean;

  // Local Variables
  const variantMap = new Map<string, string>([
    ['single-line', ''],
    ['two-line', '--two-line'],
    ['icon', '--icon-list'],
    ['avatar', '--avatar-list']
  ]);
  let listType = variantMap.get(variant);
</script>

<ul
  class="mdc-deprecated-list mdc-deprecated-list{listType} {$$restProps.class || ''}"
  class:disabled-padding={disabledPadding}
>
  {#each listItems as item}
    <ListItem {...item} />
  {/each}
</ul>

<style lang="scss" global>
  @use '@material/list';
  @include list.deprecated-core-styles;

  .mdc-deprecated-list {
    padding: 32px 16px;
  }

  .disabled-padding {
    padding: 0;
  }
</style>
