<script lang="ts">
  import { text } from 'svelte/internal';

  import TextField from '../TextField/TextField.svelte';
  import Box from '../Box/box.svelte';
  import Menu from '../Menu/Menu.svelte';
  import type { TextFieldProps } from '../TextField/TextField.types';
  import type { SelectProps } from './Select.types';
  import type { MenuProps } from '../Menu/Menu.types';

  type T = $$Generic<EventTarget>;
  type $$Props = SelectProps<T>;

  export let multiple = false;
  export let chip = false;
  export let menuProps: MenuProps<HTMLMenuElement> | undefined = undefined;

  let textFieldRef: HTMLElement;
</script>

<Box>
  <TextField
    bind:ref={textFieldRef}
    variant={$$restProps.variant}
    label={$$restProps.label}
    helperText={$$restProps.helperText}
  >
    <slot name="trailing" slot="trailing" />
  </TextField>
  <Menu open={$$restProps.open} anchorRef={textFieldRef}>
    <slot name="content" />
  </Menu>
</Box>
