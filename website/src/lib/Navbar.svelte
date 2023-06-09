<script lang="ts">
  import { Paper, currentTheme, IconButton, Box } from '@uui';

  function changeTheme() {
    currentTheme.update((theme) => {
      return theme === 'dark' ? 'light' : 'dark';
    });
  }
</script>

<Paper elevation={4} square class="navbar">
  <slot />
  <Box ssx={{ $self: { width: '100%', display: 'flex', 'justify-content': 'end' } }}>
    <IconButton
      on:click={changeTheme}
      iconContent="dark_mode"
      toggledIconContent="light_mode"
      toggleable
      toggled={$currentTheme === 'dark'}
      iconClass="material-symbols-outlined"
      toggledIconClass="material-symbols-outlined"
    />
  </Box>
</Paper>

<style>
  :global(.navbar) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    height: 3.5rem;
    width: 100%;
    z-index: 10;
  }
</style>
