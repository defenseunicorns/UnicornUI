<script lang="ts">
	import { createPaletteMap } from '$lib/shared/theme/palette/palette';
	import type { Palettes, ThemeVars } from '$lib/shared/theme/palette/palette.types';
	import { onMount } from 'svelte';

	let mounted = false;

	export let palettes: Palettes = [{ name: 'default' }];
	export let theme = palettes[0].name || 'default';

	const paletteMap = createPaletteMap(palettes);
	$: {
		const currentPalette = paletteMap.get(theme);
		const sharedPalette = paletteMap.get('shared') || {};
		if (mounted && currentPalette) {
			const themePalette: ThemeVars = { ...sharedPalette, ...currentPalette };
			Object.entries(themePalette).forEach((entry: [string, string]) => {
				document.documentElement.style.setProperty(entry[0], entry[1]);
				document.body.style.setProperty('background-color', `var(--mdc-theme-background)`);
				document.body.style.setProperty('color', 'var(--mdc-theme-on-background)');
				console.log(document.documentElement.style.getPropertyValue('prefers-color-scheme'));
			});
		}
	}
	onMount(() => {
		mounted = true;
	});
</script>

<!-- 
	Prevent children rendering until theme applied. 
	This stops potential flash from default theme/root values 
-->
{#if mounted}
	<slot />
{/if}
