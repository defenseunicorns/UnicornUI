<script>
	import { Accordion } from '$lib';
	import AccordionGroup from '$lib/Accordion/accordion-group.svelte';
	import Box from '$lib/Box/box.svelte';
	import ChipIcon from '$lib/Chip/chip-icon.svelte';
	import Chip from '$lib/Chip/chip.svelte';
	import CheckCircle from '$lib/shared/assets/svg/check-circle.svelte';
	import Delete from '$lib/shared/assets/svg/delete.svelte';
	import Typography from '$lib/Typography/typography.svelte';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant
	title="Chip"
	code={`
Props (extends BoxProps):
  variant?: 'filled' | 'outlined' = 'outlined';
  // Optional. Defining href sets a by default. 
  element?: 'a' | 'button'
  // Applies to 'button' element. Adds ripple and hover interactions.
  clickable?: boolean = false;

Slots:
	primary
	unamed
	leading
`}
>
	<AccordionGroup>
		<Accordion>
			<Typography slot="headerContent" variant="h6">Variant: "filled" (default)</Typography>
			<Box slot="content">
				<pre class="variant-code">
{`<Chip>Default Chip</Chip>
<Chip href="/chip">Chip Link</Chip>
<Chip clickable on:click={() => alert('clicked')}>Clickable Chip</Chip>
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
					<Chip clickable on:click={() => alert('clicked')}>Clickable Chip</Chip>
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
<Chip variant="outlined" clickable on:click={() => alert('clicked')}>
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
					<Chip variant="outlined" clickable on:click={() => alert('clicked')}>
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
					</Chip>
				</Box>
			</Box>
		</Accordion>
	</AccordionGroup>
</Variant>

<style lang="scss">
	:global(.chip-example) {
		padding: 32px 0px;
		width: 100%;
		display: flex;
		gap: 32px;
		justify-content: center;
		align-content: center;
	}
</style>
