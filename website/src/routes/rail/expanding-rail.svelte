<script lang="ts">
  import DocPage from '../../lib/doc-page.svelte';
  import { Paper, Rail, IconButton, List, ListItem, ListItemAdornment, Typography } from '@uui';

  let open = false;
  function setOpen() {
    open = !open;
  }
</script>

<Paper elevation={2} class="rail-demo-container">
  <Rail {open}>
    <IconButton
      iconClass="material-symbols-outlined"
      iconContent="menu"
      slot="header"
      on:click={setOpen}
    />
    <svelte:fragment slot="content">
      {#if open}
        <List>
          <ListItem text="Data">
            <ListItemAdornment slot="leadingAdornment">
              <IconButton iconClass="material-symbols-outlined" iconContent="folder" />
            </ListItemAdornment>
          </ListItem>
          <ListItem text="Data">
            <ListItemAdornment slot="leadingAdornment">
              <IconButton iconClass="material-symbols-outlined" iconContent="schedule" />
            </ListItemAdornment>
          </ListItem>
        </List>
      {:else}
        <List disablePadding>
          <IconButton iconClass="material-symbols-outlined" iconContent="folder" />
          <IconButton iconClass="material-symbols-outlined" iconContent="schedule" />
        </List>
      {/if}
    </svelte:fragment>
  </Rail>
  <DocPage>
    <Typography variant="h1">Docs</Typography>
  </DocPage>
</Paper>
