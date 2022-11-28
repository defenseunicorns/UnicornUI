<script lang="ts">
	import Box from '$lib/Box/box.svelte';
	import Typography from '$lib/Typography/typography.svelte';
	import { MDCRipple } from '@material/ripple';
	import { current_component, onMount } from 'svelte/internal';
	import type { ChipColor, ChipProps, ChipVariant } from './chip.types';

	let buttonElement: HTMLButtonElement | HTMLAnchorElement;

	type T = $$Generic<EventTarget>;
	type $$Props = ChipProps<T>;

	export let variant: ChipVariant = 'filled';
	export let color: ChipColor = 'default';

	onMount((): void => {
		if (buttonElement) {
			new MDCRipple(buttonElement);
		}
	});
</script>

<span class="chip-wrapper chip-{variant}-{color}" role="row">
	<span
		class="mdc-evolution-chip__cell mdc-evolution-chip--with-primary-graphic mdc-evolution-chip__cell--primary"
		role="gridcell"
	>
		<slot name="primary" />
		<Box
			bind:ref={buttonElement}
			element={$$restProps.href ? 'a' : 'button'}
			eventComponent={current_component}
			tabindex={0}
			{...$$restProps}
			class={` mdc-evolution-chip__action mdc-evolution-chip__action--primary ${
				$$restProps.class || ''
			}`}
			disabled={$$restProps.disabled == undefined ? !$$restProps.clickable : $$restProps.disabled}
		>
			<span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary" />
			<span class="mdc-evolution-chip__text-label" />
			<Typography variant="body2"><slot /></Typography>
		</Box>
	</span>
	<slot name="trailing" />
</span>

<style lang="scss" global>
	@use '@material/chips' as chips;
	@use '@material/chips/styles' as styles;
	.chip-wrapper {
		@extend .mdc-evolution-chip;
	}
	.chip-filled-default {
		@include chips.ripple-color(var(--mdc-chip-filled-ripple-color, var(--mdc-chip-color, black)));
		background-color: var(--mdc-chip-background-color, #c7c9ca);
		color: var(--mdc-chip-color, black);
	}
	.chip-outlined-default {
		@include chips.ripple-color(
			var(--mdc-chip-outlined-ripple-color, var(--mdc-chip-background-color, black))
		);

		background-color: transparent;
		color: var(--mdc-chip-background-color, black);
		border-color: var(--mdc-chip-background-color, black);
		border-width: 1px;
		border-style: solid;
	}
	.chip-outlined-primary {
		@extend .chip-outlined-default;
		@include chips.ripple-color(var(--mdc-theme-primary));
		color: var(--mdc-theme-primary);
		border-color: var(--mdc-theme-primary);
	}
	.chip-filled-primary {
		@include chips.ripple-color(var(--mdc-theme-on-primary));
		background-color: var(--mdc-theme-primary);
		color: var(--mdc-theme-on-primary);
	}
	.chip-outlined-secondary {
		@extend .chip-outlined-default;
		@include chips.ripple-color(var(--mdc-theme-secondary));
		color: var(--mdc-theme-secondary);
		border-color: var(--mdc-theme-secondary);
	}
	.chip-filled-secondary {
		@include chips.ripple-color(var(--mdc-theme-on-secondary));
		background-color: var(--mdc-theme-secondary);
		color: var(--mdc-theme-on-secondary);
	}
	.chip-outlined-error {
		@extend .chip-outlined-default;
		@include chips.ripple-color(var(--mdc-theme-error, #d32f2f));
		color: var(--mdc-theme-error, #d32f2f);
		border-color: var(--mdc-theme-error, #d32f2f);
	}
	.chip-filled-error {
		@include chips.ripple-color(var(--mdc-theme-on-error, white));
		background-color: var(--mdc-theme-error, #d32f2f);
		color: var(--mdc-theme-on-error, white);
	}
	.chip-outlined-warning {
		@extend .chip-outlined-default;
		@include chips.ripple-color(var(--mdc-theme-warning, #ed6c02));
		color: var(--mdc-theme-warning, #ed6c02);
		border-color: var(--mdc-theme-warning, #ed6c02);
	}
	.chip-filled-warning {
		@include chips.ripple-color(var(--mdc-theme-on-warning, white));
		background-color: var(--mdc-theme-warning, #ed6c02);
		color: var(--mdc-theme-on-warning, white);
	}
	.chip-outlined-success {
		@extend .chip-outlined-default;
		@include chips.ripple-color(var(--mdc-theme-success, #2e7d32));
		color: var(--mdc-theme-success, #2e7d32);
		border-color: var(--mdc-theme-success, #2e7d32);
	}
	.chip-filled-success {
		@include chips.ripple-color(var(--mdc-theme-on-success, white));
		background-color: var(--mdc-theme-success, #2e7d32);
		color: var(--mdc-theme-on-success, white);
	}
	.chip-outlined-info {
		@extend .chip-outlined-default;
		@include chips.ripple-color(var(--mdc-theme-info, #0288d1));
		color: var(--mdc-theme-info, #0288d1);
		border-color: var(--mdc-theme-info, #0288d1);
	}
	.chip-filled-info {
		@include chips.ripple-color(var(--mdc-theme-on-info, white));
		background-color: var(--mdc-theme-info, #0288d1);
		color: var(--mdc-theme-on-info, white);
	}
</style>
