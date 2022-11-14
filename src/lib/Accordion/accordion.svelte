<script lang="ts">
	/* Slots
	 * icon (replace the expand (more/less) icon button)
	 * headerContent - parent .accordian-content
	 * content - parent .accordian-content
	 */
	import Box from '$lib/Box/box.svelte';
	import { slide } from 'svelte/transition';
	import { current_component } from 'svelte/internal';
	import type { AccordionProps } from './accordion.types';
	import IconButton from '$lib/IconButton/IconButton.svelte';
	import ExpandLess from '$lib/shared/assets/svg/expand-less.svelte';
	import ExpandMore from '$lib/shared/assets/svg/expand-more.svelte';

	// Props
	export let isOpen = false;
	export let headerClass = '';
	export let contentClass = '';

	type $$Props = AccordionProps;
</script>

<Box
	{...$$restProps}
	class={`accordion ${$$restProps.class || ''}`}
	eventComponent={current_component}
>
	<div class="accordion-header-wrapper">
		<slot name="icon">
			<IconButton
				class="accordion-toggle"
				iconColor="primary"
				toggledIconColor="primary"
				on:click={() => {
					isOpen = !isOpen;
				}}
				toggleable
				toggled={isOpen}
			>
				<ExpandMore slot="icon" />
				<ExpandLess slot="toggledIcon" />
			</IconButton>
		</slot>
		<div class="accordion-header {headerClass}">
			<slot name="headerContent" />
		</div>
	</div>
	{#if isOpen}
		<div transition:slide class="accordion-content {contentClass}">
			<slot name="content" />
		</div>
	{/if}
</Box>

<style lang="scss" global>
	.accordion {
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
			0px 1px 3px rgba(0, 0, 0, 0.12);
		background-color: var(--mdc-theme-surface);
		color: var(--mdc-theme-on-surface);
	}
	.accordion-header-wrapper {
		padding: 1rem;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		display: flex;
		flex-direction: row;
	}
	.accordion-content {
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}
	.accordion .mdc-icon-button:hover i svg path {
		fill: var(--mdc-theme-primary);
	}
</style>
