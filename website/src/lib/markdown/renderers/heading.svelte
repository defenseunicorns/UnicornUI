<script lang="ts">
  import { key } from 'svelte-markdown/src/context.js';
  import { getContext } from 'svelte';
  import { Typography } from '@uui';

  export let depth: number;
  export let raw = '';
  export let text = raw;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { slug, getOptions } = getContext(key) as Record<string, any>;
  const options = getOptions();

  $: id = options.headerIds ? options.headerPrefix + slug(text) : undefined;
  $: variant = depth > 0 && depth < 7 ? `h${depth}` : 'h6';
</script>

<Typography {id} {variant} color="primary" style="text-decoration: unerlined">{text}</Typography>
