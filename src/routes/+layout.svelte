<script lang="ts">
	import '../app.css';
	import 'material-symbols/';
	import '@fontsource/roboto';
	import { Button } from '$lib';
	import { afterUpdate } from 'svelte';
	import Typography from '$lib/Typography/typography.svelte';
	import type { ButtonColor, ButtonShape, ButtonVariant } from '$lib';

	let path = '';

	// Lifecycle
	afterUpdate(() => {
		path = window.location.pathname;
	});

	// Functions
	function getVariant(
		pathname: string,
		currentPath: string
	): { variant: ButtonVariant; color: ButtonColor; shape: ButtonShape } {
		return pathname === currentPath
			? { variant: 'raised', color: 'secondary', shape: 'squared' }
			: { variant: 'flat', color: 'primary', shape: 'squared' };
	}
</script>

<section class="components">
	<Typography variant="h1">Unicorn UI</Typography>
	<Button href="/" {...getVariant(path, '/')}>Home</Button>
	<Typography variant="h2">Components</Typography>
	<div class="component-list">
		<Button href="/box" {...getVariant(path, '/box')}>Box</Button>
		<Button href="/button" {...getVariant(path, '/button')}>Button</Button>
		<Button href="/icon-button" {...getVariant(path, '/icon-button')}>Icon Button</Button>
		<Button href="/accordion" {...getVariant(path, '/accordion')}>Accordion</Button>
		<Button href="/stepper" {...getVariant(path, '/stepper')}>Stepper</Button>
		<Button href="/dialog" {...getVariant(path, '/dialog')}>Dialog</Button>
		<Button href="/typography" {...getVariant(path, '/typography')}>Typography</Button>
		<Button href="/chip" {...getVariant(path, '/chip')}>Chip</Button>
	</div>
</section>
<main>
	<slot />
</main>

<style lang="scss">
	.components {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
	}
	.component-list {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
</style>
