<script lang="ts">
  import { getPreferredTheme, Theme, type PreferredTheme } from '$lib';
  import { onMount } from 'svelte';

  let theme: PreferredTheme;

  onMount(() => {
    theme = getPreferredTheme(window);
  });
</script>

<Theme {theme} />
