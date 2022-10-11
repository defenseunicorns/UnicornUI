<script lang="ts">
	import type { ButtonVariant, ButtonColor, ButtonShape } from './Button.types';
	import { onMount } from 'svelte';
	import { MDCRipple } from '@material/ripple';

	// Props
	export let variant: ButtonVariant = 'text';
	export let color: ButtonColor = 'primary';
	export let shape: ButtonShape = 'squared';
	export let href = '';

	interface $$Props extends svelte.JSX.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
		color?: ButtonColor;
		shape?: ButtonShape;
		variant?: ButtonVariant;
		href?: string;
	}

	// Local Vars
	let buttonElement: HTMLButtonElement | HTMLAnchorElement;

	// Lifecycle
	onMount((): void => {
		if (buttonElement) {
			new MDCRipple(buttonElement);
		}
	});

	$: element = href ? 'a' : 'button';
</script>

<svelte:element
	this={element}
	bind:this={buttonElement}
	on:submit
	on:click
	{href}
	{...$$restProps}
	class={`unicorn-button mdc-button ${variant} ${color} ${shape} ${$$restProps.class}`}
	class:mdc-button--icon-leading={$$slots.leadingIcon}
	class:mdc-button--icon-trailing={$$slots.trailingIcon}
>
	<span class="mdc-button__ripple" />
	<span class="mdc-button__focus-ring" />
	<slot name="leadingIcon" />
	<span class="mdc-button__label"><slot>{`${variant} button`}</slot></span>
	<slot name="trailingIcon" />
</svelte:element>

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
		color: var(--mdc-theme-on-secondary) !important;
	}
</style>
