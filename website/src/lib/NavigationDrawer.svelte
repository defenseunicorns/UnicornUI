<script lang="ts">
  import { Drawer, ListItem, ListSubHeader, Typography } from '@uui';
  import { onMount } from 'svelte';
  import { appStatesStore, updateAppStates } from './stores/nav-drawer-state-store';

  type $$Props = { isDrawerOpen: boolean };
  export let isDrawerOpen = false;

  // Local vars
  let selectedRoute = '';

  const themeRoutestList = ['theme', 'breakpoints', 'scoped-styles', 'typography', 'box', 'paper'];
  const componentRoutesList = [
    'button',
    'icon-button',
    'checkbox',
    'accordion',
    'stepper',
    'dialog',
    'chip',
    'text-field',
    'list',
    'list-group',
    'list-item',
    'menu',
    'drawer'
  ];

  // Functions
  onMount(() => {
    appStatesStore.subscribe((states) => {
      selectedRoute = states.currentRoute;
    });
  });

  function setSelectedRoute(route: string) {
    appStatesStore.update((states) => {
      return updateAppStates({ ...states, currentRoute: route });
    });
  }

  function makeLinkText(route: string) {
    let words = route.split('-');
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
  }
</script>

<Drawer
  elevation={2}
  open={isDrawerOpen}
  ssx={{ $self: { width: '320px', height: 'calc(100vh - 64px)' } }}
>
  <ListSubHeader>Theming</ListSubHeader>
  {#each themeRoutestList as route}
    <ListItem
      selected={selectedRoute === route}
      element="a"
      href="/{route}"
      on:click={(e) => {
        e.stopPropagation();
        setSelectedRoute(route);
      }}
    >
      <Typography>
        {makeLinkText(route)}
      </Typography>
    </ListItem>
  {/each}
  <ListSubHeader>Components</ListSubHeader>
  {#each componentRoutesList as route}
    <ListItem
      selected={selectedRoute === route}
      element="a"
      href="/{route}"
      on:click={(e) => {
        e.stopPropagation();
        setSelectedRoute(route);
      }}
    >
      <Typography>
        {makeLinkText(route)}
      </Typography>
    </ListItem>
  {/each}
</Drawer>
