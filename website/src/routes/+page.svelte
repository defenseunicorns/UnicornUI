<script lang="ts">
  import Variant from '$lib/Variant.svelte';
  import { Box, Button, ButtonIcon, Typography } from '@uui';
</script>

<Box ssx={{ $self: { textAlign: 'center' } }}>
  <Typography variant="h1">Welcome to Unicorn UI</Typography>
</Box>
<Variant title="Installation" code={`npm i @defense-unicorns/unicorn-ui`}>
  <Button href="https://github.com/defenseunicorns/UnicornUI" target="_blank" variant="raised">
    Github
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">open_in_new</ButtonIcon>
  </Button>
</Variant>
