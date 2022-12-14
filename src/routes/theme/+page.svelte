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
  import DEFAULT_TYPOGRAPHY_TEXT from '$lib/shared/theme/typography-config/default-typography-config?raw';
  import CUSTOM_TYPOGRAPHY_TEXT from '../../website-components/theme/theme-typography?raw';
  import THEME_EXAMPLE_TEXT from './theme.example.svelte?raw';
  import GENERATED_CSS_TEXT from './css-var.example.css?raw';
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

  typography?: ThemeTypography;

Slots:
  unnamed

Example:
<Theme theme={currentTheme} palettes={myCustomPalettes} typography={myCustomTypography}>
    {...TheRestOfTheWebsite}
</Theme>

Additional Notes:
  - Should be applied to top level layout.
  - Should wrap all website components to prevent layout flash.
  - Acts purely as a wrapper and contains no html tags. 
  - Palette and TypographyConfig values are accessible via css vars following the mdc pattern (--mdc-theme, --mdc-typography, etc...)
  - A runtime list of available css vars are in the head style id='uui-theme-css'
`}
>
  <AccordionGroup>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Default Installation</Typography>
      <Box slot="content" style="display: flex; flex-direction: column; gap: 16px;">
        <Typography variant="h5">Prerequisites (optional):</Typography>
        <VariantExample code="npm i @fontsource/roboto" />
        <Typography variant="h5">Example:</Typography>
        <VariantExample code={THEME_EXAMPLE_TEXT} />
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Default Palette</Typography>
      <Box slot="content">
        <VariantExample code={DEFAULT_PALETTE_TEXT} />
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Default Typography</Typography>
      <Box slot="content">
        <VariantExample code={DEFAULT_TYPOGRAPHY_TEXT} />
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Custom Typography</Typography>
      <Box slot="content">
        <VariantExample code={CUSTOM_TYPOGRAPHY_TEXT} />
        <Typography element="div" variant="body3" style="margin-top: 1rem; text-align: center"
          >Custom Typography</Typography
        >
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Example: Generated CSS</Typography>
      <Box slot="content">
        <VariantExample code={GENERATED_CSS_TEXT} />
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
