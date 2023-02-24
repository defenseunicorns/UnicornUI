<script lang="ts">
  import type { ListItemProps, IconButtonProps, ComponentAsProp } from '@uui';
  import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemAdornment,
    ListItemCheckbox
  } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';
  import InlineCode from '../../lib/inline-code.svelte';
  import ListAvatar from './list-avatar.svelte';

  type ExtendedListItems1 = ListItemProps & {
    leadingAdornment?: boolean;
    trailingAdornment?: boolean;
  };

  const listItemsIteration1: ExtendedListItems1[] = [
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

  type ExtendedListItems2 = ListItemProps & {
    leadingAdornment?: Record<string, any>;
    trailingAdornment?: Record<string, any>;
  };

  const listItemsIteration2: ExtendedListItems2[] = [
    { text: 'List Item', secondaryText: 'Secondary Text' },
    { text: 'List Item', secondaryText: 'Secondary Text', divider: true },
    {
      text: 'List Item',
      secondaryText: 'Secondary Text',
      selected: true,
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
      } as ComponentAsProp<IconButtonProps>
    },
    {
      text: 'List Item',
      secondaryText: 'Disabled Gutters',
      trailingAdornment: {
        component: ListItemCheckbox,
        props: {}
      } as ComponentAsProp<IconButtonProps>,
      disabledGutters: true
    }
  ];

  let exampleOnclick = () => alert('You selected this item');
</script>

<DocPage>
  <Typography variant="h2">List</Typography>
  <p>
    The <InlineCode>List</InlineCode> component acts as the base wrapper for
    <InlineCode>ListItem</InlineCode>
    and is used in several other components such as menus, select drop downs, and navigation drawers.
  </p>

  <Typography variant="h3">Types</Typography>
  <Typography variant="body1">
    <InlineCode>List</InlineCode> can receive all HTMLAttributes of HTMLUListElement, but the only custom
    prop is disabledPadding which removes the default horizontal and vertical padding.
  </Typography>

  <VariantExample
    code={`
export interface ListProps extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
  disabledPadding?: boolean;
}
    `}
  />

  <div class="inline-examples">
    <div>
      <Typography variant="h5">No Padding</Typography>
      <List class="demo-list" disabledPadding={true}>
        <ListItem text="List Item" />
      </List>
    </div>
    <div>
      <Typography variant="h5">Padding</Typography>

      <List class="demo-list">
        <ListItem text="List Item" selected={true} />
      </List>
    </div>
  </div>

  <Typography variant="h3">Styles</Typography>
  <Typography variant="body1">
    Other than the default padding, <InlineCode>List</InlineCode> comes as a blank canvas. You can control
    the style by passing it a custom class. All following examples use a custom demo-list class.
  </Typography>
  <List class="demo-list" />

  <VariantExample
    code={`
    <List class="demo-list" />

.demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
}
    `}
  />
  <Typography variant="h3">Slots</Typography>

  <Typography variant="body1">
    <InlineCode>List</InlineCode> utilizes an unnamed slot in which any number of list items are rendered
    as "children".
  </Typography>

  <VariantExample
    code={`
<ul ...> 
  <slot />
</ul>
`}
  />

  <Typography variant="h2">List Item</Typography>
  <Typography variant="body1">
    The <InlineCode>ListItem</InlineCode> is the true workhorse of <InlineCode>List</InlineCode>. It
    wraps your text as well as adornments, like icons, icon buttons, images, checkboxes, etc...
  </Typography>
  <Typography variant="h3">Types</Typography>
  <Typography variant="body1">
    <InlineCode>ListItem</InlineCode> has several optional props along with one required (text). Notably
    the variant prop, of type ListItemVariant, allows you to compose lists of varying types of list items.
    This type is used for styling height, padding, etc... for graphics. Defaults to "textual" if no variant
    is given.
  </Typography>

  <VariantExample
    code={`
    export type ListItemVariant = 'textual'| 'icon' | 'avatar';

export interface ListItemProps extends 
    svelte.JSX.IntrinsicAttributes<svelte.JSX.HTMLAttributes<HTMLLIElement>> 
{
  text: string;
  secondaryText?: string;
  variant?: ListItemVariant (default textual);
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
}

export interface ListItemSlots {
  default: { selected: boolean | undefined; disabled: boolean | undefined };
  leadingAdornment: { selected: boolean | undefined; disabled: boolean | undefined };
  trailingAdornment: { selected: boolean | undefined; disabled: boolean | undefined };
}


export type ListItemAdornmentProps<T extends EventTarget> = BoxProps<T>
`}
  />

  <Typography variant="h3">Slots</Typography>
  <Typography variant="body1">
    <InlineCode>ListItem</InlineCode> has two named slots for leading and trailing adornments. Their
    types can be seen in the above Types code example. Currently they support two slot properties --
    selected and disabled. This allows for <InlineCode>ListItem</InlineCode> to expose it's selected
    and disabled states to the adornemts, keeping all parts of the <InlineCode>ListItem</InlineCode>
    in sync. **As seen in below examples, to pass adornments (icons, icon buttons, checkboxes, avatars
    etc...) to these slots, you need to use the <InlineCode>ListItemAdornment</InlineCode> component
    so they receive correct styling.
  </Typography>

  <VariantExample
    code={` 
  <li ...>
  <slot name="leadingAdornment" {selected} {disabled} />
    ....
  <slot name="trailingAdornment" {selected} {disabled} />
</li>
  
  `}
  />

  <List class="demo-list">
    <ListItem text="List Item" variant="icon" secondaryText="Selected" let:selected selected={true}>
      <ListItemAdornment slot="trailingAdornment">
        <ListItemCheckbox {selected} />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="List Item" variant="icon" secondaryText="Disabled" disabled={true} let:disabled>
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" {disabled} />
      </ListItemAdornment>
      <ListItemAdornment slot="trailingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="close" {disabled} />
      </ListItemAdornment>
    </ListItem>
  </List>

  <VariantExample
    code={`
  <List class="demo-list">
    <ListItem text="List Item" variant="icon" secondaryText="Click Me" let:selected>
      <ListItemAdornment slot="trailingAdornment">
        <ListItemCheckbox {selected} />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="List Item" variant="icon" secondaryText="Disabled" disabled={true} let:disabled>
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" {disabled} />
      </ListItemAdornment>
      <ListItemAdornment slot="trailingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="close" {disabled} />
      </ListItemAdornment>
    </ListItem>
</List>
  `}
  />

  <Typography variant="h3">List Item Examples</Typography>

  <Typography variant="h4">Textual</Typography>
  <List class="demo-list">
    <ListItem text="List Item" />
    <ListItem text="List Item" selected={true} />
    <ListItem text="List Item" disabled={true} />
    <ListItem text="List Item" secondaryText="Secondary Text" />
    <ListItem text="List Item" secondaryText="Secondary Text" selected={true} />
    <ListItem text="List Item" secondaryText="Secondary Text" disabled={true} />
  </List>

  <VariantExample
    code={`
  <List class="demo-list" disabledPadding={true}>
    <ListItem text="List Item" />
    <ListItem text="List Item" selected={true} />
    <ListItem text="List Item" disabled={true} />
    <ListItem text="List Item" secondaryText="Secondary Text" />
    <ListItem 
      text="List Item" 
        secondaryText="Secondary Text" 
        selected={true} 
    />
    <ListItem 
      text="List Item" 
      secondaryText="Secondary Text" 
      disabled={true} 
    />
</List>
  `}
  />

  <Typography variant="h4">Icon</Typography>

  <List class="demo-list">
    <ListItem text="Icon" divider={true} variant="icon">
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" secondaryText="Secondary Text">
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" divider={true} variant="icon">
      <ListItemAdornment slot="trailingAdornment">
        <IconButton
          iconClass="material-symbols-outlined"
          iconContent="arrow_drop_down"
          iconColor="primary"
        />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" secondaryText="Secondary Text">
      <ListItemAdornment slot="trailingAdornment">
        <IconButton
          iconClass="material-symbols-outlined"
          iconContent="arrow_drop_down"
          iconColor="primary"
        />
      </ListItemAdornment>
    </ListItem>
  </List>

  <VariantExample
    code={`
  <List class="demo-list">
    <ListItem text="Icon" divider={true} variant="icon">
      <ListItemAdornment slot="leadingAdornment">
        <IconButton 
          iconClass="material-symbols-outlined" 
          iconContent="favorite" 
        />
      </ListItemAdornment>
    </ListItem>
    <ListItem 
      text="Icon" 
      variant="icon" 
      secondaryText="Secondary Text"
    >
      <ListItemAdornment slot="leadingAdornment">
        <IconButton 
          iconClass="material-symbols-outlined" 
          iconContent="favorite" 
        />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" divider={true} variant="icon">
      <ListItemAdornment slot="trailingAdornment">
        <IconButton 
          iconClass="material-symbols-outlined" 
          iconContent="close" 
        />
      </ListItemAdornment>
    </ListItem>
    <ListItem 
      text="Icon" 
      variant="icon" 
      secondaryText="Secondary Text"
    >
      <ListItemAdornment slot="trailingAdornment">
        <IconButton 
          iconClass="material-symbols-outlined" 
          iconContent="close" 
        />
      </ListItemAdornment>
    </ListItem>
  </List>
  `}
  />

  <Typography variant="h4">Avatar</Typography>
  <List class="demo-list">
    <ListItem text="Avatar" variant="avatar">
      <ListItemAdornment slot="leadingAdornment">
        <ListAvatar />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text">
      <ListItemAdornment slot="leadingAdornment">
        <ListAvatar />
      </ListItemAdornment>
    </ListItem>
  </List>

  <VariantExample
    code={`
   <List class="demo-list">
    <ListItem text="Avatar" variant="avatar">
      <ListItemAdornment slot="leadingAdornment">
        <ListAvatar />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text">
      <ListItemAdornment slot="leadingAdornment">
        <ListAvatar />
      </ListItemAdornment>
    </ListItem>
</List>
`}
  />

  <Typography variant="h3">Controlling Interaction</Typography>
  <Typography variant="body1">
    The <InlineCode>ListItem</InlineCode> and <InlineCode>ListItemAdornment</InlineCode> use event redirection,
    allowing you to pass your own event handlers (i.e. on:click), which will run alongside the default
    event behavior.
  </Typography>
  <Typography>
    Note: <InlineCode>ListItemAdorment</InlineCode>, if clicked, will trigger the parent click by
    default. Make sure to <InlineCode>stopPropagation()</InlineCode> if you don't want the parent event
    to fire.
  </Typography>

  <List class="demo-list">
    <ListItem text="List Item 1" on:click={exampleOnclick} />
    <ListItem text="List Item 2" on:click={exampleOnclick} />
    <ListItem text="List Item 3" on:click={exampleOnclick} variant="icon">
      <ListItemAdornment
        class="material-symbols-outlined"
        style="color: white;"
        slot="trailingAdornment"
        on:click={(e) => {
          e.stopPropagation();
          alert('You clicked the drop down arrown');
        }}
      >
        arrow_drop_down
      </ListItemAdornment>
    </ListItem>
  </List>

  <VariantExample
    code={`
  <List class="demo-list">
    <ListItem text="List Item 1" on:click={exampleOnclick} />
    <ListItem text="List Item 2" on:click={exampleOnclick} />
    <ListItem text="List Item 3" on:click={exampleOnclick} variant="icon">
      <ListItemAdornment
        class="material-symbols-outlined"
        style="color: white;"
        slot="trailingAdornment"
        on:click={(e) => {
          e.stopPropagation();
          alert('You clicked the drop down arrown');
        }}
      >
        arrow_drop_down
      </ListItemAdornment>
    </ListItem>
</List>
  `}
  />

  <Typography variant="h4">Developer Experience: Iteration</Typography>

  <Typography variant="body1">
    While <InlineCode>List</InlineCode> does not accept an array of items as a prop, you can still use
    the svelte way of looping. So if you have more than a few list items, you can iterate through an
    array of ListItemProps objects, even conditionally rendering adornments if some items have them and
    some do not. To add adornment properties to an array of ListItemProps objects (assuming you're using
    typescript), you need to extend the ListItemProps interface as seen in the below code example.
  </Typography>

  <Typography variant="h5">Example 1</Typography>
  <Typography variant="body1">
    In this case, we know that every type of adornment will be the same (i.e. favorite for leading,
    close for trailing), so we've extended our ListItemProps interface to use a boolean for
    indicating if an adornment is needed.
  </Typography>

  <List class="demo-list">
    {#each listItemsIteration1 as item}
      <ListItem {...item} let:disabled>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment" {disabled}>
              favorite
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="trailingAdornment">
          {#if item.trailingAdornment}
            <ListItemAdornment>
              <IconButton
                {disabled}
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

  <VariantExample
    code={`

type ExtendedListItems1 = ListItemProps & {
    leadingAdornment?: boolean;
    trailingAdornment?: boolean;
};

const listItemsIteration1: ExtendedListItems1[] = [
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
      <List class="demo-list">
    {#each listItemsIteration1 as item}
      <ListItem {...item} let:disabled>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment 
              class="material-symbols-outlined" 
              slot="leadingAdornment"
              {disabled}
            >
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
                {disabled}
              />
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
      </ListItem>
    {/each}
</List>
  `}
  />

  <Typography variant="h5">Example 2</Typography>
  <Typography variant="body1">
    Now we want to allow for adornments to be different. So we've extended our ListItemProps to
    allow for more complex adornment metadata.
  </Typography>

  <List class="demo-list">
    {#each listItemsIteration2 as item}
      <ListItem {...item} let:selected let:disabled>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment slot="leadingAdornment" class="material-symbols-outlined" {disabled}>
              {item.leadingAdornment.content}
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="trailingAdornment">
          {#if item.trailingAdornment}
            <ListItemAdornment slot="trailingAdornment">
              <svelte:component
                this={item.trailingAdornment.component}
                {selected}
                {disabled}
                {...item.trailingAdornment.props}
              />
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
      </ListItem>
    {/each}
  </List>

  <VariantExample
    code={`

type ExtendedListItems2 = ListItemProps & {
    leadingAdornment?: Record<string, any>;
    trailingAdornment?: Record<string, any>;
};

const listItemsIteration2: ExtendedListItems2[] = [
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
      } as ComponentAsProp<IconButtonProps>
    },
    {
      text: 'List Item',
      secondaryText: 'Disabled Gutters',
      disabledGutters: true
      trailingAdornment: {
        component: ListItemCheckbox,
        props: {}
      } as ComponentAsProp<IconButtonProps>
    }
];
  `}
  />

  <VariantExample
    code={`
   <List class="demo-list">
    {#each listItemsIteration2 as item}
      <ListItem {...item} let:selected let:disabled>
        <svelte:fragment slot="leadingAdornment">
          {#if item.leadingAdornment}
            <ListItemAdornment 
              slot="leadingAdornment" 
              class="material-symbols-outlined"
              {disabled}
            >
              {item.leadingAdornment.content}
            </ListItemAdornment>
          {/if}
        </svelte:fragment>

        <svelte:fragment slot="trailingAdornment">
          {#if item.trailingAdornment}
            <ListItemAdornment>
              <svelte:component
                {disabled}
                {selected}
                this={item.trailingAdornment.component}
                {...item.trailingAdornment.props}
              />
            </ListItemAdornment>
          {/if}
        </svelte:fragment>
      </ListItem>
    {/each}
</List>
  `}
  />
</DocPage>

<style lang="scss" global>
  .demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
  }

  .inline-examples {
    display: flex;
    justify-content: space-around;
  }
</style>
