<script lang="ts">
  import { ListItem, Typography } from '@uui';
</script>

<section>
  <Typography variant="h1">List Item</Typography>
  <ul>
    <ListItem text="List Item" />
  </ul>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 4rem;
    align-items: center;
  }
</style>
