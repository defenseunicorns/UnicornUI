<script lang="ts">
  import DocPage from '../../lib/doc-page.svelte';
  import {
    Paper,
    IconButton,
    ListItem,
    ListItemAdornment,
    Typography,
    Drawer,
    ListItemTypography
  } from '@uui';

  let open = false;
  function setOpen() {
    open = !open;
  }
</script>

<Paper elevation={2} class="rail-demo-container">
  <Drawer {open} rail>
    <IconButton
      iconClass="material-symbols-outlined"
      iconContent="menu"
      slot="header"
      on:click={setOpen}
    />
    {#if open}
      <ListItem>
        <ListItemTypography>Data</ListItemTypography>
        <ListItemAdornment slot="leading">
          <IconButton iconClass="material-symbols-outlined" iconContent="folder" />
        </ListItemAdornment>
      </ListItem>
      <ListItem>
        <ListItemTypography>Data</ListItemTypography>
        <ListItemAdornment slot="leading">
          <IconButton iconClass="material-symbols-outlined" iconContent="schedule" />
        </ListItemAdornment>
      </ListItem>
    {:else}
      <IconButton iconClass="material-symbols-outlined" iconContent="folder" />
      <IconButton iconClass="material-symbols-outlined" iconContent="schedule" />
    {/if}
  </Drawer>
  <DocPage>
    <Typography variant="bod1"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat metus at libero
      sagittis sagittis a non risus. In mi mauris, viverra id malesuada ac, consequat quis neque.
      Donec molestie ligula quis mauris vehicula rhoncus. Integer pretium felis quis volutpat
      rhoncus. Duis finibus sem volutpat eros convallis, non consequat ipsum tempus. Suspendisse
      vehicula, diam in consectetur malesuada, orci ante auctor erat, non sodales tortor felis eu
      ligula. Maecenas ut enim eu lacus mollis imperdiet at eget leo. Etiam volutpat odio ac odio
      placerat, a viverra risus dignissim. Mauris eu erat nisi. Donec facilisis, tellus in consequat
      gravida, dui nisl rhoncus felis, quis feugiat massa sem in enim. Ut viverra gravida aliquet.
      Nulla quam nibh, auctor porttitor purus a, elementum auctor augue. Pellentesque in varius
      orci, non pharetra enim. Phasellus non lectus eu lectus scelerisque congue eget vel tortor.
      Sed lobortis nisi vitae magna molestie venenatis. Nullam vel lobortis lacus, eu tincidunt
      felis. Donec bibendum libero ac dignissim tincidunt. Cras convallis, risus eget vehicula
      euismod, neque mi faucibus nunc, porttitor interdum sapien leo quis orci. Aliquam venenatis
      ultrices dictum. Praesent congue eu augue nec ultrices. Sed consectetur bibendum interdum.
      Donec id ligula quam. Sed eleifend lectus vitae blandit gravida.</Typography
    >
  </DocPage>
</Paper>
