<script lang="ts">
  import { List, ListItem, ListItemAdornment, Checkbox } from '@uui';

  let selected = false;
  let exampleOnclick = (index?: number) => {
    if (index !== undefined) {
      selected = !selected;
    }
    alert('You selected this item');
  };
</script>

<List class="demo-list">
  <ListItem
    text="Click Me 1"
    secondaryText="Checkbox with same click."
    on:click={() => exampleOnclick(0)}
    {selected}
  >
    <ListItemAdornment slot="trailing-adornment">
      <Checkbox checked={selected} />
    </ListItemAdornment>
  </ListItem>
  <ListItem
    text="Click Me 2"
    secondaryText="Checkbox with separate click."
    on:click={() => exampleOnclick()}
  >
    <ListItemAdornment
      slot="trailing-adornment"
      on:click={(e) => {
        e.stopPropagation();
        alert('Propagation stopped. No parent event fired.');
      }}
    >
      <Checkbox />
    </ListItemAdornment>
  </ListItem>
</List>
