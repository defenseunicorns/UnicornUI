<script lang="ts">
	import Box from '$lib/Box/box.svelte';
	import { current_component } from 'svelte/internal';
	import type { DialogActionsProps } from './Dialog.types';

	type T = $$Generic<EventTarget>;

	// Default Props
	export let element = 'div';

	type $$Props = DialogActionsProps<T>;
</script>

<Box
	{element}
	eventComponent={current_component}
	{...$$restProps}
	class={`mdc-dialog__actions ${$$restProps.class || ''}`}
>
	<slot />
</Box>
