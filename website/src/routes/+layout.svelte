<script lang="ts">
  import '../app.css';
  import 'material-symbols/';
  import { afterUpdate } from 'svelte';
  import customTypography from '$lib/theme/theme-typography';
  import { Button, Typography, Theme, Box, IconButton, Drawer, List, ListItem } from '@uui';
  import type { ButtonColor, ButtonShape, ButtonVariant } from '@uui';
  import Navbar from '$lib/Navbar.svelte';

  // Local Vars
  let path = '';
  let selectedRoute = '';
  let isDrawerOpen = true;
  let windowWidth: number;
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
    'drawer',
    'rail'
  ];

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

  function setSelectedRoute(route: string) {
    selectedRoute = route;
  }

  function ctlDrawer() {
    isDrawerOpen = !isDrawerOpen;
  }

  function trackScreenSize() {
    if (windowWidth < 900) isDrawerOpen = false;
    else if (windowWidth > 900) isDrawerOpen = true;
  }
</script>

<svelte:window bind:innerWidth={windowWidth} on:resize={trackScreenSize} />

<Theme typography={customTypography}>
  <Navbar>
    <IconButton
      on:click={ctlDrawer}
      iconContent="menu"
      iconClass="material-symbols-outlined"
      ssx={{ $md: { $self: { display: 'none !important' } } }}
    />
  </Navbar>
  <Box class="body-container">
    <Drawer elevation={2} open={isDrawerOpen} ssx={{ $self: { height: 'calc(100vh - 56px)' } }}>
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
    width: 100%;
    height: 100vh;
    align-items: center;
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
