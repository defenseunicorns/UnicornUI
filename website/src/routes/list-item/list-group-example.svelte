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
    <ListItem text="List Item" variant="icon" divider>
      <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
        star
      </ListItemAdornment>
    </ListItem>
  </List>
  <ListSubHeader>List 2</ListSubHeader>
  <List>
    <ListItem text="List ITem" variant="icon">
      <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
        star
      </ListItemAdornment>
    </ListItem>
  </List>
</ListGroup>

<Accordion>
  <Typography variant="h6" slot="headerContent">List Group code example</Typography>
  <Box slot="content">
    <VariantExample
      code={`
      <ListGroup class="demo-list">
        <ListSubHeader>List 1</ListSubHeader>
        <List>
          <ListItem text="List Item" variant="icon" divider>
            <ListItemAdornment class="material-symbols-outlined" slot="leadingAdornment">
              star
            </ListItemAdornment>
          </ListItem>
        </List>
        <ListSubHeader>List 2</ListSubHeader>
        <List>
          <ListItem text="List ITem" variant="icon">
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
