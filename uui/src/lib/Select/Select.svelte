<script lang="ts">
  import TextField from '../TextField/TextField.svelte';
  import Box from '../Box/box.svelte';
  import Menu from '../Menu/Menu.svelte';
  import type { SelectProps, SelectSlots } from './Select.types';

  // Props
  type $$Slots = SelectSlots;
  type $$Props = SelectProps;
  export let multiple = false;
  export let chip = false;
  export let labelId = '';
  export let open = false;
  export let value = '';

  // Local Vars
  let tfContainerRef: HTMLElement;
  let inputRef: HTMLInputElement;

  // Functions
  function setOpen() {
    open = !open;
  }

  function setValue(e: MouseEvent) {
    const target = e.target as HTMLElement;
    value = target.textContent?.trim() || '';
    open = false;
  }
</script>

<Box class="select {$$restProps.class || ''}">
  <TextField
    bind:ref={tfContainerRef}
    on:focus={() => (open = true)}
    {value}
    readonly
    variant={$$restProps.variant || 'outlined'}
    label={$$restProps.label}
    helperText={$$restProps.helperText || ''}
    getInputRef={(iRef) => {
      inputRef = iRef;
    }}
  >
    <slot name="trailing" slot="trailing" {setOpen} />
  </TextField>

  <Menu
    {open}
    bind:anchorRef={tfContainerRef}
    anchorOrigin={$$restProps.anchorOrigin || 'bottom-start'}
    onClose={setOpen}
  >
    <slot {setValue} />
  </Menu>
</Box>

<style lang="scss" global>
  .select .text-field .mdc-text-field__input {
    cursor: default;
    caret-color: transparent;
  }
</style>
