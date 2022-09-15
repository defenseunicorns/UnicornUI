<script lang="ts">
	/* Slots
	 * icon (replace the expand (more/less) icon button)
	 * headerContent - parent .accordian-content
	 * content - parent .accordian-content
	 */
	import IconButton from '$lib/IconButton/IconButton.svelte';
	import ExpandLess from '$lib/shared/assets/svg/expand-less.svelte';
	import ExpandMore from '$lib/shared/assets/svg/expand-more.svelte';
	// Types
	type ContentVisibility = 'open' | 'shut';

	// Props
	export let isOpen = false;
	// .accordian
	export let wrapperClass = '';
	export let id = '';
	// .accordian-header
	export let headerClass = '';
	// .accordian-content
	export let contentClass = '';

	// Watch
	let contentVisibility: ContentVisibility;
	$: contentVisibility = isOpen ? 'open' : 'shut';
</script>

<div {id} class="accordion {wrapperClass}">
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
	<div class="accordion-content {contentClass} {contentVisibility}">
		<slot name="content" />
	</div>
</div>

<style lang="scss" scoped>
	@import '@material/theme';
	.accordion {
		display: flex;
		flex-direction: column;
		width: 100%;
		box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
			0px 1px 3px rgba(0, 0, 0, 0.12);
	}
	.accordion-header-wrapper {
		padding: 8px 12px;
		justify-content: flex-start;
		align-items: center;
		gap: 8px;
		display: flex;
		flex-direction: row;
		background-color: var(--mdc-theme-surface);
	}
	.accordion-content {
		padding: 8px 12px;
		display: flex;
		flex-direction: column;
	}
	.accordion-content.shut {
		display: none;
	}
	:global(.accordion .mdc-icon-button:hover i svg path) {
		fill: var(--mdc-theme-primary);
	}
</style>
