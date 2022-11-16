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

<span class="mdc-evolution-chip chip-primary-{variant} chip-color-{color}" role="row">
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
	.chip-primary-outlined {
		background-color: transparent;
		color: inherit;
		border-color: inherit;
		border-width: 1px;
		border-style: solid;
	}
	.chip-primary-outlined.chip-color-primary {
		color: var(--mdc-theme-primary);
		border-color: var(--mdc-theme-primary);
	}
	.chip-primary-filled.chip-color-primary {
		background-color: var(--mdc-theme-primary);
		color: var(--mdc-theme-on-primary);
	}
</style>
