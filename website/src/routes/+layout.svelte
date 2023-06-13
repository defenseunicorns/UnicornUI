<script lang="ts">
  import '../app.css';
  import 'material-symbols/';
  import { afterUpdate } from 'svelte';
  import customTypography from '$lib/theme/theme-typography';
  import { Box, Theme, IconButton, currentTheme, type SupportedThemes } from '@uui';
  import Navbar from '$lib/Navbar.svelte';
  import NavigationDrawer from '$lib/NavigationDrawer.svelte';
  import { goto } from '$app/navigation';

  // Local Vars
  let path = '';
  let windowWidth: number;
  let currTheme: SupportedThemes;

  currentTheme.subscribe((value) => (currTheme = value));

  afterUpdate(() => {
    path = window.location.pathname;
  });

  $: isDrawerOpen = windowWidth && windowWidth > 900 ? true : false;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Theme typography={customTypography}>
  <Navbar>
    <Box
      on:click={() => goto('/')}
      on:keydown={() => goto('/')}
      element="img"
      src={`images/app-logo-${currTheme}.png`}
      alt="unicorn horn logo"
      width={200}
      class="logo"
      ssx={{ '@media (max-width: $md)': { $self: { display: 'none' } } }}
    />

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
