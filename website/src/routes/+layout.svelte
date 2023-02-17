<script lang="ts">
  import '../app.css';
  import 'material-symbols/';
  import { afterUpdate, onMount } from 'svelte';
  import ThemeToggle from '$lib/ThemeToggle.svelte';
  import { currentTheme } from '$lib/theme/theme-store';
  import customTypography from '$lib/theme/theme-typography';
  import { Button, getPreferredTheme, Typography, Theme } from '@uui';
  import type { ButtonColor, ButtonShape, ButtonVariant } from '@uui';

  let path = '';
  let currentThemeVal: string;

  currentTheme.subscribe((value) => {
    currentThemeVal = value;
  });

  // Lifecycle
  onMount(() => {
    const themePreference = getPreferredTheme(window);
    if (themePreference) {
      currentTheme.set(themePreference);
    }
  });

  afterUpdate(() => {
    path = window.location.pathname;
  });

  // Functions
  function getVariant(
    pathname: string,
    currentPath: string
  ): { variant: ButtonVariant; color: ButtonColor; shape: ButtonShape } {
    return pathname === currentPath
      ? { variant: 'raised', color: 'secondary', shape: 'squared' }
      : { variant: 'flat', color: 'primary', shape: 'squared' };
  }
</script>

<Theme theme={currentThemeVal} typography={customTypography}>
  <section class="components">
    <Typography variant="h1">Unicorn UI</Typography>
    <Button href="/" {...getVariant(path, '/')}>Home</Button>
    <ThemeToggle />
    <Typography variant="h2">Components</Typography>
    <div class="component-list">
      <Button href="/theme" {...getVariant(path, '/theme')}>Theme</Button>
      <Button href="/box" {...getVariant(path, '/box')}>Box</Button>
      <Button href="/button" {...getVariant(path, '/button')}>Button</Button>
      <Button href="/icon-button" {...getVariant(path, '/icon-button')}>Icon Button</Button>
      <Button href="/accordion" {...getVariant(path, '/accordion')}>Accordion</Button>
      <Button href="/stepper" {...getVariant(path, '/stepper')}>Stepper</Button>
      <Button href="/dialog" {...getVariant(path, '/dialog')}>Dialog</Button>
      <Button href="/typography" {...getVariant(path, '/typography')}>Typography</Button>
      <Button href="/chip" {...getVariant(path, '/chip')}>Chip</Button>
      <Button href="/text-field" {...getVariant(path, '/text-field')}>Text Field</Button>
      <Button href="/scoped-styles" {...getVariant(path, '/scoped-styles')}>Scoped Styles</Button>
      <Button href="/list-item" {...getVariant(path, '/list-item')}>List Item</Button>
    </div>
  </section>
  <main>
    <slot />
  </main>
</Theme>

<style>
  @import '@fontsource/roboto';
  @import '@fontsource/roboto/300';
  @import '@fontsource/roboto/500';
  .components {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .component-list {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  main {
    padding-bottom: 32px;
  }
</style>
