<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Typography } from '@uui';
  import PaperTypesText from '../../../../uui/src/lib/Paper/Paper.types.d.ts?raw';
  import PaperElevationExample from './paper-elevation-example.svelte';
  import PaperElevationExampleText from './paper-elevation-example.svelte?raw';
  import PaperSquareExample from './paper-square-example.svelte';
  import PaperSquareExampleText from './paper-square-example.svelte?raw';
  import PaperOutlinedExample from './paper-outlined-example.svelte';
  import PaperOutlinedExampleText from './paper-outlined-example.svelte?raw';
  import PaperColorExample from './paper-color-example.svelte';
  import PaperColorExampleText from './paper-color-example.svelte?raw';
  import InlineCode from '$lib/inline-code.svelte';
  import PaperScrollExample from './paper-scroll-example.svelte';
  import PaperScrollExampleText from './paper-scroll-example.svelte?raw';
</script>

<DocPage>
  <Typography variant="h2">Paper</Typography>
  <Typography variant="body1">Basic element for applying elevation to wrapped contents.</Typography>
  <Typography variant="h3">Props</Typography>

  <VariantExample code={PaperTypesText.split('\n\n').pop() || ''} />

  <Typography variant="h4">Square</Typography>
  <Typography variant="body1">Default is rounded.</Typography>

  <div class="paper-example">
    <PaperSquareExample />
  </div>
  <VariantExample code={PaperSquareExampleText} />

  <Typography variant="h4">Outlined</Typography>
  <Typography variant="body1">
    If the variant is outlined, elevation will automatically be set to 0. You cannot have an
    elevated outlined component.
  </Typography>

  <div class="paper-example">
    <PaperOutlinedExample />
  </div>
  <VariantExample code={PaperOutlinedExampleText} />

  <Typography variant="h4">Elevation</Typography>
  <Typography variant="body1">Accepted elevation values range from 0 - 24.</Typography>

  <div class="paper-example">
    <PaperElevationExample />
  </div>

  <VariantExample code={PaperElevationExampleText} />

  <Typography variant="h4">Color</Typography>
  <Typography variant="body1">
    The default backgroundColor of surface and color of on-surface can be changed using the
    backgroundColor and color props with a string of
    <InlineCode>type ThemeColors</InlineCode>
  </Typography>
  <div class="paper-example">
    <PaperColorExample />
  </div>
  <VariantExample code={PaperColorExampleText} />

  <Typography variant="h4">Additional Examples</Typography>

  <Typography variant="h6">Scrolling</Typography>
  <PaperScrollExample />
  <VariantExample code={PaperScrollExampleText} />
</DocPage>

<style lang="scss">
  .paper-example {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
  }
  .paper-example :global(.paper) {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
