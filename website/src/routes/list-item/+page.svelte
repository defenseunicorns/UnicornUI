<script lang="ts">
  import { Typography, List, ListItem } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';
  import InlineCode from '../../lib/inline-code.svelte';
  import SimpleList from './simple-list.svelte';
  import IconList from './icon-list.svelte';
  import AvatarList from './avatar-list.svelte';
  import CheckboxList from './checkbox-list.svelte';
  import CombinedList from './combined-list.svelte';
  import NestedList from './nested-list.svelte';
  import EventControlList from './event-control-list.svelte';
  import ListSubheader from './list-subheader.svelte';
  import ListGroupExample from './list-group-example.svelte';
  import DeveloperExpierience from './developer-expierience.svelte';
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
    <InlineCode>ListItem</InlineCode> has several optional props along with one required (text).
  </Typography>

  <VariantExample
    code={`

export interface ListItemProps
  extends svelte.JSX.IntrinsicAttributes<svelte.JSX.HTMLAttributes<HTMLLIElement>> 
{
  text: string;
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
    <InlineCode>ListItem</InlineCode> has three named slots:
    <ul>
      <li>leadingAdornment</li>
      <li>trailingAdornment</li>
      <li>nested</li>
    </ul>
  </Typography>
  <Typography variant="body1">
    The leading and trailing adornments can be icons or avatars, or actions like checkboxes, radio
    buttons, and icon buttons. What is passed to these slots, relates directly to the
    <InlineCode>ListItem</InlineCode> variant prop. Currently they also support two slot properties --
    selected and disabled. This allows for slightly easier synchronization of parent and child states.
    <br />
    <br />
    To pass adornments or content to these slots, you need to use the
    <InlineCode>ListItemAdornment</InlineCode> component.
  </Typography>

  <Typography>
    Also of note, the showing of nested content is controlled by the selected state of
    <InlineCode>ListItem</InlineCode> as well as the presence of an element designated with
    <InlineCode>slot="nested"</InlineCode>.
  </Typography>

  <VariantExample
    code={` 
  <li ...>
  <slot name="leadingAdornment" />
    ....
  <slot name="trailingAdornment" />
</li>
{#if selected && $$slots.nested}
    <div ...>
      <slot name="nested" />
    </div>
{/if}
  
  `}
  />

  <Typography variant="h4">Variants and Corresponding Slots</Typography>

  <Typography variant="h5">
    Simple:
    <Typography variant="h6">
      This variant does not directly relate to a named slot as "icon", "avatar", and "action" do.
    </Typography>
  </Typography>
  <Typography variant="body1">
    The simple <InlineCode>ListItem</InlineCode> consists of text and no icons, images, avatars, or actions.
    It can be either single line or two line.
  </Typography>

  <SimpleList />

  <Typography variant="h5">
    Icon:
    <Typography variant="h6">
      This variant relates to icons or actions passed in either the leading or trailing adornment
      positions.
    </Typography>
  </Typography>

  <IconList />

  <Typography variant="h5">
    Avatar:
    <Typography variant="h6">
      This variant relates to avatars or images passed to the leading adornment position.
    </Typography>
  </Typography>

  <AvatarList />

  <Typography variant="h5">
    Action:
    <Typography variant="h6">
      This variant relates to actions like checkboxes, radio button, and icon buttons in either the
      leading or trailing position.
    </Typography>
  </Typography>

  <CheckboxList />

  <Typography variant="h5">
    Combined:
    <Typography variant="h6">
      Because the ListItemVariant is mainly for styling the size of the ListItem wrapper, if you
      want to combine variants we recommend using the type of the leading adornment as the <InlineCode
        >ListItem</InlineCode
      > variant.
    </Typography>
  </Typography>

  <CombinedList />

  <Typography variant="h5">
    Nested:
    <Typography variant="h6">
      The nested slot does not directly relate to any of the <InlineCode>ListItem</InlineCode> variants
      but can contain ListItems that of course use those variants.
    </Typography>
  </Typography>

  <NestedList />

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

  <EventControlList />

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
    the style by passing it a custom class.
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

  <Typography variant="h4">Subheader</Typography>
  <Typography variant="body1">
    The <InlineCode>ListSubhHeader</InlineCode> can be used with single lists, or as we'll see below
    in list groups.
  </Typography>

  <ListSubheader />

  <Typography variant="h2">List Group</Typography>
  <Typography variant="body1">
    If you want to wrap a group of lists together under sub headings, you can use the
    <InlineCode>ListGroup</InlineCode> and <InlineCode>ListSubhHeader</InlineCode> components.
  </Typography>

  <Typography variant="body1">
    Note: we pass the demo-list class to the <InlineCode>ListGroup</InlineCode> so that the containing
    foundation is styled.
  </Typography>

  <ListGroupExample />

  <DeveloperExpierience />
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
