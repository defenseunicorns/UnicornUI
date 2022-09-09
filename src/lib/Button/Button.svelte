<script lang="ts">
	import type { LinkReferrerPolicy, LinkRel, LinkTarget } from '../shared/types/LinkProps.types';
	import type { ButtonVariant, ButtonColor, ButtonShape } from './Button.types';
	import { onMount, createEventDispatcher } from 'svelte';
	import { MDCRipple } from '@material/ripple';

	// Props
	export let referrerpolicy: LinkReferrerPolicy | undefined = undefined;
	export let target: LinkTarget | undefined = undefined;
	export let download: string | undefined = undefined;
	export let hreflang: string | undefined = undefined;
	export let media: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let ping: string | undefined = undefined;
	export let rel: LinkRel | undefined = undefined;
	export let disabled = false;
	export let variant: ButtonVariant = 'text';
	export let color: ButtonColor = 'primary';
	export let shape: ButtonShape = 'square';
	export let className = '';
	export let id = '';

	// Lifecycle
	onMount((): void => {
		const el = document.querySelector('.mdc-button');
		if (el) {
			new MDCRipple(el);
		}
	});

	// Events
	const dispatch = createEventDispatcher();
	function onClick(event: Event) {
		dispatch('click', event);
	}
</script>

{#if !href}
	<button
		class={`unicorn-button mdc-button ${variant} ${color} ${shape} ${className}`}
		class:mdc-button--icon-leading={$$slots.leadingIcon}
		class:mdc-button--icon-trailing={$$slots.trailingIcon}
		{disabled}
		{id}
		on:click={onClick}
	>
		<span class="mdc-button__ripple" />
		<span class="mdc-button__focus-ring" />
		<slot name="leadingIcon" />
		<span class="mdc-button__label"><slot>{`${variant} button`}</slot></span>
		<slot name="trailingIcon" />
	</button>
{:else}
	<a
		class={`unicorn-button mdc-button ${variant} ${color} ${shape} ${className}`}
		class:mdc-button--icon-leading={$$slots.leadingIcon}
		class:mdc-button--icon-trailing={$$slots.trailingIcon}
		{shape}
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
		<span class="mdc-button__ripple" />
		<span class="mdc-button__focus-ring" />
		<slot name="leadingIcon" />
		<span class="mdc-button__label"><slot>{`${variant} button`}</slot></span>
		<slot name="trailingIcon" />
	</a>
{/if}

<style lang="scss" global>
	@import '@material/button/mdc-button';
	.outlined {
		@extend .mdc-button--outlined;
		@include mdc-button-outline-color(var(--mdc-theme-primary, $mdc-theme-primary));
	}
	.raised {
		@extend .mdc-button--raised;
	}
	.flat {
		@extend .mdc-button--unelevated;
	}

	.rounded {
		@include mdc-button-shape-radius(100px);
	}

	.mdc-button.secondary,
	.mdc-button.outlined.secondary {
		@include mdc-button-ink-color(var(--mdc-theme-secondary, $mdc-theme-secondary));
		@include mdc-button-ripple-states(var(--mdc-theme-secondary, $mdc-theme-secondary));
	}
	.mdc-button.outlined.secondary {
		@include mdc-button-outline-color(var(--mdc-theme-secondary, $mdc-theme-secondary));
	}
	.mdc-button.raised.secondary,
	.mdc-button.flat.secondary {
		@include mdc-button-filled-accessible(var(--mdc-theme-secondary, $mdc-theme-secondary));
	}
</style>
