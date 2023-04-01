<script lang="ts">
  import { Box, Drawer, List, ListItem, ListItemAdornment } from '@uui';
  import { onMount } from 'svelte';

  type $$Props = { isDrawerOpen: boolean };
  export let isDrawerOpen = false;

  // Local vars
  let selectedRoute = localStorage.getItem('route') || '/';
  let themingListOpen: boolean = JSON.parse(localStorage.getItem('theming') || 'true');
  let componentListOpen: boolean = JSON.parse(localStorage.getItem('components') || 'true');

  const themeRoutestList = ['theme', 'breakpoints', 'scoped-styles', 'typography', 'box', 'paper'];
  const componentRoutesList = [
    'button',
    'icon-button',
    'accordion',
    'stepper',
    'dialog',
    'chip',
    'text-field',
    'list-item',
    'drawer'
  ];

  // Functions
  onMount(() => {
    if (!localStorage.getItem('theming')) {
      localStorage.setItem('theming', JSON.stringify(true));
      localStorage.setItem('components', JSON.stringify(true));
      localStorage.setItem('route', '/');
    }
  });

  function setSelectedRoute(route: string) {
    selectedRoute = route;
    localStorage.setItem('route', route);
  }

  function transformRoute(route: string) {
    let words = route.split('-');
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
  }

  function updateDrawerStates(list: string) {
    if (list === 'theming') {
      localStorage.setItem(list, JSON.stringify(!themingListOpen));
      themingListOpen = !themingListOpen;
    } else {
      localStorage.setItem(list, JSON.stringify(!componentListOpen));
      componentListOpen = !componentListOpen;
    }
  }
</script>

<Drawer elevation={2} open={isDrawerOpen} ssx={{ $self: { height: 'calc(100vh - 56px)' } }}>
  <Box slot="content">
    <List>
      <ListItem
        text="Theming"
        selected={themingListOpen}
        on:click={() => updateDrawerStates('theming')}
      >
        <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
          {themingListOpen ? 'expand_less' : 'expand_more'}
        </ListItemAdornment>
        <svelte:fragment slot="nestedContent">
          {#each themeRoutestList as route}
            <ListItem
              selected={selectedRoute === route}
              element="a"
              href="/{route}"
              text={transformRoute(route)}
              on:click={(e) => {
                e.stopPropagation();
                setSelectedRoute(route);
              }}
            />
          {/each}
        </svelte:fragment>
      </ListItem>
    </List>
    <List>
      <ListItem
        text="Components"
        selected={componentListOpen}
        on:click={() => updateDrawerStates('components')}
      >
        <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
          {componentListOpen ? 'expand_less' : 'expand_more'}
        </ListItemAdornment>
        <svelte:fragment slot="nestedContent">
          {#each componentRoutesList as route}
            <ListItem
              selected={selectedRoute === route}
              element="a"
              href="/{route}"
              text={transformRoute(route)}
              on:click={(e) => {
                e.stopPropagation();
                setSelectedRoute(route);
              }}
            />
          {/each}
        </svelte:fragment>
      </ListItem>
    </List>
  </Box>
</Drawer>
