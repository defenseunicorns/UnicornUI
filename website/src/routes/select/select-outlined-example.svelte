<script lang="ts">
  import { Select, SelectIcon, ListItem, Typography } from '@uui';

  let open = false;
  let value = '';
  $: trailing_icon = open ? 'expand_less' : 'expand_more';
</script>

<Select
  label="Select"
  bind:open
  bind:value
  let:handleClicked={setValue}
  let:setOpen
  helperText="Select an Option"
>
  <SelectIcon slot="trailing" class="material-symbols-outlined" on:click={setOpen}>
    {trailing_icon}
  </SelectIcon>
  <ListItem on:click={setValue} selected={value === 'Option 1'}>
    <Typography>Option 1</Typography>
  </ListItem>
  <ListItem on:click={setValue} selected={value === 'Option 2'}>
    <Typography>Option 2</Typography>
  </ListItem>
  <ListItem on:click={setValue} selected={value === 'Option 3'}>
    <Typography>Option 3</Typography>
  </ListItem>
  <ListItem on:click={setValue} selected={value === 'Option 4'}>
    <Typography>Option 4</Typography>
  </ListItem>
</Select>
