<script lang="ts">
  import { Select, SelectIcon, ListItem } from '@uui';

  let open = false;
  $: trailing_icon = open ? 'expand_less' : 'expand_more';
</script>

<Select label="Select" helperText="Helper Text of Select" bind:open let:setOpen>
  <SelectIcon slot="trailing" class="material-symbols-outlined" on:click={setOpen}>
    {trailing_icon}
  </SelectIcon>
  <ListItem text="List Item" slot="options" />
</Select>
