<script>
	import Typography from '$lib/Typography/typography.svelte';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant
	title="Typography"
	code={`
https://material.io/develop/web/guides/typography

Props (with defaults):
  variant: TypographyVariant = 'body1';
  // Override default element mapping 
  element: string | undefined = undefined;
  
  // svelte handles generics
  type T = $$Generic<EventTarget>;
  
  // Allows adding aria and default props on the element type provided. 
  interface $$Props extends svelte.JSX.HTMLAttributes<T> {
		variant?: TypographyVariant;
		element?: string;
  };

Slots:
    default

Examples:
  <Typography variant="h1">h1</Typography>
  <Typography variant="h2">h2</Typography>
  <Typography variant="h3">h3</Typography>
  <Typography variant="h4">h4</Typography>
  <Typography variant="h5">h5</Typography>
  <Typography variant="h6">h6</Typography>
  <Typography variant="body1">body1</Typography>
  <Typography variant="body2">body2</Typography>
  <Typography variant="subtitle1">subtitle1</Typography>
  <Typography variant="subtitle2">subtitle2</Typography>
  <Typography variant="caption">captions</Typography>
  <Typography variant="overline">overline</Typography>
  <Typography variant="inherit">inherit</Typography>
  <Typography>Default (body1)</Typography>
  <Typography variant="button">button</Typography>
`}
>
	<div class="typography-examples">
		<Typography variant="h1">h1</Typography>
		<Typography variant="h2">h2</Typography>
		<Typography variant="h3">h3</Typography>
		<Typography variant="h4">h4</Typography>
		<Typography variant="h5">h5</Typography>
		<Typography variant="h6">h6</Typography>
		<Typography variant="body1">body1</Typography>
		<Typography variant="body2">body2</Typography>
		<Typography variant="subtitle1">subtitle1</Typography>
		<Typography variant="subtitle2">subtitle2</Typography>
		<Typography variant="caption">captions</Typography>
		<Typography variant="overline">overline</Typography>
		<Typography variant="inherit">inherit</Typography>
		<Typography>Default (body1)</Typography>
		<Typography variant="button">button</Typography>
	</div>
</Variant>

<style lang="scss">
	.typography-examples {
		display: flex;
		height: min-content;
		width: max-content;
		flex-direction: column;
		text-align: center;
	}
	:global(.typography-examples *) {
		margin: 8px 0px;
		padding: 0px 0px;
	}
</style>
