<script>
	import Chip from '$lib/Chip/chip.svelte';
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
	unamed

Examples:
  <Chip>Default Chip</Chip>
  <Chip href="/chip">Chip Link</Chip>
  <Chip clickable on:click={() => alert('clicked')}>Clickable Chip</Chip>
`}
>
	<Chip>Default Chip</Chip>
	<Chip href="/chip">Chip Link</Chip>
	<Chip clickable on:click={() => alert('clicked')}>Clickable Chip</Chip>
</Variant>
