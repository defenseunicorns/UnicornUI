<script lang="ts">
  import { Box, Drawer, ListItem, ListItemAdornment, Typography } from '@uui';
  import { onMount } from 'svelte';
  import { appStatesStore, updateAppStates } from './stores/nav-drawer-state-store';

  type $$Props = { isDrawerOpen: boolean };
  export let isDrawerOpen = false;

  // Local vars
  let selectedRoute = '';
  let themingListOpen = false;
  let componentListOpen = false;

  const themeRoutestList = ['theme', 'breakpoints', 'scoped-styles', 'typography', 'box', 'paper'];
  const componentRoutesList = [
    'button',
    'icon-button',
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
      themingListOpen = states.listStates.theming;
      componentListOpen = states.listStates.components;
      selectedRoute = states.currentRoute;
    });
  });

  function setSelectedRoute(route: string) {
    appStatesStore.update((states) => {
      return updateAppStates({ ...states, currentRoute: route });
    });
  }

  function transformRoute(route: string) {
    let words = route.split('-');
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
  }

  function updateDrawerStates(list: string) {
    appStatesStore.update((states) => {
      if (list === 'theming') {
        return updateAppStates({
          ...states,
          listStates: { ...states.listStates, theming: !themingListOpen }
        });
      } else {
        return updateAppStates({
          ...states,
          listStates: { ...states.listStates, components: !componentListOpen }
        });
      }
    });
  }
</script>

<Drawer elevation={2} open={isDrawerOpen} ssx={{ $self: { height: 'calc(100vh - 56px)' } }}>
  <Box>
    <ListItem selected={themingListOpen} on:click={() => updateDrawerStates('theming')}>
      <Typography>Theming</Typography>
      <ListItemAdornment slot="trailing" class="material-symbols-outlined">
        {themingListOpen ? 'expand_less' : 'expand_more'}
      </ListItemAdornment>
      <svelte:fragment slot="sublist">
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
              {transformRoute(route)}
            </Typography>
          </ListItem>
        {/each}
      </svelte:fragment>
    </ListItem>

    <ListItem selected={componentListOpen} on:click={() => updateDrawerStates('components')}>
      <Typography>Components</Typography>
      <ListItemAdornment slot="trailing" class="material-symbols-outlined">
        {componentListOpen ? 'expand_less' : 'expand_more'}
      </ListItemAdornment>
      <svelte:fragment slot="sublist">
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
              {transformRoute(route)}
            </Typography>
          </ListItem>
        {/each}
      </svelte:fragment>
    </ListItem>
  </Box>
</Drawer>
