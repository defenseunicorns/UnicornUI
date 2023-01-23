<script lang="ts">
  import Box from '@defense-unicorns/unicorn-ui/src/lib/Box/box.svelte';
  import Heading from './renderers/heading.svelte';
  import SvelteMarkdown from 'svelte-markdown/src/index.js';

  export let source = '';

  const renderers = {
    heading: Heading
  };

  const options = { gfm: true, break: true };
</script>

<Box class="md-wrapper">
  <SvelteMarkdown {renderers} {source} {options} />

  <style>
    .md-wrapper {
      padding: 32px 0px;
      width: min-content;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    .md-wrapper th {
      text-align: left;
    }
    .md-wrapper td {
      text-align: left;
    }
  </style>
</Box>
