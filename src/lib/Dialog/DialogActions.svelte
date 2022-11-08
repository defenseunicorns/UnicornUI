<script lang="ts">
	import Box from '$lib/Box/box.svelte';
	import type { BoxProps } from '$lib/Box/box.types';
	import { current_component } from 'svelte/internal';

	type T = $$Generic<EventTarget>;
	// Props
	export let element = 'div';

	type $$Props = BoxProps<T>;
</script>

<Box
	{element}
	eventComponent={current_component}
	{...$$restProps}
	class={`mdc-dialog__actions ${$$restProps.class || ''}`}
>
	<slot />
</Box>
