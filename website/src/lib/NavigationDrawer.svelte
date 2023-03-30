<script lang="ts">
  import { Box, Drawer, List, ListItem, ListItemAdornment } from '@uui';

  export let isDrawerOpen = true;
  export let onItemClick: (() => void) | undefined = undefined;

  let selectedRoute = '';
  let themingListOpen = true;
  let componentListOpen = true;

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

  function setSelectedRoute(route: string) {
    selectedRoute = route;
  }

  function transformRoute(route: string) {
    let words = route.split('-');
    for (const _ of words) {
      words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    }
    return words.join(' ');
  }
</script>

<Drawer elevation={2} open={isDrawerOpen} ssx={{ $self: { height: 'calc(100vh - 56px)' } }}>
  <Box slot="content">
    <List>
      <ListItem
        text="Theming"
        selected={themingListOpen}
        on:click={() => (themingListOpen = !themingListOpen)}
      >
        <ListItemAdornment slot="trailingAdornment" class="material-symbols-outlined">
          {themingListOpen ? 'expand_less' : 'expand_more'}
        </ListItemAdornment>
        <svelte:fragment slot="nestedContent">
          {#each themeRoutestList as route}
            <ListItem
              slot="nestedContent"
              selected={selectedRoute === route}
              element="a"
              href="/{route}"
              text={transformRoute(route)}
              on:click={() => {
                setSelectedRoute(route);
                onItemClick && onItemClick();
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
        on:click={() => (componentListOpen = !componentListOpen)}
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
              on:click={() => setSelectedRoute(route)}
            />
          {/each}
        </svelte:fragment>
      </ListItem>
    </List>
  </Box>
</Drawer>
