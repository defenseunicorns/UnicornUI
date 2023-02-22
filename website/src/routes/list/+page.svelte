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
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      disabled: true,
      trailingAdornment: {
        element: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'close' }
      }
    },
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

  const listItemsCheckbox: ListItemProps[] = [
    { text: 'List Item', checkBox: 'leading' },
    { text: 'List Item', checkBox: 'trailing', selected: true },
    { text: 'List Item', checkBox: 'leading', disabled: true }
  ];

  const listItemAvatar = [
    {
      text: 'List Item',
      secondaryText: 'Avatar',
      leadingAdornment: { element: ListAvatar, props: {} }
    }
  ];
</script>

<section>
  <Typography variant="h1">List Item</Typography>
  <p>
    The List component acts as the base wrapper for ListItems and is used in several other
    components such as menus, select drop downs, and navigation drawers.
  </p>
</section>

<section>
  <Typography variant="h6">Single-Line List With No Padding</Typography>
  <List
    variants={['single-line']}
    class="demo-list"
    listItems={listItemsOneLine}
    disabledPadding={true}
  />

  <pre class="variant-code">
    {`
    <List
      variants={['single-line']}
      class="demo-list"
      disabledPadding={true}
      listItems={[
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
      }]}
    />
    `}
  </pre>

  <Typography variant="h6">Two-Line List With Padding</Typography>
  <List class="demo-list" variants={['two-line']} listItems={listItemsTwoLine} />

  <Typography variant="h6">CheckBox</Typography>
  <List variants={['single-line']} class="demo-list" listItems={listItemsCheckbox} />

  <Typography variant="h6">Two Line With Avatar</Typography>
  <List variants={['avatar', 'two-line']} class="demo-list" listItems={listItemAvatar} />
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
