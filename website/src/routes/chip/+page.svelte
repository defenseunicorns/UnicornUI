<script>
  import { Accordion, AccordionGroup, Box, ChipIcon, Chip, Typography } from '@uui';
  import CheckCircle from '@uui/shared/assets/svg/check-circle.svelte';
  import Delete from '@uui/shared/assets/svg/delete.svelte';
  import Variant from '$lib/Variant.svelte';
</script>

<Variant
  title="Chip"
  code={`
Props (extends BoxProps):
  variant?: ChipVariant = 'filled';
  color?: ChipColor = 'default';
  // Optional. Defining href sets "a" by default. 
  element?: ChipElement = 'button';
  // Applies to 'button' element. Adds ripple and hover interactions.
  clickable?: boolean = false;

Slots:
	primary
	unamed
	trailing

Theming (optional, color="default"):
// "filled" background-color
// "outlined" text, border, and ripple colors.
--mdc-chip-background-color
// "filled" text color
--mdc-chip-color
// "filled" ripple color
--mdc-chip-filled-ripple-color
// "outlined" ripple color
--mdc-chip-outlined-ripple-color
  
`}
>
  <AccordionGroup>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Variant: "filled" (default)</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip>Default Chip</Chip>
<Chip href="/chip">Chip Link</Chip>
<Chip clickable>Clickable Chip</Chip>
<Chip>
  <ChipIcon slot="primary">
    <CheckCircle />
  </ChipIcon>
  Primary Icon
</Chip>
<Chip>
  Trailing Icon
  <ChipIcon clickable slot="trailing">
    <CheckCircle />
  </ChipIcon>
</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip>Default Chip</Chip>
          <Chip href="/chip">Chip Link</Chip>
          <Chip clickable>Clickable Chip</Chip>
          <Chip>
            <ChipIcon slot="primary">
              <CheckCircle />
            </ChipIcon>
            Primary Icon
          </Chip>
          <Chip>
            Trailing Icon
            <ChipIcon clickable slot="trailing">
              <Delete />
            </ChipIcon>
          </Chip>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Variant: "outlined"</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip variant="outlined">Default Outlined</Chip>
<Chip variant="outlined" href="/chip">Outlined Link</Chip>
<Chip variant="outlined" clickable >
  Outlined Clickable
</Chip>
<Chip variant="outlined">
  <ChipIcon slot="primary">
    <CheckCircle />
  </ChipIcon>
  Primary Icon
</Chip>
<Chip variant="outlined">
	Trailing Icon
	<ChipIcon clickable slot="trailing">
		<Delete />
	</ChipIcon>
</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip variant="outlined">Default Outlined</Chip>
          <Chip variant="outlined" href="/chip">Outlined Link</Chip>
          <Chip variant="outlined" clickable>Outlined Clickable</Chip>
          <Chip variant="outlined">
            <ChipIcon slot="primary">
              <CheckCircle />
            </ChipIcon>
            Primary Icon
          </Chip>
          <Chip variant="outlined">
            Trailing Icon
            <ChipIcon clickable slot="trailing">
              <Delete />
            </ChipIcon>
          </Chip>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Color: "primary"</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip variant="outlined" color="primary">Primary Outlined</Chip>
<Chip color="primary">Filled Primary</Chip>
<Chip variant="outlined" color="primary" clickable>
  Outlined Primary Clickable
</Chip>
<Chip color="primary" clickable>Filled Primary Clickable</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip variant="outlined" color="primary">Primary Outlined</Chip>
          <Chip color="primary">Filled Primary</Chip>
          <Chip variant="outlined" color="primary" clickable>Outlined Primary Clickable</Chip>
          <Chip color="primary" clickable>Filled Primary Clickable</Chip>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Color: "secondary"</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip variant="outlined" color="secondary">Secondary Outlined</Chip>
<Chip color="secondary">Filled Secondary</Chip>
<Chip variant="outlined" color="secondary" clickable>
  Outlined Secondary Clickable
</Chip>
<Chip color="secondary" clickable>Filled Secondary Clickable</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip variant="outlined" color="secondary">Secondary Outlined</Chip>
          <Chip color="secondary">Filled Secondary</Chip>
          <Chip variant="outlined" color="secondary" clickable>Outlined Secondary Clickable</Chip>
          <Chip color="secondary" clickable>Filled Secondary Clickable</Chip>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Color: "error"</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip variant="outlined" color="error">Error Outlined</Chip>
<Chip color="error">Filled Error</Chip>
<Chip variant="outlined" color="error" clickable>
  Outlined Error Clickable
</Chip>
<Chip color="error" clickable>Filled Error Clickable</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip variant="outlined" color="error">Error Outlined</Chip>
          <Chip color="error">Filled Error</Chip>
          <Chip variant="outlined" color="error" clickable>Outlined Error Clickable</Chip>
          <Chip color="error" clickable>Filled Error Clickable</Chip>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Color: "warning"</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip variant="outlined" color="warning">Warning Outlined</Chip>
<Chip color="warning">Filled Warning</Chip>
<Chip variant="outlined" color="warning" clickable>
  Outlined Warning Clickable
</Chip>
<Chip color="warning" clickable>Filled Warning Clickable</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip variant="outlined" color="warning">Warning Outlined</Chip>
          <Chip color="warning">Filled Warning</Chip>
          <Chip variant="outlined" color="warning" clickable>Outlined Warning Clickable</Chip>
          <Chip color="warning" clickable>Filled Warning Clickable</Chip>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Color: "success"</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip variant="outlined" color="success">Success Outlined</Chip>
<Chip color="success">Filled Success</Chip>
<Chip variant="outlined" color="success" clickable>
  Outlined Success Clickable
</Chip>
<Chip color="success" clickable>
  <ChipIcon 
    slot="primary"
    style="fill: var(--mdc-theme-on-success)"
  >
    <CheckCircle />
  </ChipIcon>
  Filled Success Clickable
</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip color="success">
            <ChipIcon slot="primary" style="fill: var(--mdc-theme-on-success)">
              <CheckCircle />
            </ChipIcon>
            Filled Success Clickable
          </Chip>
          <Chip variant="outlined" color="success">Success Outlined</Chip>
          <Chip color="success">Filled Success</Chip>
          <Chip variant="outlined" color="success" clickable>Outlined Success Clickable</Chip>
        </Box>
      </Box>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Color: "info"</Typography>
      <Box slot="content">
        <pre class="variant-code">
{`<Chip variant="outlined" color="info">Info Outlined</Chip>
<Chip color="info">Filled Info</Chip>
<Chip variant="outlined" color="info" clickable>
  Outlined Info Clickable
</Chip>
<Chip color="info" clickable>Filled Info Clickable</Chip>`}
</pre>
        <Box class="chip-example">
          <Chip variant="outlined" color="info">Info Outlined</Chip>
          <Chip color="info">Filled Info</Chip>
          <Chip variant="outlined" color="info" clickable>Outlined Info Clickable</Chip>
          <Chip color="info" clickable>Filled Info Clickable</Chip>
        </Box>
      </Box>
    </Accordion>
  </AccordionGroup>
</Variant>

<style lang="scss">
  :global(.chip-example) {
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 32px;
    align-content: center;
    justify-content: center;
  }
</style>
