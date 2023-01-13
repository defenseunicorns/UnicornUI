<script lang="ts">
  import { Typography } from '@defense-unicorns/unicorn-ui/src/lib';
  import VariantExample from './VariantExample.svelte';

  export let title = '';
  export let code = '';
</script>

<section class="variant">
  <Typography variant="h3">{title}</Typography>
  <div class="preview">
    <VariantExample {code} />
  </div>
  <div class="preview">
    <slot />
  </div>
</section>

<style>
  :global(section) {
    padding: 32px;
    box-sizing: border-box;
    display: flex;
  }
  .preview {
    display: flex;
    width: 80%;
    gap: 32px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .variant {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-content: center;
    align-items: center;
    gap: 2rem;
  }

  :global(.variant-code) {
    display: flex;
    flex-direction: column;
    color: var(--mdc-theme-primary);
    background-color: black;
    padding: 16px;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: normal;
  }
</style>
