<script lang="ts">
	import type { LinkReferrerPolicy, LinkRel, LinkTarget } from '$lib/shared/types/LinkProps.types';
	import type { IconButtonColor } from './IconButton.types';
	import { createEventDispatcher, onMount } from 'svelte';
	import { MDCRipple } from '@material/ripple';

	// Props
	// Anchor Props for Link
	export let referrerpolicy: LinkReferrerPolicy | undefined = undefined;
	export let target: LinkTarget | undefined = undefined;
	export let download: string | undefined = undefined;
	export let hreflang: string | undefined = undefined;
	export let media: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let ping: string | undefined = undefined;
	export let rel: LinkRel | undefined = undefined;

	export let toggleable = false;
	export let disabled = false;
	export let toggled = false;
	export let id = '';

	export let iconColor: IconButtonColor = 'inherit';
	export let iconContent = '';
	export let iconClass = '';

	export let toggledIconColor: IconButtonColor = 'inherit';
	export let toggledIconContent = '';
	export let toggledIconClass = '';

	// Vars
	let mdcIconButtonTarget: HTMLButtonElement | HTMLAnchorElement;

	// Lifecycle
	onMount((): void => {
		if (mdcIconButtonTarget) {
			const iconButtonRipple = new MDCRipple(mdcIconButtonTarget);
			iconButtonRipple.unbounded = true;
		}
	});

	// Watch
	$: showToggle = toggleable && toggled;
	$: toggledColor = showToggle ? toggledIconColor : iconColor;
	$: currentColor = disabled ? '' : toggledColor;

	// Events
	const dispatch = createEventDispatcher();
	function onClick(event: Event) {
		dispatch('click', event);
	}
</script>

{#if !href}
	<button
		bind:this={mdcIconButtonTarget}
		on:click={onClick}
		aria-pressed={toggleable ? showToggle : null}
		class:mdc-icon-button--on={showToggle}
		class="mdc-icon-button {currentColor}"
		{disabled}
		{id}
	>
		<div class="mdc-icon-button__ripple" />
		<span class="mdc-icon-button__focus-ring" />
		<i class={`mdc-icon-button__icon mdc-icon-button__icon--on ${toggledIconClass || iconClass}`}>
			<slot name="toggledIcon">
				{toggledIconContent || iconContent}
			</slot>
		</i>
		<i class={`mdc-icon-button__icon ${iconClass}`}>
			<slot name="icon">
				{iconContent}
			</slot>
		</i>
		<div class="mdc-icon-button__touch" />
	</button>
{:else}
	<a
		bind:this={mdcIconButtonTarget}
		class="mdc-icon-button {currentColor}"
		{href}
		{download}
		{hreflang}
		{media}
		{ping}
		{referrerpolicy}
		{rel}
		{target}
		{disabled}
		{id}
	>
		<div class="mdc-icon-button__ripple" />
		<span class="mdc-icon-button__focus-ring" />
		<i class={`mdc-icon-button__icon mdc-icon-button__icon--on ${toggledIconClass || iconClass}`}>
			<slot name="toggledIcon">
				{toggledIconContent || iconContent}
			</slot>
		</i>
		<i class={`mdc-icon-button__icon ${iconClass}`}>
			<slot name="icon">
				{iconContent}
			</slot>
		</i>
		<div class="mdc-icon-button__touch" />
	</a>
{/if}

<style lang="scss">
	@import '@material/icon-button/mdc-icon-button';

	.mdc-icon-button {
		border-radius: 100% !important;
		display: flex !important;
		height: 40px !important;
		width: 40px !important;
		padding: 8px !important;
		justify-content: center !important;
		align-items: center !important;
	}
	.mdc-icon-button.primary {
		@include mdc-icon-button-ink-color(var(--mdc-theme-primary, $mdc-theme-primary));
	}
	.mdc-icon-button.secondary {
		@include mdc-icon-button-ink-color(var(--mdc-theme-secondary, $mdc-theme-secondary));
	}
	.mdc-icon-button__icon {
		display: flex;
		align-content: center;
	}
	.mdc-icon-button--on .mdc-icon-button__icon--on {
		display: flex !important;
		align-content: center;
	}
</style>
