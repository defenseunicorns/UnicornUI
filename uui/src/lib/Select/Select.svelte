<script lang="ts">
  import TextField from '../TextField/TextField.svelte';
  import Box from '../Box/box.svelte';
  import Menu from '../Menu/Menu.svelte';
  import type { SelectProps } from './Select.types';

  // Props
  type T = $$Generic<EventTarget>;
  type $$Props = SelectProps<T>;

  export let multiple = false;
  export let chip = false;
  export let labelId = '';
  export let open = false;

  // Local Vars
  let tfContainerRef: HTMLElement;

  function setOpen() {
    open = !open;
    tfContainerRef && tfContainerRef.focus();
  }
</script>

<Box class="select">
  <TextField
    on:focus={() => (open = true)}
    on:focusout={() => (open = false)}
    bind:ref={tfContainerRef}
    variant={$$restProps.variant || 'outlined'}
    label={$$restProps.label}
    helperText={$$restProps.helperText}
  >
    <slot name="trailing" slot="trailing" {setOpen} />
  </TextField>
  <Menu {open} anchorRef={tfContainerRef} anchorOrigin={$$restProps.anchorOrigin}>
    <slot name="options" />
  </Menu>
</Box>

<style lang="scss" global>
  .select .text-field .mdc-text-field__input {
    cursor: default;
    caret-color: transparent;
  }
</style>
