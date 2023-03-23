<script lang="ts">
  import { Rail, Paper, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';

  let open = false;
  function setOpen() {
    open = !open;
  }
</script>

<DocPage>
  <Typography variant="h1">Rail</Typography>

  <Paper elevation={24} class="rail-demo-container">
    <Rail on:click={setOpen} {open} />
  </Paper>
</DocPage>

<style lang="scss">
  //   .rail-demo-container {
  //     width: 500px;
  //     height: 700px;
  //     background-color: var(--surface);
  //     border: 1px solid var(--primary);
  //   }
</style>
