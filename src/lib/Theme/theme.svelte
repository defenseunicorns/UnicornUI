<script lang="ts">
	import { createThemeStyle } from '$lib/shared/theme/palette/palette';
	import type { Palettes } from '$lib/shared/theme/palette/palette.types';
	import { onMount } from 'svelte';

	let mounted = false;

	export let themePalettes: Palettes = [{ id: 'default' }];
	export let theme = 'default';

	const themeMap = createThemeStyle(themePalettes);
	$: {
		const currentTheme = themeMap.get(theme);
		if (mounted && currentTheme) {
			Object.entries(currentTheme).forEach((entry: [string, string]) => {
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
