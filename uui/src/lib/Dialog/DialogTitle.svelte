<script lang="ts">
  import { current_component } from 'svelte/internal';
  import Typography from '../Typography/typography.svelte';
  import type { TypographyVariant } from '../Typography/typography.types';
  import type { DialogTitleProps } from './Dialog.types';

  type T = $$Generic<EventTarget>;

  // Default Props
  export let variant: TypographyVariant = 'h6';

  type $$Props = DialogTitleProps<T>;
</script>

<Typography
  {variant}
  eventComponent={current_component}
  {...$$restProps}
  class="dialog-title {$$restProps.class || ''}"
>
  <slot />
</Typography>
