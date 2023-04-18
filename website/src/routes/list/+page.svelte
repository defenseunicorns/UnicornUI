<script lang="ts">
  import InlineCode from '../../lib/inline-code.svelte';
  import { List, ListItem, ListItemTypography, Typography } from '@uui';
  import LIST_TYPES from '@uui/List/List.types.d.ts?raw';
  import LIST_SUBHEADER_EXAMPLE from './list-subheader.svelte?raw';
  import VariantExample from '../../lib/VariantExample.svelte';
  import ListSubheader from './list-subheader.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import AccordionCodeWrapper from '$lib/accordion-code-wrapper.svelte';
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
    <InlineCode>List</InlineCode> extends BoxProps and has one custom prop, disablePadding, which removes
    the default horizontal and vertical padding.
  </Typography>

  <VariantExample code={LIST_TYPES} />

  <div class="inline-examples">
    <div>
      <Typography variant="h5">No Padding</Typography>
      <List class="demo-list" disablePadding>
        <ListItem><ListItemTypography>List Item</ListItemTypography></ListItem>
      </List>
    </div>
    <div>
      <Typography variant="h5">Padding</Typography>
      <List class="demo-list">
        <ListItem selected><ListItemTypography>List Item</ListItemTypography></ListItem>
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
<Box ...> 
  <slot />
</Box>
`}
  />

  <Typography variant="h4">Subheader</Typography>
  <Typography variant="body1">
    The <InlineCode>ListSubhHeader</InlineCode> can be used with single lists or in list groups.
  </Typography>

  <ListSubheader />
  <AccordionCodeWrapper rawCodeExample={LIST_SUBHEADER_EXAMPLE} header="List with Subheader Code" />
</DocPage>

<style lang="scss" global>
  .demo-list {
    width: 308px;
    border: 1px solid gray;
    background-color: var(--surface);
  }

  .inline-examples {
    display: flex;
    justify-content: space-around;
  }
</style>
