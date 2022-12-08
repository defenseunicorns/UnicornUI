<script lang="ts">
  import Variant from '../website-components/Variant.svelte';
  import Button from '$lib/Button/Button.svelte';
  import ButtonIcon from '$lib/Button/ButtonIcon.svelte';
</script>

<Variant title="Installation" code={`npm i @defense-unicorns/unicorn-ui`}>
  <Button href="https://github.com/defenseunicorns/UnicornUI" target="_blank" variant="raised"
    >Github
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">open_in_new</ButtonIcon>
  </Button>
</Variant>
