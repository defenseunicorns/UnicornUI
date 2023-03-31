<script lang="ts">
  import { Paper } from '@uui';
</script>

{#each Array(25) as _, i}
  <Paper elevation={i}>
    {i}dp
  </Paper>
{/each}
