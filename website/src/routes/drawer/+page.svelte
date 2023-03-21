<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Typography } from '@uui';
  import DRAWER_PROPS from '@uui/Drawer/Drawer.types.d.ts?raw';
</script>

<DocPage>
  <Typography variant="h1">Drawer</Typography>
  <Typography variant="body1" />
  <Typography variant="h2">Props</Typography>

  <VariantExample code={DRAWER_PROPS} />
</DocPage>
