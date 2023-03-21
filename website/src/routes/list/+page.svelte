<script lang="ts">
  import InlineCode from '../../lib/inline-code.svelte';
  import { List, ListItem, Typography } from '@uui';
  import VariantExample from '../../lib/VariantExample.svelte';
  import ListSubheader from './list-subheader.svelte';
  import DocPage from '../../lib/doc-page.svelte';
</script>

<DocPage>
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
    The <InlineCode>ListSubhHeader</InlineCode> can be used with single lists or in list groups.
  </Typography>

  <ListSubheader />
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
