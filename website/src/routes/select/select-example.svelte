<script lang="ts">
  import { Select, SelectIcon, ListItem } from '@uui';

  let open = false;
</script>

<Select label="Select" helperText="Helper Text of Select" {open}>
  <SelectIcon
    slot="trailing"
    class="material-symbols-outlined"
    on:click={() => {
      console.log('open');
      open = !open;
    }}
  >
    expand_more
  </SelectIcon>
  <ListItem text="List Item" slot="content" />
</Select>
