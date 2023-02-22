<script lang="ts">
  import { Typography, type TypographyProps } from '@uui';

  type T = $$Generic<EventTarget>;

  type $$Props = TypographyProps<T>;
</script>

<Typography
  element="span"
  style="background-color: black;color: var(--primary);padding: .1em .4em;"
  {...$$restProps}
>
  <slot />
</Typography>
