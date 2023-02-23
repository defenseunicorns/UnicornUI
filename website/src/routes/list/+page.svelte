<script lang="ts">
  import ListAvatar from '../../lib/ListAvatar.svelte';
  import IconButton from '@defense-unicorns/unicorn-ui/src/lib/IconButton/IconButton.svelte';
  import type { ListItemProps, ComponentAsProp } from '@uui';
  import { List, Typography, ListItem, ListItemAdornment, ListItemCheckbox } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';

  type ExampleListItems1 = ListItemProps & {
    leadingAdornment?: boolean;
    trailingAdornment?: boolean;
  };

  const listItemsTwoLine1: ExampleListItems1[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    { text: 'List Item', secondaryText: 'Secondary Text', selected: true, divider: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      disabled: true,
      trailingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Disabled Gutters',
      trailingAdornment: true,
      disabledGutters: true
    }
  ];

  type ExampleListItems2 = ListItemProps & {
    leadingAdornment?: Record<string, string> | ComponentAsProp<any>;
    trailingAdornment?: Record<string, string> | ComponentAsProp<any>;
  };

  const listItemsTwoLine2: ExampleListItems2[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    { text: 'List Item', secondaryText: 'Secondary Text', selected: true, divider: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: {
        content: 'favorite'
      }
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: {
        content: 'warning'
      }
    },
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
        component: ListItemCheckbox,
        props: {}
      },
      disabledGutters: true
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
  </ul>
  <List variants={['single-line']} class="demo-list" disabledPadding={true}>
    <ListItem text="List Item" on:click={() => alert('you clicked me')} />
    <ListItem text="List Item" selected={true} />
    <ListItem text="List Item" disabled={true} />
    <ListItem text="List Item" divider={true}>
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="List Item">
      <ListItemAdornment slot="trailingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="close" />
      </ListItemAdornment>
    </ListItem>
  </List>

  <VariantExample
    code={`
     <List
  variants={['single-line']}
  class="demo-list"
  disabledPadding={true}
>
  <ListItem text="List Item" on:click={() => alert('you clicked me')} />
  <ListItem text="List Item" selected={true} />
  <ListItem text="List Item" disabled={true} />
  <ListItem text="List Item" divider={true}>
      <IconButton
        iconClass="material-symbols-outlined"
        iconContent="favorite"
        slot="leadingAdornment"
      />
  </ListItem>
  <ListItem text="List Item">
      <IconButton
        iconClass="material-symbols-outlined"
        iconContent="close"
        slot="trailingAdornment"
      />
  </ListItem>
</List>
`}
  />

  <Typography variant="h4">Two-Line List With Padding</Typography>

  <Typography variant="h5">Example 1: Using Iteration</Typography>

  <List class="demo-list" variants={['two-line']}>
    {#each listItemsTwoLine1 as item}
      <ListItem {...item} on:click={() => !item.disabled && alert('item selected')}>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment
              class="material-symbols-outlined"
              slot="leadingAdornment"
              disabled={item.disabled}
            >
              favorite
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="trailingAdornment">
          {#if item.trailingAdornment}
            <ListItemAdornment>
              <IconButton
                disabled={item.disabled}
                iconClass="material-symbols-outlined"
                iconContent="close"
                iconColor="primary"
              />
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
      </ListItem>
    {/each}
  </List>

  <Typography variant="h6">
    If you have more than a few list items, you can iterate through an array of ListItemProps, even
    conditionally rendering adornments if some items have them and some do not.
  </Typography>

  <VariantExample
    code={`

type ExampleListItems1 = ListItemProps & {
    leadingAdornment?: boolean;
    trailingAdornment?: boolean;
};

const listItemsTwoLine1: ExampleListItems1[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    { text: 'List Item', secondaryText: 'Secondary Text', selected: true, divider: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      disabled: true,
      trailingAdornment: true
    },
    {
      text: 'List Item',
      secondaryText: 'Disabled Gutters',
      trailingAdornment: true,
      disabledGutters: true
    }
];
  `}
  />

  <VariantExample
    code={`
      <List class="demo-list" variants={['two-line']}>
    {#each listItemsTwoLine as item}
      <ListItem {...item}>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
              favorite
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="trailingAdornment">
          {#if item.trailingAdornment}
            <ListItemAdornment>
              <IconButton
                iconClass="material-symbols-outlined"
                iconContent="close"
                iconColor="primary"
              />
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
      </ListItem>
    {/each}
</List>
  `}
  />

  <Typography variant="h5">Example 2: Using Iteration</Typography>

  <List class="demo-list" variants={['two-line']}>
    {#each listItemsTwoLine2 as item}
      <ListItem {...item}>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment
              slot="leadingAdornment"
              class="material-symbols-outlined"
              disabled={item.disabled}
            >
              {item.leadingAdornment.content}
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="trailingAdornment">
          {#if item.trailingAdornment}
            <ListItemAdornment slot="trailingAdornment">
              <svelte:component
                this={item.trailingAdornment.component}
                {...item.trailingAdornment.props}
                on:click={() => alert('you clicked me')}
                disabled={item.disabled}
              />
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
      </ListItem>
    {/each}
  </List>

  <Typography variant="h6">
    Another example of iteration, except this time we're passing different types of icons or even
    different types of components used for adornments.
  </Typography>

  <VariantExample
    code={`

type ExampleListItems2 = ListItemProps & {
    leadingAdornment?: Record<string, string> | ComponentAsProp<any>;
    trailingAdornment?: Record<string, string> | ComponentAsProp<any>;
};

const listItemsTwoLine2: ExampleListItems2[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    { text: 'List Item', secondaryText: 'Secondary Text', selected: true, divider: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: {
        content: 'favorite'
      }
    },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      leadingAdornment: {
        content: 'warning'
      }
    },
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
        component: ListItemCheckbox,
        props: {}
      },
      disabledGutters: true
    }
];
  `}
  />

  <VariantExample
    code={`
   <List class="demo-list" variants={['two-line']}>
    {#each listItemsTwoLine2 as item}
      <ListItem {...item}>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined">
              {item.leadingAdornment.content}
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="trailingAdornment">
          {#if item.trailingAdornment}
            <ListItemAdornment>
              <svelte:component
                this={item.trailingAdornment.component}
                {...item.trailingAdornment.props}
                on:click={() => alert('you clicked me')}
              />
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
      </ListItem>
    {/each}
</List>
  `}
  />

  <Typography variant="h2">List Item</Typography>
  <p>....</p>
  <Typography variant="h3">List Item Types</Typography>

  <VariantExample
    code={`
    export interface ListItemProps extends svelte.JSX.HTMLAttributes<HTMLLIElement> {
  text: string;
  secondaryText?: string;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
}

export interface ListItemAdornmentProps<T extends EventTarget> extends BoxProps<T> {}
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
