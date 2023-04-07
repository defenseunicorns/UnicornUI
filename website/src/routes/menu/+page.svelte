<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { Accordion, Box, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import MenuExample from './menu-example.svelte';
  import MENU_EXP from './menu-example.svelte?raw';
  import InlineCode from '../../lib/inline-code.svelte';
  import MENU_PROPS from '@uui/Menu/Menu.types.d.ts?raw';
</script>

<DocPage>
  <Typography variant="h2">Menu</Typography>
  <Typography variant="body1">
    <InlineCode>Menu</InlineCode> is a popup surface (Paper) that displays options (typically a list
    of items) to users.
  </Typography>
  <Typography variant="h3">Props</Typography>
  <Typography variant="body1">
    The MenuProps interface extends the PaperProps interface, which extends BoxProps.
  </Typography>
  <VariantExample code={MENU_PROPS} />

  <Typography variant="h3">Examples</Typography>
  <MenuExample />
  <Accordion isOpen>
    <Typography variant="h6" slot="headerContent">Menu Code</Typography>
    <Box slot="content">
      <VariantExample code={MENU_EXP} />
    </Box>
  </Accordion>
</DocPage>
