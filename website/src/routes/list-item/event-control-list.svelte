<script lang="ts">
  import { List, ListItem, ListItemAdornment, ListItemCheckbox } from '@uui';

  let selected = false;
  let exampleOnclick = (index?: number) => {
    if (index !== undefined) {
      selected = !selected;
    }
  };
</script>

<List class="demo-list">
  <ListItem
    text="Click Me 1"
    secondaryText="Checkbox with same click."
    on:click={() => exampleOnclick(0)}
    {selected}
  >
    <ListItemAdornment slot="trailing">
      <ListItemCheckbox checked={selected} />
    </ListItemAdornment>
  </ListItem>
  <ListItem
    text="Click Me 2"
    secondaryText="Checkbox with separate click."
    on:click={() => exampleOnclick()}
  >
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
