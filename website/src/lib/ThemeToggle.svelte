<script lang="ts">
  import { Button, currentTheme } from '@uui';

  let currentThemeValue: string;
  currentTheme.subscribe((val) => {
    currentThemeValue = val;
  });

  function toggleTheme() {
    if (currentThemeValue === 'dark') currentTheme.set('light');
    else currentTheme.set('dark');
  }
</script>

<Button
  on:click={toggleTheme}
  variant="raised"
  color="secondary"
  style="display: block; margin-left: auto; margin-right: auto;">Switch Theme</Button
>
