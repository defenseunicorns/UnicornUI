<script lang="ts">
  import Typography from '@defense-unicorns/unicorn-ui/src/lib/Typography/typography.svelte';

  export let code: string;
</script>

<Typography
  variant="caption"
  element="pre"
  class="variant-code"
  color="primary"
  style="font-size: 18px"
>
  {`${code.trim()}`}
</Typography>

<style lang="scss">
  :global(.variant-code) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--mdc-theme-primary);
    background-color: black;
    padding: 16px;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word;
  }
</style>
