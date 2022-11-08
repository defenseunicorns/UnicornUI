<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventHandler } from '../shared/utils/eventHandler';
	import type { BoxProps } from './box.types';

	// Svelte does generics
	type T = $$Generic<EventTarget>;

	// Props
	export let element = 'div';
	export let additionalEvents: string[] = [];
	export let ref: HTMLElement | undefined = undefined;
	export let eventComponent: typeof current_component | undefined = undefined;

	type $$Props = BoxProps<T>;

	// Watch
	$: handleEvents = eventHandler(eventComponent || current_component, additionalEvents);
</script>

<svelte:element
	this={element}
	bind:this={ref}
	use:handleEvents
	{...$$restProps}
	class="unstyled-box {$$restProps.class || ''}"
>
	<slot />
</svelte:element>

<style>
	.unstyled-box,
	.unstyled-box::before,
	.unstyled-box::after {
		box-sizing: border-box;
		margin-block: unset;
	}
</style>
