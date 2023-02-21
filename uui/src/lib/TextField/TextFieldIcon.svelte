<script lang="ts">
  import Icon from '../Icon/Icon.svelte';
  import type { TextFieldIconProps, TextFieldIconVariant } from './TextField.types';
  import type { MaterialSymbols } from 'material-symbols';

  type T = $$Generic<EventTarget>;
  type $$Props = TextFieldIconProps<T>;
  export let variant: TextFieldIconVariant;
  export let iconContent: MaterialSymbols;
</script>

<Icon
  variant={iconContent}
  {...$$restProps}
  class="mdc-text-field__icon mdc-text-field__icon--{variant} {$$restProps.class || ''}"
>
  <slot />
</Icon>
