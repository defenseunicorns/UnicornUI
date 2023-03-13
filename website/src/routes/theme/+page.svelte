<script lang="ts">
  import Variant from '$lib/Variant.svelte';
  import ThemeToggle from '$lib/ThemeToggle.svelte';
  import VariantExample from '$lib/VariantExample.svelte';
  import { Box, Accordion, Typography, AccordionGroup } from '@uui';

  import GENERATED_CSS_TEXT from './css-var.example.css?raw';
  import THEME_EXAMPLE_TEXT from './theme.example.svelte?raw';
  import THEME_TOGGLE_EXAMPLE from '$lib/ThemeToggle.svelte?raw';
  import CUSTOM_TYPOGRAPHY_TEXT from '$lib/theme/theme-typography?raw';
  import PREFERRED_THEME_EXAMPLE from './PreferredTheme.example.svelte?raw';
  import DEFAULT_PALETTE_TEXT from '@defense-unicorns/unicorn-ui/src/lib/shared/theme/palette/default-palettes.ts?raw';
  import DEFAULT_TYPOGRAPHY_TEXT from '@defense-unicorns/unicorn-ui/src/lib/shared/theme/typography-config/default-typography-config?raw';
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

  breakpoints?: Breakpoints = UUI_BREAKPOINTS

  // Tries light -> dark -> shared (in order if defined) then fallback to mdc defaults.
  theme?: string;

  // Used for setting theme to browser preference. Default set as true.
  preferredTheme?: boolean

  typography?: ThemeTypography;

Slots:
  unnamed

Example:
<Theme palettes={myCustomPalettes} typography={myCustomTypography}>
    {...TheRestOfTheWebsite}
</Theme>

Additional Notes:
  - Should be applied to top level layout.
  - Should wrap all website components to prevent layout flash.
  - Acts purely as a wrapper and contains no html tags. 
  - Palette and TypographyConfig values are accessible via css vars following the theme properties separated by dashes (--primary, --on-primary, --h3-font-size); 
  - A runtime list of available css vars are in the head style id='uui-theme-css'
  - Default looks for preferred theme from browser.
`}
>
  <AccordionGroup>
    <Accordion isOpen>
      <Typography slot="headerContent" variant="h6">Example: Default Installation</Typography>
      <Box slot="content" style="display: flex; flex-direction: column; gap: 16px;">
        <Typography variant="h5">Prerequisites (optional):</Typography>
        <VariantExample code="npm i @fontsource/roboto" />
        <Typography variant="h5">Example:</Typography>
        <VariantExample code={THEME_EXAMPLE_TEXT} />
      </Box>
    </Accordion>
    <Accordion isOpen>
      <Typography slot="headerContent" variant="h6">Example: Default Palette</Typography>
      <Box slot="content">
        <VariantExample code={DEFAULT_PALETTE_TEXT} />
      </Box>
    </Accordion>
    <Accordion isOpen>
      <Typography slot="headerContent" variant="h6">Example: Default Typography</Typography>
      <Box slot="content">
        <VariantExample code={DEFAULT_TYPOGRAPHY_TEXT} />
      </Box>
    </Accordion>
    <Accordion isOpen>
      <Typography slot="headerContent" variant="h6">Example: Custom Typography</Typography>
      <Box slot="content">
        <VariantExample code={CUSTOM_TYPOGRAPHY_TEXT} />
        <Typography element="div" variant="body3" style="margin-top: 1rem; text-align: center"
          >Custom Typography</Typography
        >
      </Box>
    </Accordion>
    <Accordion isOpen>
      <Typography slot="headerContent" variant="h6">Example: Generated CSS</Typography>
      <Box slot="content">
        <VariantExample code={GENERATED_CSS_TEXT} />
      </Box>
    </Accordion>
    <Accordion isOpen>
      <Typography slot="headerContent" variant="h6">Example: Preferred Theme Override</Typography>
      <Box slot="content">
        <VariantExample code={PREFERRED_THEME_EXAMPLE} />
      </Box>
    </Accordion>
    <Accordion isOpen>
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
