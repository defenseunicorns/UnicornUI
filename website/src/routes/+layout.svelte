<script lang="ts">
  import '../app.css';
  import 'material-symbols/';
  import { afterUpdate } from 'svelte';
  import ThemeToggle from '$lib/ThemeToggle.svelte';
  import customTypography from '$lib/theme/theme-typography';
  import { Button, Typography, Theme, Box } from '@uui';
  import type { ButtonColor, ButtonShape, ButtonVariant } from '@uui';

  let path = '';

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

<Theme typography={customTypography}>
  <Box
    element="section"
    ssx={{
      $self: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        '& .component-list': {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem'
        }
      },
      $xs: {
        $self: {
          margin: '0 2rem'
        }
      },
      $md: {
        $self: {
          margin: '0 15%'
        }
      }
    }}
  >
    <Typography variant="h1" style="margin-bottom: unset;margin-top: 2rem;">Unicorn UI</Typography>
    <Button href="/" {...getVariant(path, '/')}>Home</Button>
    <ThemeToggle />
    <Typography variant="h2">Components</Typography>
    <div class="component-list">
      <Button href="/theme" {...getVariant(path, '/theme')}>Theme</Button>
      <Button href="/scoped-styles" {...getVariant(path, '/scoped-styles')}>Scoped Styles</Button>
      <Button href="/breakpoints" {...getVariant(path, '/breakpoints')}>Breakpoints</Button>
      <Button href="/box" {...getVariant(path, '/box')}>Box</Button>
      <Button href="/button" {...getVariant(path, '/button')}>Button</Button>
      <Button href="/icon-button" {...getVariant(path, '/icon-button')}>Icon Button</Button>
      <Button href="/accordion" {...getVariant(path, '/accordion')}>Accordion</Button>
      <Button href="/stepper" {...getVariant(path, '/stepper')}>Stepper</Button>
      <Button href="/dialog" {...getVariant(path, '/dialog')}>Dialog</Button>
      <Button href="/typography" {...getVariant(path, '/typography')}>Typography</Button>
      <Button href="/chip" {...getVariant(path, '/chip')}>Chip</Button>
      <Button href="/text-field" {...getVariant(path, '/text-field')}>Text Field</Button>
      <Button href="/list" {...getVariant(path, '/list')}>List</Button>
      <Button href="/list-group" {...getVariant(path, '/list-group')}>List Group</Button>
      <Button href="/list-item" {...getVariant(path, '/list-item')}>List Item</Button>
      <Button href="/paper" {...getVariant(path, '/paper')}>Paper</Button>
    </div>
  </Box>
  <main>
    <slot />
  </main>
</Theme>

<style>
  @import '@fontsource/roboto';
  @import '@fontsource/roboto/300';
  @import '@fontsource/roboto/500';

  main {
    padding-bottom: 32px;
  }
</style>
