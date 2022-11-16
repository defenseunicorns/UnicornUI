<script>
	import ChipIcon from '$lib/Chip/chip-icon.svelte';
	import Chip from '$lib/Chip/chip.svelte';
	import CheckCircle from '$lib/shared/assets/svg/check-circle.svelte';
	import Delete from '$lib/shared/assets/svg/delete.svelte';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant
	title="Chip"
	code={`
Props (extends BoxProps):
  // Optional. Defining href sets a by default. 
  element?: 'a' | 'button'
  // Applies to 'button' element. Adds ripple and hover interactions.
  clickable?: boolean = false;

Slots:
	primary
	unamed
	leading

Examples:
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
	<ChipIcon slot="trailing">
	  <CheckCircle />
	</ChipIcon>
  </Chip>
  <Chip>
	Clickable Trailing Icon
	<ChipIcon slot="trailing" clickable>
	  <Delete />
	</ChipIcon>
  </Chip>
  <Chip variant="outlined">Outlined</Chip>
`}
>
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
		<ChipIcon slot="trailing">
			<CheckCircle />
		</ChipIcon>
	</Chip>
	<Chip>
		Clickable Trailing Icon
		<ChipIcon slot="trailing" clickable>
			<Delete />
		</ChipIcon>
	</Chip>
	<Chip variant="outlined">Outlined</Chip>
</Variant>
