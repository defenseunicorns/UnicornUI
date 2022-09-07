<script lang="ts">
	import type { propColor } from '$lib/Button/Button.types';
	import Button from '$lib/Button/Button.svelte';
	import { afterUpdate } from 'svelte';
	import 'material-symbols';

	let path = '';

	// Lifecycle
	afterUpdate(() => {
		path = window.location.pathname;
	});

	// Functions
	function getVariant(pathname: string, currentPath: string): propColor {
		return pathname === currentPath ? 'secondary' : 'primary';
	}
</script>

<section class="components">
	<h1 class="header">Unicorn UI</h1>
	<Button href="/" variant="outlined" color={getVariant(path, '/')}>Home</Button>
	<h2>Components</h2>
	<Button href="/button" variant="outlined" color={getVariant(path, '/button')}>Button</Button>
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
