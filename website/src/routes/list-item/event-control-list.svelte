<script lang="ts">
  import { List, ListItem, ListItemAdornment, ListItemCheckbox, ListItemTypography } from '@uui';

  let selected = false;
  let exampleOnclick = (index?: number) => {
    if (index !== undefined) {
      selected = !selected;
    }
  };
</script>

<List class="demo-list">
  <ListItem on:click={() => exampleOnclick(0)} {selected}>
    <ListItemTypography>Click Me 1</ListItemTypography>
    <ListItemTypography secondary>Checkbox with same click.</ListItemTypography>

    <ListItemAdornment slot="trailing">
      <ListItemCheckbox checked={selected} />
    </ListItemAdornment>
  </ListItem>
  <ListItem on:click={() => exampleOnclick()}>
    <ListItemTypography>Click Me 2</ListItemTypography>
    <ListItemTypography secondary>Checkbox with separate click.</ListItemTypography>
    <ListItemAdornment
      slot="trailing"
      on:click={(e) => {
        e.stopPropagation();
      }}
    >
      <ListItemCheckbox />
    </ListItemAdornment>
  </ListItem>
</List>
