<script lang="ts">
  import { Drawer, ListItem, ListSubHeader, Typography } from '@uui';
  import { goto } from '$app/navigation';

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
      on:click={(e) => {
        e.stopPropagation();
        selectedRoute = route;
        goto(`/${route}`);
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
      on:click={(e) => {
        e.stopPropagation();
        selectedRoute = route;
        goto(`/${route}`);
      }}
    >
      <Typography>
        {makeLinkText(route)}
      </Typography>
    </ListItem>
  {/each}
</Drawer>
