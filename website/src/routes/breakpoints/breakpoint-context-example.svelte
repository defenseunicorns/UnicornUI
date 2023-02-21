<script lang="ts">
  import { BREAKPOINT_CONTEXT, type Breakpoints, Box, Typography } from '@uui';

  const breakpoints: Breakpoints = BREAKPOINT_CONTEXT.getBreakpoints();
</script>

<Box element="ul">
  {#each Object.entries(breakpoints) as breakpoint}
    <Typography element="li">{breakpoint[0]}: {breakpoint[1]}</Typography>
  {/each}
</Box>
