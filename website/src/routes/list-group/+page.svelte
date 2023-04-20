<script lang="ts">
  import InlineCode from '../../lib/inline-code.svelte';
  import { Accordion, Box, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';
  import LIST_GROUP_EXP from './list-group-exp.svelte?raw';
  import ListGroupExp from './list-group-exp.svelte';
</script>

<DocPage>
  <Typography variant="h2">List Group</Typography>
  <Typography variant="body1">
    If you want to wrap a group of lists together under sub headings, you can use the
    <InlineCode>ListGroup</InlineCode> and <InlineCode>ListSubhHeader</InlineCode> components.
  </Typography>

  <Typography variant="body1">
    Note: we pass the demo-list class to the <InlineCode>ListGroup</InlineCode> so that the containing
    foundation is styled.
  </Typography>

  <ListGroupExp />

  <Accordion>
    <Typography variant="h6" slot="headerContent">List Group Code</Typography>
    <Box slot="content">
      <VariantExample code={LIST_GROUP_EXP} />
    </Box>
  </Accordion>
</DocPage>

<style lang="scss" global>
  .demo-list-group {
    width: 308px;
    border: 1px solid gray;
    background-color: var(--surface);
  }
</style>
