<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { List, ListItem } from '@uui';

  let selectedIndex: number | undefined = 0;

  function setSelected(index: number) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem text="Inbox" selected={selectedIndex === 0} on:click={() => setSelected(0)} />
  <ListItem text="Drafts" selected={selectedIndex === 1} on:click={() => setSelected(1)} />
  <ListItem text="Trash" selected={selectedIndex === 2} on:click={() => setSelected(2)} />
  <ListItem text="Spam" selected={selectedIndex === 3} on:click={() => setSelected(3)} />
</List>

<VariantExample
  code={`
<List class="demo-list">
  <ListItem text="Inbox" selected={selectedIndex === 0} on:click={() => setSelected(0)} />
  <ListItem text="Drafts" selected={selectedIndex === 1} on:click={() => setSelected(1)} />
  <ListItem text="Trash" selected={selectedIndex === 2} on:click={() => setSelected(2)} />
  <ListItem text="Spam" selected={selectedIndex === 3} on:click={() => setSelected(3)} />
</List>
`}
/>
