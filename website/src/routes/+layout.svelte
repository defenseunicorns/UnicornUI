<script lang="ts">
  import '../app.css';
  import 'material-symbols/';
  import { afterUpdate } from 'svelte';
  import ThemeToggle from '$lib/ThemeToggle.svelte';
  import customTypography from '$lib/theme/theme-typography';
  import { Button, Typography, Theme, Box, Drawer, List, ListItem } from '@uui';
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
  <Box class="body-container">
    <Drawer>
      <List slot="content">
        <ListItem href="/theme" text="Theme" />
        <ListItem href="/scoped-styles" text="Scoped Styles" />
        <ListItem href="/breakpoints" text="Breakpoints" />
        <ListItem href="/box" text="Box" />
        <ListItem href="/theme" text="Theme" />
        <ListItem href="/button" text="Button" />
        <ListItem href="/icon-button" text="Icon Button" />
        <ListItem href="/accordion" text="Accordion" />
        <ListItem href="/stepper" text="Stepper" />
        <ListItem href="/dialog" text="Dialog" />
        <ListItem href="/typography" text="Typography" />
        <ListItem href="/chip" text="Chip" />
        <ListItem href="/text-field" text="Text Field" />
        <ListItem href="/list-item" text="List Item" />
        <ListItem href="/paper" text="Paper" />
        <ListItem href="/drawer" text="Drawer" />
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
</style>
