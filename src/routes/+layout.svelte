<script lang="ts">
	import '../app.css';
	import 'material-symbols/';
	import type { propColor, propVariant } from '$lib/Button/Button.types';
	import Button from '$lib/Button/Button.svelte';
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
	): { variant: propVariant; color: propColor } {
		console.log(pathname);
		console.log(currentPath);
		return pathname === currentPath
			? { variant: 'raised', color: 'secondary' }
			: { variant: 'outlined', color: 'primary' };
	}
</script>

<section class="components">
	<h1 class="header">Unicorn UI</h1>
	<Button href="/" {...getVariant(path, '/')}>Home</Button>
	<h2>Components</h2>
	<Button href="/button" {...getVariant(path, '/button')}>Button</Button>
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
