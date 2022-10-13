<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventHandler } from '../shared/utils/eventHandler';

	type T = $$Generic<EventTarget>;
	export let element = 'div';
	export let ref: HTMLElement | undefined = undefined;
	export let additionalEvents: string[] = [];

	interface $$Props extends svelte.JSX.HTMLAttributes<T> {
		element?: string;
		ref?: HTMLElement;
		additionalEvents?: string[];
	}

	$: handleEvents = eventHandler(current_component, additionalEvents);
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
