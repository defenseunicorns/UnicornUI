<script>
	import Typography from '$lib/Typography/typography.svelte';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant
	title="Typography"
	code={`
https://material.io/develop/web/guides/typography

Props (extends BoxProps):
  variant: TypographyVariant = 'body1';
  color: TextColors = 'inherit';
  
Slots:
    default

Examples:
  <Typography variant="h1">h1</Typography>
  <Typography variant="h2" color="primary">h2</Typography>
  <Typography variant="h3" color="secondary">h3</Typography>
  <Typography variant="h4" color="info">h4</Typography>
  <Typography variant="h5" color="success">h5</Typography>
  <Typography variant="h6" color="warning">h6</Typography>
  <Typography variant="body1" color="on-surface">body1</Typography>
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
		<Typography variant="h2" color="primary">h2</Typography>
		<Typography variant="h3" color="secondary">h3</Typography>
		<Typography variant="h4" color="info">h4</Typography>
		<Typography variant="h5" color="success">h5</Typography>
		<Typography variant="h6" color="warning">h6</Typography>
		<Typography variant="body1" color="on-surface">body1</Typography>
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
<Variant
	title="Custom Typography"
	code={`
Requirements:
- css class with the following pattern:
  .mdc-typography--CUSTOM_TYPOGRAPHY {}

Example: 
<Typography variant="body3" element="div">Custom Typography</Typography>

// app.css
:root {
  /* body3 */
  --mdc-typography-body3-font-style: normal;
  --mdc-typography-body3-font-weight: 400;
  --mdc-typography-body3-font-size: 0.875em;
  --mdc-typography-body3-line-height: 143%;
  --mdc-typography-body3-letter-spacing: 0.17px;
}
/* Typography | Custom
.mdc-typography--body3 {
  font-family: var(--mdc-typography-font-family);
  font-style: var(--mdc-typography-body3-font-style);
  font-weight: var(--mdc-typography-body3-font-weight);
  font-size: var(--mdc-typography-body3-font-size);
  line-height: var(--mdc-typography-body3-line-height);
  letter-spacing: var(--mdc-typography-body3-letter-spacing);
}
`}
>
	<div class="typography-examples">
		<Typography variant="body3" element="div">Custom Typography</Typography>
	</div>
</Variant>

<style lang="scss">
	.typography-examples {
		display: flex;
		height: min-content;
		width: max-content;
		flex-direction: column;
		text-align: center;
		gap: 8px;
	}
	:global(.typography-examples *) {
		margin: 8px 0px;
		padding: 0px 0px;
	}
</style>
