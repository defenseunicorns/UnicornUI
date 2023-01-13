<script lang="ts">
  import Variant from '$lib/Variant.svelte';
  import { Button, ButtonIcon } from '@defense-unicorns/unicorn-ui/src/lib';
</script>

<Variant title="Installation" code={`npm i @defense-unicorns/unicorn-ui`}>
  <Button href="https://github.com/defenseunicorns/UnicornUI" target="_blank" variant="raised"
    >Github
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">open_in_new</ButtonIcon>
  </Button>
</Variant>
