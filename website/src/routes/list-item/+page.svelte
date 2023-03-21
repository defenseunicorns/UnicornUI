<script lang="ts">
  import { Typography, List, ListItem } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';
  import InlineCode from '../../lib/inline-code.svelte';
  import SimpleList from './simple-list.svelte';
  import AvatarList from './avatar-list.svelte';
  import CheckboxList from './checkbox-list.svelte';
  import CombinedList from './combined-list.svelte';
  import NestedList from './nested-list.svelte';
  import EventControlList from './event-control-list.svelte';
  import DeveloperExperience from './developer-experience.svelte';
  import LeadingIconList from './leading-icon-list.svelte';
  import TrailingIconList from './trailing-icon-list.svelte';
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

  <Typography variant="h5">
    Simple:
    <Typography variant="h6">
      The simple <InlineCode>ListItem</InlineCode> consists of only single-line or two-line text.
    </Typography>
  </Typography>

  <SimpleList />

  <Typography variant="h5">
    Divider
    <Typography variant="h6">
      A divider can be added to the bottom of any <InlineCode>ListItem</InlineCode> via the divider prop,
      whether it is simple or has adornments.
    </Typography>
  </Typography>

  <List class="demo-list">
    <ListItem text="List Item" divider />
    <ListItem text="List Item" />
  </List>

  <VariantExample
    code={`
   <List class="demo-list">
    <ListItem text="List Item" divider />
    <ListItem text="List Item" />
</List>
  `}
  />

  <Typography variant="h5">
    Disabled Gutters:
    <Typography variant="h6">
      Disable the left padding of a <InlineCode>ListItem</InlineCode> via the disableGutters prop.
    </Typography>
  </Typography>

  <List class="demo-list">
    <ListItem text="List Item" divider />
    <ListItem text="List Item" disableGutters />
  </List>

  <VariantExample
    code={`
  <List class="demo-list">
    <ListItem text="List Item" divider/>
    <ListItem text="List Item" disableGutters />
</List>
  `}
  />

  <Typography variant="h3">Slots</Typography>
  <Typography variant="body1">
    <InlineCode>ListItem</InlineCode> has three named slots:
    <ul>
      <li>leadingAdornment</li>
      <li>trailingAdornment</li>
      <li>nestedContent</li>
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
  <slot name="leading-adornment" />
    ....
  <slot name="trailing-adornment" />
</li>
{#if selected && $$slots["nested-content"]}
    <div ...>
      <slot name="nested-content" />
    </div>
{/if}
  
  `}
  />

  <Typography variant="h5">
    With Leading Icon:
    <Typography variant="h6" />
  </Typography>

  <LeadingIconList />

  <Typography variant="h5">
    With Trailing Icon:
    <Typography variant="h6" />
  </Typography>

  <TrailingIconList />

  <Typography variant="h5">With Avatar:</Typography>

  <AvatarList />

  <Typography variant="h5">With Checkbox:</Typography>

  <CheckboxList />

  <Typography variant="h5">Combined:</Typography>

  <CombinedList />

  <Typography variant="h5">
    With Nested:
    <Typography variant="h6">
      List items can accept nested content, which could be a single
      <InlineCode>ListItem</InlineCode> or an entire list.
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

  <DeveloperExperience />
</DocPage>

<style lang="scss" global>
  .demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
  }
</style>
