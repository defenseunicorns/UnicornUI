<script lang="ts">
  import Box from '$lib/Box/box.svelte';
  import Accordion from '$lib/Accordion/accordion.svelte';
  import Typography from '$lib/Typography/typography.svelte';
  import Variant from '../../website-components/Variant.svelte';
  import AccordionGroup from '$lib/Accordion/accordion-group.svelte';
  import ThemeToggle from '../../website-components/ThemeToggle.svelte';
  import PREFERRED_THEME_EXAMPLE from './PreferredTheme.example.svelte?raw';
  import VariantExample from '../../website-components/VariantExample.svelte';
  import DEFAULT_PALETTE_TEXT from '$lib/shared/theme/palette/default-palettes?raw';
  import THEME_TOGGLE_EXAMPLE from '../../website-components/ThemeToggle.svelte?raw';
</script>

<Variant
  title="Theme"
  code={`
Props:
  // These are the (default, optional) named Palettes. 
  palettes?: Palettes = {
    // Applies as base theme if present. 
    shared?: Palette,
    // Corelate to getPreferredTheme utility values.
    light?: Palette,
    dark?: Palette
  };
  // Tries light -> dark -> shared (in order if defined) then fallback to mdc defaults.
  theme?: string;

Slots:
  unnamed

Example:
// routes/+layout.svelte
<Theme theme={currentTheme} palettes={myCustomPalettes}>
    {...TheRestOfTheWebsite}
</Theme>

Additional Notes:
  - Should be applied to top level layout.
  - Should wrap all website components to prevent layout flash.
  - Acts purely as a wrapper and contains no html tags. 
`}
>
  <AccordionGroup>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Default Palette</Typography>
      <Box slot="content">
        <pre class="variant-code">{DEFAULT_PALETTE_TEXT}</pre>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Preferred Theme</Typography>
      <Box slot="content">
        <VariantExample code={PREFERRED_THEME_EXAMPLE} />
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Theme Toggle</Typography>
      <Box slot="content">
        <VariantExample code={THEME_TOGGLE_EXAMPLE} />
        <Box style="padding-top: 16px">
          <ThemeToggle />
        </Box>
      </Box>
    </Accordion>
  </AccordionGroup>
</Variant>
