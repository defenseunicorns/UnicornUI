<script lang="ts">
  import { ListItem, Typography } from '@uui';
</script>

<section>
  <Typography variant="h1">List Item</Typography>
  <ul class="mdc-deprecated-list demo-list">
    <ListItem text="List Item" />
    <ListItem text="List Item" />
  </ul>
</section>

<style lang="scss">
  @use '@material/list';
  @include list.deprecated-core-styles;
  section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 4rem;
    align-items: center;
  }

  .demo-list {
    width: 300px;
    border: 1px solid gray;
    background-color: var(--surface);
  }
</style>
