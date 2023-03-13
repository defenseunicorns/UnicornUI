<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
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
</script>

<ListGroup class="demo-list">
  <ListSubHeader>List 1</ListSubHeader>
  <List>
    <ListItem text="List Item" divider>
      <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
        star
      </ListItemAdornment>
    </ListItem>
  </List>
  <ListSubHeader>List 2</ListSubHeader>
  <List>
    <ListItem text="List Item">
      <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
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
            <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
              star
            </ListItemAdornment>
          </ListItem>
        </List>
        <ListSubHeader>List 2</ListSubHeader>
        <List>
          <ListItem text="List Item" >
            <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
              star
            </ListItemAdornment>
          </ListItem>
        </List>
      </ListGroup>
        `}
    />
  </Box>
</Accordion>
