<script lang="ts">
  import type { ListItemProps, IconButtonProps, ComponentAsProp } from '@uui';
  import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListGroup,
    ListSubHeader,
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
      disableGutters: true
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
      disableGutters: true
    }
  ];

  let exampleOnclick = () => alert('You selected this item');
</script>

<DocPage>
  <Typography variant="h2">List Item</Typography>
  <Typography variant="body1">
    The <InlineCode>ListItem</InlineCode> is the base component of any list. It is used to wrap text
    and adornments into a single component. List item adornments or actions can include icons, icon buttons,
    images, checkboxes, and avatars.
  </Typography>

  <Typography variant="h3">Props</Typography>
  <Typography variant="body1">
    <InlineCode>ListItem</InlineCode> has several optional props along with one required (text). Notably
    the variant prop tells <InlineCode>ListItem</InlineCode> how to style itself for the type of adornments
    it will wrap. If no variant is given it defaults to "simple"
  </Typography>

  <VariantExample
    code={`
    export type ListItemVariant = 'simple' | 'icon' | 'avatar';

export interface ListItemProps
  extends svelte.JSX.IntrinsicAttributes<svelte.JSX.HTMLAttributes<HTMLLIElement>> 
{
  text: string;
  variant?: ListItemVariant;
  secondaryText?: string;
  selected?: boolean;
  divider?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
}
`}
  />

  <Typography variant="h3">Slots</Typography>
  <Typography variant="body1">
    <InlineCode>ListItem</InlineCode> has three named slots for leading adornment, trailing adornment,
    and nested content. Currently they support two slot properties -- selected and disabled. This allows
    for <InlineCode>ListItem</InlineCode> to expose it's selected and disabled states to the adornments,
    keeping all parts of the <InlineCode>ListItem</InlineCode>
    in sync.
    <br />
    <br />
    **As seen in below examples, to pass adornments to these slots, you need to use the
    <InlineCode>ListItemAdornment</InlineCode> component so they receive correct styling.**
  </Typography>

  <Typography>
    Also of note, the nested content is controlled by the selected state of <InlineCode
      >ListITem</InlineCode
    > as well as the presence of an element designated with <InlineCode>slot="nested"</InlineCode>.
  </Typography>

  <VariantExample
    code={`
export type ListItemSlotProps = Record<string, boolean | undefined>;

export interface ListItemSlots {
  default: ListItemSlotProps;
  leadingAdornment: ListItemSlotProps;
  trailingAdornment: ListItemSlotProps;
  nested: ListItemSlotProps;
}
  `}
  />

  <VariantExample
    code={` 
  <li ...>
  <slot name="leadingAdornment" {selected} {disabled} />
    ....
  <slot name="trailingAdornment" {selected} {disabled} />
</li>
{#if selected && $$slots.nested}
    <div class="nested-item">
      <slot name="nested" />
    </div>
{/if}
  
  `}
  />

  <List class="demo-list">
    <ListItem text="List Item" variant="icon" secondaryText="Selected" let:selected selected>
      <ListItemAdornment slot="trailingAdornment">
        <ListItemCheckbox checked={selected} />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="List Item" variant="icon" secondaryText="Disabled" let:disabled disabled>
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
    <ListItem text="List Item" variant="icon" secondaryText="Selected" let:selected selected>
      <ListItemAdornment slot="trailingAdornment">
        <ListItemCheckbox checked={selected} />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="List Item" variant="icon" secondaryText="Disabled" let:disabled disabled>
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

  <Typography variant="h4">Simple</Typography>
  <List class="demo-list">
    <ListItem text="List Item" />
    <ListItem text="List Item" selected />
    <ListItem text="List Item" disabled />
    <ListItem text="List Item" secondaryText="Secondary Text" />
    <ListItem text="List Item" secondaryText="Secondary Text" selected />
    <ListItem text="List Item" secondaryText="Secondary Text" disabled />
  </List>

  <VariantExample
    code={`
  <List class="demo-list">
    <ListItem text="List Item" />
    <ListItem text="List Item" selected />
    <ListItem text="List Item" disabled />
    <ListItem text="List Item" secondaryText="Secondary Text" />
    <ListItem text="List Item" secondaryText="Secondary Text" selected />
    <ListItem text="List Item" secondaryText="Secondary Text" disabled />
</List>
  `}
  />

  <Typography variant="h4">Icon</Typography>

  <List class="demo-list">
    <ListItem text="Icon" variant="icon">
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" secondaryText="Secondary Text" selected>
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" disableGutters divider>
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon">
      <ListItemAdornment slot="trailingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="arrow_drop_down" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" secondaryText="Secondary Text" selected>
      <ListItemAdornment slot="trailingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="arrow_drop_down" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" disableGutters divider>
      <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
        <IconButton iconClass="material-symbols-outlined" iconContent="arrow_drop_down" />
      </ListItemAdornment>
    </ListItem>
  </List>

  <VariantExample
    code={`
  <List class="demo-list">
    <ListItem text="Icon" variant="icon">
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" secondaryText="Secondary Text" selected>
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" disableGutters divider>
      <ListItemAdornment slot="leadingAdornment">
        <IconButton iconClass="material-symbols-outlined" iconContent="favorite" />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon">
      <ListItemAdornment slot="trailingAdornment">
        <IconButton
          iconClass="material-symbols-outlined"
          iconContent="arrow_drop_down"
          iconColor="primary"
        />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" secondaryText="Secondary Text" selected>
      <ListItemAdornment slot="trailingAdornment">
        <IconButton
          iconClass="material-symbols-outlined"
          iconContent="arrow_drop_down"
          iconColor="primary"
        />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Icon" variant="icon" disableGutters divider>
      <ListItemAdornment slot="trailingAdornment">
        <IconButton
          iconClass="material-symbols-outlined"
          iconContent="arrow_drop_down"
          iconColor="primary"
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
    <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text" selected>
      <ListItemAdornment slot="leadingAdornment">
        <ListAvatar />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text" disableGutters divider>
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
    <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text" selected>
      <ListItemAdornment slot="leadingAdornment">
        <ListAvatar />
      </ListItemAdornment>
    </ListItem>
    <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text" disableGutters divider>
      <ListItemAdornment slot="leadingAdornment">
        <ListAvatar />
      </ListItemAdornment>
    </ListItem>
</List>
`}
  />

  <Typography variant="h4">Nested</Typography>
  <Typography variant="body1">
    You can nest list items or even entire lists under a single <InlineCode>ListItem</InlineCode>.
    The nested element / component needs to indicate it's for the nested slot.
  </Typography>

  <List class="demo-list">
    <ListItem text="Parent" variant="icon">
      <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
        arrow_drop_down
      </ListItemAdornment>
      <List slot="nested" disablePadding>
        <ListItem text="Avatar" variant="avatar">
          <ListItemAdornment slot="leadingAdornment">
            <ListAvatar />
          </ListItemAdornment>
        </ListItem>
        <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text" selected>
          <ListItemAdornment slot="leadingAdornment">
            <ListAvatar />
          </ListItemAdornment>
        </ListItem>
        <ListItem
          text="Avatar"
          variant="avatar"
          secondaryText="Secondary Text"
          disableGutters
          divider
        >
          <ListItemAdornment slot="leadingAdornment">
            <ListAvatar />
          </ListItemAdornment>
        </ListItem>
      </List>
    </ListItem>
  </List>

  <VariantExample
    code={`
  <List class="demo-list">
    <ListItem text="Parent" variant="icon">
      <ListItemAdornment slot="trailingAdornment">
        <IconButton
          iconClass="material-symbols-outlined"
          iconContent="arrow_drop_down"
          iconColor="primary"
        />
      </ListItemAdornment>
      <List slot="nested" disablePadding>
        <ListItem text="Avatar" variant="avatar">
          <ListItemAdornment slot="leadingAdornment">
            <ListAvatar />
          </ListItemAdornment>
        </ListItem>
        <ListItem text="Avatar" variant="avatar" secondaryText="Secondary Text" selected>
          <ListItemAdornment slot="leadingAdornment">
            <ListAvatar />
          </ListItemAdornment>
        </ListItem>
        <ListItem
          text="Avatar"
          variant="avatar"
          secondaryText="Secondary Text"
          disableGutters
          divider
        >
          <ListItemAdornment slot="leadingAdornment">
            <ListAvatar />
          </ListItemAdornment>
        </ListItem>
      </List>
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
          alert('You clicked the drop down arrow. Propagation stopped. No parent event fired.');
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

  <Typography variant="h2">List</Typography>
  <Typography variant="body1">
    The <InlineCode>List</InlineCode> component acts as the base wrapper for
    <InlineCode>ListItem</InlineCode>
    and is used in several other components such as menus, select drop downs, and navigation drawers.
  </Typography>

  <Typography variant="h3">Types</Typography>
  <Typography variant="body1">
    <InlineCode>List</InlineCode> can receive all HTMLAttributes of HTMLUListElement and has one custom
    prop, disablePadding, which removes the default horizontal and vertical padding.
  </Typography>

  <VariantExample
    code={`
export interface ListProps extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
  disablePadding?: boolean;
}
    `}
  />

  <div class="inline-examples">
    <div>
      <Typography variant="h5">No Padding</Typography>
      <List class="demo-list" disablePadding>
        <ListItem text="List Item" />
      </List>
    </div>
    <div>
      <Typography variant="h5">Padding</Typography>

      <List class="demo-list">
        <ListItem text="List Item" selected />
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

  <Typography variant="h2">List Group</Typography>
  <Typography variant="body1">
    If you want to wrap a group of lists together under sub headings, you can use the
    <InlineCode>ListGroup</InlineCode> and <InlineCode>ListSubhHeader</InlineCode> components.
  </Typography>

  <Typography variant="body1">
    Note: we pass the demo-list class to the <InlineCode>ListGroup</InlineCode> so that the containing
    foundation is styled.
  </Typography>

  <ListGroup class="demo-list">
    <ListSubHeader>Settings</ListSubHeader>
    <List>
      <ListItem text="List Item">
        <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
          favorite
        </ListItemAdornment>
      </ListItem>
    </List>
    <ListSubHeader>Preferences</ListSubHeader>
    <List>
      <ListItem text="List ITem">
        <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
          favorite
        </ListItemAdornment>
      </ListItem>
    </List>
  </ListGroup>

  <VariantExample
    code={`
 <ListGroup class="demo-list">
    <ListSubHeader>Settings</ListSubHeader>
    <List>
      <ListItem text="List Item">
        <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
          favorite
        </ListItemAdornment>
      </ListItem>
    </List>
    <ListSubHeader>Preferences</ListSubHeader>
    <List>
      <ListItem text="List ITem">
        <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
          favorite
        </ListItemAdornment>
      </ListItem>
    </List>
</ListGroup>
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
      disableGutters: true
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
                checked={selected}
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
      disableGutters: true
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
                checked={selected}
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
