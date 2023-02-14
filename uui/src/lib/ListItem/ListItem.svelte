<script lang="ts">
  import type { ListItemProps } from './ListItem.types';

  type $$Props = ListItemProps;
  export let text = '';
  export let secondaryText: string;
  export let divider: boolean;
  export let disabledGutters: boolean;
  export let order: number;
</script>

<div>
  <!-- slot leadingIcon / Avatar / Action -->
  <li>{text}</li>
  <!-- slot trailingIcon / Avatar / Action -->
</div>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;
</style>
