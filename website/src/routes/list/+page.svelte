<script lang="ts">
  import IconButton from '@defense-unicorns/unicorn-ui/src/lib/IconButton/IconButton.svelte';
  import { List, Typography, ListItem } from '@uui';
  import type { ListItemProps } from '@uui';

  let listItemsOneLine: ListItemProps[] = [
    { text: 'List Item' },
    { text: 'List Item', selected: true },
    { text: 'List Item', disabled: true },
    {
      text: 'List Item',
      leadingAdornment: {
        element: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'favorite' }
      }
    }
  ];

  let listItemsTwoLine: ListItemProps[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    { text: 'List Item', secondaryText: 'Secondary Text', selected: true },
    { text: 'List Item', secondaryText: 'Secondary Text', disabled: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      trailingAdornment: {
        element: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'close' }
      }
    }
  ];
</script>

<section>
  <Typography variant="h1">List Item</Typography>
</section>

<section>
  <Typography variant="h6">Single-Line</Typography>
  <List class="demo-list" listItems={listItemsOneLine} />

  <Typography variant="h6">Single-Line: Slot</Typography>
  <List class="demo-list" useSlot={true}>
    <div slot="listItems">
      <ListItem text="List Item" />
      <ListItem text="List Item" selected={true} />
      <ListItem text="List Item" disabled={true} />
      <ListItem text="List Item" checkBox="trailing" />
    </div>
  </List>

  <Typography variant="h6">Two-Line</Typography>
  <List class="demo-list" variant="two-line" listItems={listItemsTwoLine} />

  <Typography variant="h6">CheckBox</Typography>
  <List
    class="mdc-deprecated-list demo-list"
    listItems={[
      { text: 'List Item', checkBox: 'leading' },
      { text: 'List Item', checkBox: 'trailing', selected: true },
      { text: 'List Item', checkBox: 'leading', disabled: true }
    ]}
  />
</section>

<style lang="scss" global>
  section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 4rem;
    align-items: center;
  }

  .demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
  }
</style>
