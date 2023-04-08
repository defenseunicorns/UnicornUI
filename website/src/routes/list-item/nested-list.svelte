<script lang="ts">
  import { List, ListItem, ListItemAdornment } from '@uui';

  let selectedIndex: number | undefined = 2;

  function setSelected(index: number | undefined) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem text="Sent Mail" selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      send
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Drafts" selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      drafts
    </ListItemAdornment>
  </ListItem>
  <ListItem text="Inbox" selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
      inbox
    </ListItemAdornment>
    <svelte:fragment slot="trailing-adornment">
      {#if selectedIndex === 2}
        <ListItemAdornment
          class="material-symbols-outlined"
          on:click={(e) => {
            e.stopPropagation();
            setSelected(undefined);
          }}
        >
          expand_less
        </ListItemAdornment>
      {:else}
        <ListItemAdornment
          class="material-symbols-outlined"
          on:click={(e) => {
            e.stopPropagation();
            setSelected(2);
          }}
        >
          expand_more
        </ListItemAdornment>
      {/if}
    </svelte:fragment>
    <ListItem text="Starred" slot="nested-content">
      <ListItemAdornment slot="leading-adornment" class="material-symbols-outlined">
        star
      </ListItemAdornment>
    </ListItem>
  </ListItem>
</List>
