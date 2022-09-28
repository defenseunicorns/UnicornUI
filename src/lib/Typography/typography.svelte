<script lang="ts">
	import { typographyElementMapping } from './typography';
	import type { TypographyVariant, TypographyElement } from './typography.types';

	// Internal Types;
	type T = $$Generic<EventTarget>;

	// Vars
	let variantElement: TypographyElement;

	// Props
	export let variant: TypographyVariant = 'body1';
	export let element: string | undefined = undefined;

	interface $$Props extends svelte.JSX.HTMLAttributes<T> {
		variant?: TypographyVariant;
		element?: string;
	}

	// Watch
	$: variantElement = typographyElementMapping[variant];
	$: component = element || variantElement.element;
	$: $$restProps.class = `${variantElement.class} ${$$restProps.class || ''}`;
</script>

<svelte:element this={component} {...$$restProps}><slot /></svelte:element>

<style lang="scss">
	@use '@material/typography/mdc-typography';

	.mdc-typography--inherit {
		font-size: inherit;
		font-family: inherit;
		line-height: inherit;
		font-weight: inherit;
		font-style: inherit;
		letter-spacing: inherit;
		text-decoration: inherit;
	}
</style>
