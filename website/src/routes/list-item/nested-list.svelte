<script lang="ts">
  import { List, ListItem, ListItemAdornment, Typography } from '@uui';

  let selectedIndex: number | undefined = 2;

  function setSelected(index: number | undefined) {
    selectedIndex = index;
  }
</script>

<List class="demo-list">
  <ListItem selected={selectedIndex === 0} on:click={() => setSelected(0)}>
    <Typography>Sent Mail</Typography>
    <ListItemAdornment slot="leading" class="material-symbols-outlined">send</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 1} on:click={() => setSelected(1)}>
    <Typography>Drafts</Typography>

    <ListItemAdornment slot="leading" class="material-symbols-outlined">drafts</ListItemAdornment>
  </ListItem>
  <ListItem selected={selectedIndex === 2} on:click={() => setSelected(2)}>
    <Typography>Inbox</Typography>

    <ListItemAdornment slot="leading" class="material-symbols-outlined">inbox</ListItemAdornment>
    <svelte:fragment slot="trailing">
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
    <ListItem slot="sublist">
      <Typography>Starred</Typography>
      <ListItemAdornment slot="leading" class="material-symbols-outlined">star</ListItemAdornment>
    </ListItem>
  </ListItem>
</List>
