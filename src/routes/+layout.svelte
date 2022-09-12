<script lang="ts">
	import '../app.css';
	import 'material-symbols/';
	import type { ButtonColor, ButtonShape, ButtonVariant } from '$lib';
	import { Button } from '$lib';
	import { afterUpdate } from 'svelte';

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
			: { variant: 'outlined', color: 'primary', shape: 'squared' };
	}
</script>

<section class="components">
	<h1 class="header">Unicorn UI</h1>
	<Button href="/" {...getVariant(path, '/')}>Home</Button>
	<h2>Components</h2>
	<Button href="/button" {...getVariant(path, '/button')}>Button</Button>
	<Button href="/icon-button" {...getVariant(path, '/icon-button')}>Icon Button</Button>
	<Button href="/accordian" {...getVariant(path, '/accordian')}>Accordian</Button>
</section>
<main>
	<slot />
</main>

<style lang="scss">
	.header {
		margin: 0;
	}
	.components {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 18px;
	}
</style>
