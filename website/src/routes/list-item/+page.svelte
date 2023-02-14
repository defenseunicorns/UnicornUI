<script lang="ts">
  import { ListItem, Typography } from '@uui';
</script>

<section>
  <Typography variant="h1">List Item</Typography>
</section>

<section>
  <Typography variant="h6">Single-Line</Typography>
  <ul class="mdc-deprecated-list demo-list">
    <ListItem text="List Item" />
    <ListItem text="List Item" />
    <ListItem text="List Item" selected={true} />
    <ListItem text="List Item" disabled={true} />
  </ul>

  <Typography variant="h6">Two-Line</Typography>
  <ul class="mdc-deprecated-list demo-list">
    <ListItem text="List Item" secondaryText="Secondary Text" />
    <ListItem text="List Item" secondaryText="Secondary Text" />
    <ListItem text="List Item" secondaryText="Secondary Text" selected={true} />
    <ListItem text="List Item" secondaryText="Secondary Text" disabled={true} />
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
