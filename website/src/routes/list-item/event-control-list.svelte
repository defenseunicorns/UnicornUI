<script lang="ts">
  import { List, ListItem, ListItemAdornment, ListItemCheckbox, Typography } from '@uui';

  let selected = false;
  let exampleOnclick = (index?: number) => {
    if (index !== undefined) {
      selected = !selected;
    }
  };
</script>

<List class="demo-list">
  <ListItem on:click={() => exampleOnclick(0)} {selected}>
    <Typography>Click Me 1</Typography>
    <Typography>Checkbox with same click.</Typography>

    <ListItemAdornment slot="trailing">
      <ListItemCheckbox checked={selected} />
    </ListItemAdornment>
  </ListItem>
  <ListItem on:click={() => exampleOnclick()}>
    <Typography>Click Me 2</Typography>
    <Typography>Checkbox with separate click.</Typography>
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
