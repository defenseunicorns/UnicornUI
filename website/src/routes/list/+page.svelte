<script lang="ts">
  import InlineCode from '../../lib/inline-code.svelte';
  import { List, ListSubHeader, Paper, Typography } from '@uui';
  import LIST_TYPES from '@uui/List/List.types.d.ts?raw';
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import ListExpItems from './list-exp-items.svelte';
  import Accordion from '@defense-unicorns/unicorn-ui/src/lib/Accordion/accordion.svelte';
  import ListPaddingExp from './list-padding-exp.svelte';
  import LIST_PADDING_EXPS from './list-padding-exp.svelte?raw';
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
    <InlineCode>List</InlineCode> extends PapersProps and has one custom prop, disablePadding, which
    removes the default horizontal and vertical padding.
  </Typography>

  <VariantExample code={LIST_TYPES} />

  <ListPaddingExp />
  <Accordion>
    <Typography variant="h6" slot="headerContent">Padding Code</Typography>
    <VariantExample slot="content" code={LIST_PADDING_EXPS} />
  </Accordion>

  <Typography variant="h3">Slots</Typography>

  <Typography variant="body1">
    <InlineCode>List</InlineCode> utilizes a default slot for any number of child components.
  </Typography>

  <VariantExample
    code={`
<Paper ...> 
  <slot />
</Paper>
`}
  />

  <Typography variant="h3">Styles</Typography>
  <Typography variant="body1">
    Other than the default padding, <InlineCode>List</InlineCode> comes as a blank canvas that makes
    use of whatever surface it's placed on as well as any custom classes provided to it.
  </Typography>

  <List class="list-exp">
    <ListExpItems />
  </List>

  <Paper
    elevation={10}
    ssx={{
      $self: {
        height: '15rem',
        width: '20rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }}
  >
    <List class="list-exp">
      <ListExpItems />
    </List>
  </Paper>

  <Accordion>
    <Typography variant="h6" slot="headerContent">Styling Code</Typography>
    <VariantExample
      slot="content"
      code={`
  <List class="list-exp">
  <ListExpItems />
</List>

<Paper
  elevation={10}
  ssx={{
    $self: {
      height: '15rem',
      width: '20rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }}  >
  <List class="list-exp">
    <ListExpItems />
  </List>
</Paper>`}
    />
  </Accordion>

  <Typography variant="h4">Subheader</Typography>
  <Typography variant="body1">
    The <InlineCode>ListSubhHeader</InlineCode> can be used with single lists or in list groups.
  </Typography>

  <List class="list-exp">
    <ListSubHeader>Settings</ListSubHeader>
    <ListExpItems />
  </List>

  <Accordion>
    <Typography variant="h6" slot="headerContent">Subheader Code</Typography>
    <VariantExample
      slot="content"
      code={`
      <List class="list-exp">
  <ListSubHeader>Settings</ListSubHeader>
  <ListExpItems />
</List>
      `}
    />
  </Accordion>
</DocPage>

<style lang="scss" global>
  .list-exp {
    width: 308px;
    border: 1px solid gray;
  }
</style>
