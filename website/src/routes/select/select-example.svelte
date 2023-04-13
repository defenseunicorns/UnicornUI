<script lang="ts">
  import { Select, SelectIcon, ListItem } from '@uui';

  let open = false;
  let value = '';
  $: trailing_icon = open ? 'expand_less' : 'expand_more';
</script>

<Select label="Select" bind:open bind:value let:setValue let:setOpen helperText="Select an Option">
  <SelectIcon slot="trailing" class="material-symbols-outlined" on:click={setOpen}>
    {trailing_icon}
  </SelectIcon>
  <ListItem text="Option 1" on:click={setValue} selected={value === 'Option 1'} />
  <ListItem text="Option 2" on:click={setValue} selected={value === 'Option 2'} />
  <ListItem text="Option 3" on:click={setValue} selected={value === 'Option 3'} />
  <ListItem text="Option 4" on:click={setValue} selected={value === 'Option 4'} />
</Select>
