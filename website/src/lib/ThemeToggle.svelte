<script lang="ts">
  import { Button } from '@defense-unicorns/unicorn-ui/src/lib';
  import { currentTheme } from './theme/theme-store';
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
