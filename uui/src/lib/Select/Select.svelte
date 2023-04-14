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
  let helperTextOffset = -18;

  // Functions

  // Passed as Slot Prop for trailing icon to use on:click
  function setOpen() {
    open = !open;

    if (open && document.activeElement != inputRef) {
      inputRef.focus();
    }
  }

  // Passed as Slot Prop in default slot of Menu,
  // which means "menu" items can access this on:click
  function setValue(e: MouseEvent) {
    const target = e.target as HTMLElement;
    value = target.textContent?.trim() || '';
    open = false;
  }
</script>

<Box class="select {$$restProps.class || ''}">
  <TextField
    bind:ref={tfContainerRef}
    bind:inputRef
    on:focus={() => {
      open = true;
    }}
    {value}
    readonly
    variant={$$restProps.variant || 'outlined'}
    label={$$restProps.label}
    helperText={$$restProps.helperText || ''}
  >
    <slot name="trailing" slot="trailing" {setOpen} />
  </TextField>

  <Menu
    bind:open
    bind:anchorRef={tfContainerRef}
    anchorOrigin={$$restProps.anchorOrigin || 'bottom-start'}
    offsetNum={helperTextOffset}
  >
    <slot {setValue} />
  </Menu>
</Box>

<style lang="scss" global>
  .select {
    width: fit-content;
  }
  .select .text-field .mdc-text-field__input {
    cursor: default;
    caret-color: transparent;
  }

  .select .menu {
    border-radius: 0px 0px 4px;
  }
</style>
