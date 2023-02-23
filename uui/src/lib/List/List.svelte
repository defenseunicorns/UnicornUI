<script lang="ts">
  import type { ListProps, ListVariant } from './List.types';

  // Props
  type $$Props = ListProps;
  export let variants: ListVariant[] = ['single-line'];
  export let disabledPadding: boolean;

  // Local Variables
  const variantMap = new Map<string, string>([
    ['single-line', ''],
    ['two-line', '--two-line'],
    ['icon', '--icon-list'],
    ['avatar', '--avatar-list']
  ]);
  let listClasses = getClassByListType();

  // Functions
  function getClassByListType() {
    let classes = [];

    for (const type of variants) {
      classes.push(`mdc-deprecated-list${variantMap.get(type)}`);
    }

    return classes.join(' ');
  }
</script>

<ul
  class="mdc-deprecated-list {listClasses} {$$restProps.class || ''}"
  class:disabled-padding={disabledPadding}
>
  <slot />
</ul>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;

  .mdc-deprecated-list {
    padding: 32px 16px;
  }

  .disabled-padding {
    padding: 0;
  }
</style>
