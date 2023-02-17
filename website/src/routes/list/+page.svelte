<script lang="ts">
  import { List, Typography } from '@uui';
</script>

<section>
  <Typography variant="h1">List Item</Typography>
</section>

<section>
  <Typography variant="h6">Single-Line</Typography>
  <List
    class="demo-list"
    listItems={[
      { text: 'List Item' },
      { text: 'List Item', selected: true },
      { text: 'List Item', disabled: true }
    ]}
  />

  <Typography variant="h6">Two-Line</Typography>
  <List
    class="demo-list"
    listItems={[
      { text: 'List Item', secondaryText: 'Secondary Text' },
      { text: 'List Item', secondaryText: 'Secondary Text', selected: true },
      { text: 'List Item', secondaryText: 'Secondary Text', disabled: true }
    ]}
  />

  <Typography variant="h6">CheckBox</Typography>
  <List
    class="mdc-deprecated-list demo-list"
    listItems={[
      { text: 'List Item', checkBox: 'leading' },
      { text: 'List Item', checkBox: 'trailing', selected: true },
      { text: 'List Item', checkBox: 'leading', disabled: true }
    ]}
  />
</section>

<style lang="scss" global>
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
