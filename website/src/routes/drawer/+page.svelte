<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Typography, Drawer, DrawerHeader, List, ListItem, ListItemAdornment } from '@uui';
  import DRAWER_PROPS from '@uui/Drawer/Drawer.types.d.ts?raw';
  import InlineCode from '../../lib/inline-code.svelte';
</script>

<DocPage>
  <Typography variant="h1">Drawer</Typography>
  <Typography variant="body1">
    <!-- <InlineCode>Drawer</InlineCode> -->
  </Typography>
  <Typography variant="h2">Props</Typography>

  <VariantExample code={DRAWER_PROPS} />
</DocPage>
