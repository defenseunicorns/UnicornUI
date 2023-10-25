<script lang="ts">
  import { List, ListItem, Typography } from '@uui';
</script>

<div class="inline-examples">
  <div>
    <Typography variant="h5">No Padding</Typography>
    <List class="list-exp" disablePadding>
      <ListItem><Typography>List Item</Typography></ListItem>
    </List>
  </div>
  <div>
    <Typography variant="h5">Padding</Typography>
    <List class="list-exp">
      <ListItem selected><Typography>List Item</Typography></ListItem>
    </List>
  </div>
</div>

<style>
  .inline-examples {
    display: flex;
    justify-content: space-around;
  }
</style>
