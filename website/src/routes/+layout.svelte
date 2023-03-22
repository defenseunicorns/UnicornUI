<script lang="ts">
  import '../app.css';
  import 'material-symbols/';
  import { afterUpdate } from 'svelte';
  import ThemeToggle from '$lib/ThemeToggle.svelte';
  import customTypography from '$lib/theme/theme-typography';
  import { Button, Typography, Theme, Box, Drawer, List, ListItem, DrawerHeader } from '@uui';
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

  let selectedRoute = '';
  function setSelectedRoute(route: string) {
    selectedRoute = route;
  }

  const routes = [
    'theme',
    'breakpoints',
    'scoped-styles',
    'box',
    'button',
    'icon-button',
    'accordion',
    'stepper',
    'dialog',
    'typography',
    'chip',
    'text-field',
    'list-item',
    'paper',
    'drawer'
  ];
</script>

<Theme typography={customTypography}>
  <Box class="body-container">
    <Drawer>
      <DrawerHeader title="Components" slot="header" />
      <List slot="content">
        {#each routes as route}
          <ListItem
            selected={selectedRoute === route}
            element="a"
            href="/{route}"
            text={route.toUpperCase()}
            on:click={() => setSelectedRoute(route)}
          />
        {/each}
      </List>
    </Drawer>
    <Box class="main-container">
      <Box
        element="section"
        ssx={{
          $self: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
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
        <Typography variant="h1" style="margin-bottom: unset;margin-top: 2rem;">
          Unicorn UI
        </Typography>
        <Button href="/" {...getVariant(path, '/')}>Home</Button>
        <ThemeToggle />
      </Box>
      <main>
        <slot />
      </main>
    </Box>
  </Box>
</Theme>

<style lang="scss" global>
  @import '@fontsource/roboto';
  @import '@fontsource/roboto/300';
  @import '@fontsource/roboto/500';
  body {
    overflow: hidden;
  }

  .body-container {
    display: flex;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  main {
    padding-bottom: 32px;
  }

  a {
    text-decoration: none;
  }
</style>
