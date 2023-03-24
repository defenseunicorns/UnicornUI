<script lang="ts">
  import { Rail, Paper, Typography, IconButton, List, ListItem, ListItemAdornment } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';

  let open = false;
  function setOpen() {
    open = !open;
  }
</script>

<DocPage>
  <Typography variant="h1">Rail</Typography>

  <Typography variant="h3">Non Expanding</Typography>
  <Paper elevation={2} class="rail-demo-container">
    <Rail>
      <List slot="content" disablePadding>
        <IconButton iconClass="material-symbols-outlined" iconContent="folder" />
        <IconButton iconClass="material-symbols-outlined" iconContent="schedule" />
      </List>
    </Rail>
    <DocPage>
      <Typography variant="h1">Docs</Typography>
    </DocPage>
  </Paper>

  <Typography variant="h3">Expanding</Typography>

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
</DocPage>

<style lang="scss" global>
  .rail-demo-container {
    display: flex;
    width: 500px;
    height: 700px;
    background-color: var(--surface);
    border: 1px solid var(--primary);
  }
</style>
