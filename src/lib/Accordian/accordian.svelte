<script lang="ts">
	import IconButton from '$lib/IconButton/IconButton.svelte';
	import ExpandLess from '$lib/shared/assets/svg/expand-less.svelte';
	import ExpandMore from '$lib/shared/assets/svg/expand-more.svelte';
	type ContentVisibility = 'open' | 'shut';
	export let isOpen = false;
	let contentVisibility: ContentVisibility;
	$: contentVisibility = isOpen ? 'open' : 'shut';
</script>

<div class="accordian">
	<div class="accordian-header">
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
		<div class="accordian-header-container">
			<slot name="headerContent" />
		</div>
	</div>
	<div class="accordian-content {contentVisibility}">
		<slot name="content" />
	</div>
</div>

<style lang="scss" global>
	@import '@material/theme';
	.accordian {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: 100%;
		height: fit-content;
		overflow: visible;
		box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
			0px 1px 3px rgba(0, 0, 0, 0.12);
	}
	.accordian-header {
		padding: 8px 12px;
		justify-content: flex-start;
		align-items: center;
		gap: 8px;
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: var(--mdc-theme-surface);
	}
	.accordian-content {
		width: 100%;
		padding: 8px 12px;
	}
	.accordian-content.shut {
		display: none;
	}
	.accordian .mdc-icon-button:hover i svg path {
		fill: var(--mdc-theme-primary);
	}
</style>
