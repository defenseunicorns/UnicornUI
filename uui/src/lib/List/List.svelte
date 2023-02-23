<script lang="ts">
  import type { ListProps } from './List.types';

  // Props
  type $$Props = ListProps;
  export let disabledPadding: boolean;
</script>

<ul class="mdc-deprecated-list {$$restProps.class || ''}" class:disabled-padding={disabledPadding}>
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
