<script lang="ts">
  import ListAvatar from '../../lib/ListAvatar.svelte';
  import IconButton from '@defense-unicorns/unicorn-ui/src/lib/IconButton/IconButton.svelte';
  import type { ListItemProps } from '@uui';
  import { List, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';

  let listItemsOneLine: ListItemProps[] = [
    { text: 'List Item' },
    { text: 'List Item', selected: true },
    { text: 'List Item', disabled: true },
    {
      text: 'List Item',
      leadingAdornment: {
        component: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'favorite' }
      },
      divider: true
    },
    {
      text: 'List Item',
      trailingAdornment: {
        component: IconButton,
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
        component: IconButton,
        props: { iconClass: 'material-symbols-outlined', iconContent: 'close' }
      }
    },
    {
      text: 'List Item',
      secondaryText: 'Disabled Gutters',
      trailingAdornment: {
        component: IconButton,
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

  const listItemsAvatar: ListItemProps[] = [
    {
      text: 'List Item',
      secondaryText: 'Avatar',
      leadingAdornment: { component: ListAvatar, props: {} }
    }
  ];
</script>

<DocPage>
  <Typography variant="h2">List</Typography>
  <p>
    The List component acts as the base wrapper for ListItems and is used in several other
    components such as menus, select drop downs, and navigation drawers.
  </p>

  <Typography variant="h3">List Types</Typography>
  <VariantExample
    code={`
    type ListVariant = 'single-line' | 'two-line' | 'icon' | 'avatar';  
export interface ListProps extends svelte.JSX.HTMLAttributes<HTMLElement> {
  variants: ListVariant[];
  listItems: ListItemProps[];
  disabledPadding?: boolean;
  onSelect?: () => void;
}
    `}
  />

  <Typography variant="body1">
    The variants prop accepts an array of list variants, allowing for lists such as a two-line
    avatar. **Note: not all types mesh well together (i.e. single-line and two-line)!**
  </Typography>

  <Typography variant="h3">Styles</Typography>
  <Typography variant="body1"
    >Lists come like blank canvas. You can control the style by passing a custom class to the List
    component. All following examples use a custom demo-list class for making the list look like
    this:</Typography
  >
  <List class="demo-list" variants={['single-line']} listItems={[]} />
  <VariantExample
    code={`
    <List 
  class="demo-list" 
  variants={['single-line']} 
  listItems={[]} 
/>

.demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
}
    `}
  />

  <Typography variant="h3">List Variant Examples</Typography>

  <Typography variant="h4">Single-Line List With No Padding</Typography>
  <ul>
    <li>List by default has padding. To override, use the disabledPadding prop.</li>
    <li>
      List can accept an onSelect function which gets applied to all children ListItems. Try
      clicking through the items of the following menu.
    </li>
  </ul>
  <List
    variants={['single-line']}
    class="demo-list"
    listItems={listItemsOneLine}
    disabledPadding={true}
    onSelect={() => alert('you clicked me')}
  />
  <VariantExample
    code={`
    <List
      variants={['single-line']}
      class="demo-list"
      disabledPadding={true}
      onSelect={() => alert('you clicked me')}
      listItems={[
        { text: 'List Item' },
        { text: 'List Item', selected: true },
        { text: 'List Item', disabled: true },
        {
          text: 'List Item',
          leadingAdornment: {
            component: IconButton,
            props: { iconClass: 'material-symbols-outlined', iconContent: 'favorite' }
          },
          divider: true
        },
        {
          text: 'List Item',
          trailingAdornment: {
            component: IconButton,
            props: {
              iconClass: 'material-symbols-outlined',
              iconColor: 'primary',
              iconContent: 'close'
            }
          }
      }]}
    />
`}
  />

  <Typography variant="h4">Two-Line List With Padding</Typography>
  <List class="demo-list" variants={['two-line']} listItems={listItemsTwoLine} />

  <VariantExample
    code={`
    <List 
  class="demo-list" 
  variants={['two-line']} 
  listItems={[
        { text: 'List Item', secondaryText: 'Secondary Text' },
        { text: 'List Item', secondaryText: 'Secondary Text', selected: true, divider: true },
        {
          text: 'List Item',
          secondaryText: 'Secondary Text',
          disabled: true,
          trailingAdornment: {
            component: IconButton,
            props: { iconClass: 'material-symbols-outlined', iconContent: 'close' }
          }
        },
        {
          text: 'List Item',
          secondaryText: 'Disabled Gutters',
          trailingAdornment: {
            component: IconButton,
            props: {
              iconClass: 'material-symbols-outlined',
              iconColor: 'primary',
              iconContent: 'close'
            }
          },
          disabledGutters: true
        }
      ]} 
/>
  `}
  />

  <Typography variant="h4">Two Line With Avatar</Typography>
  <List variants={['avatar', 'two-line']} class="demo-list" listItems={listItemsAvatar} />

  <VariantExample
    code={`
    <List 
  variants={['avatar', 'two-line']} 
  class="demo-list" 
  listItems={[
    {
      text: 'List Item',
      secondaryText: 'Avatar',
      leadingAdornment: { component: ListAvatar, props: {} }
    }
  ]} 
/>
    `}
  />

  <Typography variant="h2">List Item</Typography>
  <p>....</p>
  <Typography variant="h3">List Item Types</Typography>

  <VariantExample
    code={`
    export interface ListItemProps {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  checkBox?: 'leading' | 'trailing';
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
  leadingAdornment?: ComponentAsProp<IconButtonProps>;
  trailingAdornment?: ComponentAsProp<IconButtonProps>;
}

export type ComponentProps<T> = {
  [K in keyof T]: T[K];
};

export type ComponentAsProp<T extends Record<string, any>> = {
  component: ComponentType<SvelteComponentTyped>;
  props: ComponentProps<T>;
};
    `}
  />

  <Typography variant="h4">Default CheckBox</Typography>
  <Typography variant="body1"
    >ListItem, as noted above, can accept components as leading and trailing adornments. For easy
    out of the box use, it also accepts a checkbox prop that enables a default mdc Checkbox in the
    leading or trailing positions.</Typography
  >

  <List variants={['single-line']} class="demo-list" listItems={listItemsCheckbox} />

  <VariantExample
    code={`<List 
  variants={['single-line']} 
  class="demo-list" 
  listItems={[
    { text: 'List Item', checkBox: 'leading' },
    { text: 'List Item', checkBox: 'trailing', selected: true },
    { text: 'List Item', checkBox: 'leading', disabled: true }
  ]} 
/>
  `}
  />
</DocPage>

<style lang="scss" global>
  .demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
  }
</style>
