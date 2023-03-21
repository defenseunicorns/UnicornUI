<script lang="ts">
  import InlineCode from '../../lib/inline-code.svelte';
  import {
    Accordion,
    Box,
    ListGroup,
    List,
    ListItem,
    ListItemAdornment,
    ListSubHeader,
    Typography
  } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import VariantExample from '../../lib/VariantExample.svelte';
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

  <ListGroup class="demo-list">
    <ListSubHeader>List 1</ListSubHeader>
    <List>
      <ListItem text="List Item" divider>
        <ListItemAdornment class="material-symbols-outlined" slot="leading-adornment">
          star
        </ListItemAdornment>
      </ListItem>
    </List>
    <ListSubHeader>List 2</ListSubHeader>
    <List>
      <ListItem text="List Item">
        <ListItemAdornment class="material-symbols-outlined" slot="leading-adornment">
          star
        </ListItemAdornment>
      </ListItem>
    </List>
  </ListGroup>

  <Accordion>
    <Typography variant="h6" slot="headerContent">List Group Code</Typography>
    <Box slot="content">
      <VariantExample
        code={`
        <ListGroup class="demo-list">
          <ListSubHeader>List 1</ListSubHeader>
          <List>
            <ListItem text="List Item"  divider>
              <ListItemAdornment class="material-symbols-outlined" slot="leading-adornment">
                star
              </ListItemAdornment>
            </ListItem>
          </List>
          <ListSubHeader>List 2</ListSubHeader>
          <List>
            <ListItem text="List Item" >
              <ListItemAdornment class="material-symbols-outlined" slot="leading-adornment">
                star
              </ListItemAdornment>
            </ListItem>
          </List>
        </ListGroup>
          `}
      />
    </Box>
  </Accordion>
</DocPage>

<style lang="scss" global>
  .demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
  }
</style>
