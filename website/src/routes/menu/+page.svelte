<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import { Accordion, Box, Typography } from '@uui';
  import DocPage from '../../lib/doc-page.svelte';
  import InlineCode from '../../lib/inline-code.svelte';
  import MENU_PROPS from '@uui/Menu/Menu.types.d.ts?raw';
  import MenuClickaway from './menu-def-clickaway.svelte';
  import CLICKAWAY_EXP from './menu-def-clickaway.svelte?raw';
  import ON_CLICKAWAY_EXP from './menu-on-clickaway.svelte?raw';
  import MenuOnClickaway from './menu-on-clickaway.svelte';
  import BOTTOM_START from './menu-bottom-start.svelte?raw';
  import MenuBottomStart from './menu-bottom-start.svelte';
  import MenuBottomEnd from './menu-bottom-end.svelte';
  import MenuTopStart from './menu-top-start.svelte';
  import MenuTopEnd from './menu-top-end.svelte';
  import NO_CLICKAWAY_EXP from './menu-no-clickaway.svelte?raw';
  import MenuNoClickaway from './menu-no-clickaway.svelte';
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

  <Typography variant="h4">Origin Examples</Typography>
  <Box ssx={{ $self: { display: 'flex', gap: '5rem', 'justify-content': 'center' } }}>
    <MenuBottomStart />
    <MenuBottomEnd />
    <MenuTopStart />
    <MenuTopEnd />
  </Box>
  <Accordion>
    <Typography variant="h6" slot="headerContent">Origin Example Code</Typography>
    <Box slot="content">
      <VariantExample code={BOTTOM_START} />
    </Box>
  </Accordion>

  <Typography variant="h4">Clickaway Examples</Typography>
  <Typography ssx={{ $self: { 'align-self': 'center' } }} variant="h5">
    Default Clickaway (bind:open)
  </Typography>
  <MenuClickaway />
  <Accordion>
    <Typography variant="h6" slot="headerContent">Clickaway Code</Typography>
    <Box slot="content">
      <VariantExample code={CLICKAWAY_EXP} />
    </Box>
  </Accordion>

  <Typography ssx={{ $self: { 'align-self': 'center' } }} variant="h5">
    Custom Clickaway (onClickaway)
  </Typography>
  <MenuOnClickaway />
  <Accordion>
    <Typography variant="h6" slot="headerContent">onClickaway Code</Typography>
    <Box slot="content">
      <VariantExample code={ON_CLICKAWAY_EXP} />
    </Box>
  </Accordion>

  <Typography ssx={{ $self: { 'align-self': 'center' } }} variant="h5">
    No Clickaway (clickaway=false)
  </Typography>
  <MenuNoClickaway />
  <Accordion>
    <Typography variant="h6" slot="headerContent">No Clickaway Code</Typography>
    <Box slot="content">
      <VariantExample code={NO_CLICKAWAY_EXP} />
    </Box>
  </Accordion>
</DocPage>
