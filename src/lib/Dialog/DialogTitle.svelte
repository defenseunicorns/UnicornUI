<script lang="ts">
	import { current_component } from 'svelte/internal';
	import Typography from '$lib/Typography/typography.svelte';
	import type { TypographyVariant } from '$lib/Typography/typography.types';
	import type { DialogTitleProps } from './Dialog.types';

	type T = $$Generic<EventTarget>;

	// Default Props
	export let variant: TypographyVariant = 'h2';

	type $$Props = DialogTitleProps<T>;
</script>

<Typography
	{variant}
	eventComponent={current_component}
	{...$$restProps}
	class="mdc-dialog__title {$$restProps.class || ''}"
>
	<slot />
</Typography>
