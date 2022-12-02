<script lang="ts">
	import Box from '$lib/Box/box.svelte';
	import { createThemeStyle } from '$lib/shared/theme/palette/palette';
	import type { Palettes } from '$lib/shared/theme/palette/palette.types';

	export let themePalettes: Palettes = [{ id: 'default' }];
	export let theme = 'default';

	$: themeMap = createThemeStyle(themePalettes);
	$: currentTheme = themeMap.get(theme) || '';
</script>

<Box element="div" class="uui-theme uui-theme-{theme}" style={currentTheme}>
	<slot />
</Box>

<style lang="scss" global>
	.uui-theme {
		height: 100%;
		width: 100%;
		background-color: var(--mdc-theme-background);
		color: var(--mdc-theme-on-background);
	}
	html {
		background-color: var(--mdc-theme-background);
		color: var(--mdc-theme-on-background);
	}
</style>
