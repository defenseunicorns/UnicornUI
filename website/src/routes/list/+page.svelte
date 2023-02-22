<script lang="ts">
  import ListAvatar from '../../lib/ListAvatar.svelte';
  import IconButton from '@defense-unicorns/unicorn-ui/src/lib/IconButton/IconButton.svelte';
  import type { ListItemProps } from '@uui';
  import { List, Typography } from '@uui';

  let listItemsOneLine: ListItemProps[] = [
    { text: 'List Item' },
    { text: 'List Item', selected: true },
    { text: 'List Item', disabled: true },
    {
      text: 'List Item',
      leadingAdornment: {
        element: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'favorite' }
      },
      divider: true
    },
    {
      text: 'List Item',
      trailingAdornment: {
        element: IconButton,
        props: {
          iconClass: 'material-symbols-outlined',
          iconColor: 'primary',
          iconContent: 'close'
        }
      }
    }
  ];

  let listItemsTwoLine: ListItemProps[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    { text: 'List Item', secondaryText: 'Secondary Text', selected: true, divider: true },
    { text: 'List Item', secondaryText: 'Secondary Text', disabled: true },
    {
      text: 'List Item',
      secondaryText: 'Disabled Gutters',
      trailingAdornment: {
        element: IconButton,
        props: {
          iconClass: 'material-symbols-outlined',
          iconColor: 'primary',
          iconContent: 'close'
        }
      },
      disabledGutters: true
    }
  ];
</script>

<section>
  <Typography variant="h1">List Item</Typography>
</section>

<section>
  <Typography variant="h6">Single-Line List With No Padding</Typography>
  <List
    variant="single-line"
    class="demo-list"
    listItems={listItemsOneLine}
    disabledPadding={true}
  />

  <Typography variant="h6">Two-Line List With Padding</Typography>
  <List class="demo-list" variant="two-line" listItems={listItemsTwoLine} />

  <Typography variant="h6">CheckBox</Typography>
  <List
    variant="single-line"
    class="demo-list"
    listItems={[
      { text: 'List Item', checkBox: 'leading' },
      { text: 'List Item', checkBox: 'trailing', selected: true },
      { text: 'List Item', checkBox: 'leading', disabled: true }
    ]}
  />

  <Typography variant="h6">Avatar</Typography>
  <List
    variant="avatar"
    class="demo-list"
    listItems={[{ text: 'List Item', leadingAdornment: { element: ListAvatar, props: {} } }]}
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
