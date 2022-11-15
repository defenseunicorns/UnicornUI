<script lang="ts">
	import Box from '$lib/Box/box.svelte';
	import Typography from '$lib/Typography/typography.svelte';
	import { current_component } from 'svelte/internal';
	import type { ChipProps } from './chip.types';

	type T = $$Generic<EventTarget>;
	type $$Props = ChipProps<T>;
</script>

<span class="mdc-evolution-chip" role="row" id="c2">
	<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell">
		<Box
			element={$$restProps.href ? 'a' : 'button'}
			eventComponent={current_component}
			tabindex={0}
			{...$$restProps}
			class={`mdc-evolution-chip__action mdc-evolution-chip__action--primary ${
				$$restProps.class || ''
			}`}
			disabled={$$restProps.disabled == undefined ? !$$restProps.clickable : $$restProps.disabled}
		>
			<span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary" />
			<span class="mdc-evolution-chip__text-label" />
			<Typography variant="body2"><slot /></Typography>
		</Box>
	</span>
	<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing" role="gridcell" />
</span>

<style lang="scss" global>
	@use '@material/chips/styles';
</style>
