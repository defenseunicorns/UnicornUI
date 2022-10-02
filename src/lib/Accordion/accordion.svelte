<script lang="ts">
	/* Slots
	 * icon (replace the expand (more/less) icon button)
	 * headerContent - parent .accordian-content
	 * content - parent .accordian-content
	 */
	import IconButton from '$lib/IconButton/IconButton.svelte';
	import ExpandLess from '$lib/shared/assets/svg/expand-less.svelte';
	import ExpandMore from '$lib/shared/assets/svg/expand-more.svelte';
	import { slide } from 'svelte/transition';
	// Props
	export let isOpen = false;
	// .accordian
	export let wrapperClass = '';
	export let style = '';
	export let id = '';
	// .accordian-header
	export let headerClass = '';
	// .accordian-content
	export let contentClass = '';
</script>

<div {id} class="accordion {wrapperClass}" {style}>
	<div class="accordion-header-wrapper">
		<slot name="icon">
			<IconButton
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
</div>

<style lang="scss" scoped>
	@import '@material/theme';
	.accordion {
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
			0px 1px 3px rgba(0, 0, 0, 0.12);
	}
	.accordion-header-wrapper {
		padding: 1rem;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		display: flex;
		flex-direction: row;
		background-color: var(--mdc-theme-surface);
	}
	.accordion-content {
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}
	:global(.accordion .mdc-icon-button:hover i svg path) {
		fill: var(--mdc-theme-primary);
	}
</style>
