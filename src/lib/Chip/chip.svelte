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

<span class="mdc-evolution-chip chip-{variant}-{color}" role="row">
	<span
		class=" mdc-evolution-chip__cell mdc-evolution-chip--with-primary-graphic mdc-evolution-chip__cell--primary"
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
		color: var(--mdc-theme-error);
		border-color: var(--mdc-theme-error);
	}
	.chip-filled-error {
		background-color: var(--mdc-theme-error);
		color: var(--mdc-theme-on-error);
	}
</style>
