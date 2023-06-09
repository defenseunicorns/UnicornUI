<script lang="ts">
  import '../app.css';
  import 'material-symbols/';
  import { afterUpdate } from 'svelte';
  import customTypography from '$lib/theme/theme-typography';
  import { Box, Button, Typography, Theme, IconButton } from '@uui';
  import type { ButtonColor, ButtonShape, ButtonVariant } from '@uui';
  import Navbar from '$lib/Navbar.svelte';
  import NavigationDrawer from '$lib/NavigationDrawer.svelte';
  import { appStatesStore, updateAppStates } from '$lib/stores/nav-drawer-state-store';

  // Local Vars
  let path = '';
  let windowWidth: number;

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

  function setCurrRouteState() {
    appStatesStore.update((states) => {
      return updateAppStates({ ...states, currentRoute: '/' });
    });
  }

  $: isDrawerOpen = windowWidth && windowWidth > 900 ? true : false;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Theme typography={customTypography}>
  <Navbar>
    <a href="/" on:click={setCurrRouteState}>
      <Box
        element="img"
        src="images/app-logo.png"
        alt="unicorn horn logo"
        width={200}
        class="logo"
        ssx={{ '@media (max-width: $md)': { $self: { display: 'none' } } }}
      />
    </a>
    <IconButton
      on:click={() => (isDrawerOpen = !isDrawerOpen)}
      iconContent="menu"
      iconClass="material-symbols-outlined"
      ssx={{ $md: { $self: { display: 'none !important' } } }}
    />
  </Navbar>
  <Box class="body-container">
    <NavigationDrawer {isDrawerOpen} />
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
      />
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

  .logo {
    margin-left: 1rem;
  }
</style>
