<script lang="ts">
	import Box from '$lib/Box/box.svelte';
	import Typography from '$lib/Typography/typography.svelte';
	import { current_component } from 'svelte/internal';
	import type { ChipColor, ChipProps, ChipVariant } from './chip.types';

	type T = $$Generic<EventTarget>;
	type $$Props = ChipProps<T>;

	export let variant: ChipVariant = 'filled';
	export let color: ChipColor = 'inherit';
</script>

<span class="chip-wrapper chip-{variant}-{color}" role="row">
	<span
		class="mdc-evolution-chip__cell mdc-evolution-chip--with-primary-graphic mdc-evolution-chip__cell--primary"
		role="gridcell"
	>
		<slot name="primary" />
		<Box
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
	@use '@material/chips/styles';
	.chip-wrapper {
		@extend .mdc-evolution-chip;
	}
	.chip-outlined-inherit {
		background-color: transparent;
		color: inherit;
		border-color: inherit;
		border-width: 1px;
		border-style: solid;
	}
	.chip-outlined-primary {
		@extend .chip-outlined-inherit;
		color: var(--mdc-theme-primary);
		border-color: var(--mdc-theme-primary);
	}
	.chip-filled-primary {
		background-color: var(--mdc-theme-primary);
		color: var(--mdc-theme-on-primary);
	}
	.chip-outlined-secondary {
		@extend .chip-outlined-inherit;
		color: var(--mdc-theme-secondary);
		border-color: var(--mdc-theme-secondary);
	}
	.chip-filled-secondary {
		background-color: var(--mdc-theme-secondary);
		color: var(--mdc-theme-on-secondary);
	}
	.chip-outlined-error {
		@extend .chip-outlined-inherit;
		color: var(--mdc-theme-error, #d32f2f);
		border-color: var(--mdc-theme-error, #d32f2f);
	}
	.chip-filled-error {
		background-color: var(--mdc-theme-error, #d32f2f);
		color: var(--mdc-theme-on-error, white);
	}
	.chip-outlined-warning {
		@extend .chip-outlined-inherit;
		color: var(--mdc-theme-warning, #ed6c02);
		border-color: var(--mdc-theme-warning, #ed6c02);
	}
	.chip-filled-warning {
		background-color: var(--mdc-theme-warning, #ed6c02);
		color: var(--mdc-theme-on-warning, white);
	}
	.chip-outlined-success {
		@extend .chip-outlined-inherit;
		color: var(--mdc-theme-success, #2e7d32);
		border-color: var(--mdc-theme-success, #2e7d32);
	}
	.chip-filled-success {
		background-color: var(--mdc-theme-success, #2e7d32);
		color: var(--mdc-theme-on-success, white);
	}
	.chip-outlined-info {
		@extend .chip-outlined-inherit;
		color: var(--mdc-theme-info, #0288d1);
		border-color: var(--mdc-theme-info, #0288d1);
	}
	.chip-filled-info {
		background-color: var(--mdc-theme-info, #0288d1);
		color: var(--mdc-theme-on-info, white);
	}
</style>
