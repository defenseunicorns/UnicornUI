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
			: { variant: 'flat', color: 'primary', shape: 'squared' };
	}
</script>

<section class="components">
	<h1 class="header mdc-typography--headline4">Unicorn UI</h1>
	<Button href="/" {...getVariant(path, '/')}>Home</Button>
	<h2 class="mdc-typography--headline5">Components</h2>
	<div class="component-list">
		<Button href="/button" {...getVariant(path, '/button')}>Button</Button>
		<Button href="/icon-button" {...getVariant(path, '/icon-button')}>Icon Button</Button>
		<Button href="/accordion" {...getVariant(path, '/accordion')}>Accordion</Button>
		<Button href="/stepper" {...getVariant(path, '/stepper')}>Stepper</Button>
		<Button href="/dialog" {...getVariant(path, '/dialog')}>Dialog</Button>
		<Button href="/checkbox" {...getVariant(path, '/checkbox')}>Checkbox</Button>
	</div>
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
	.component-list {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
</style>
