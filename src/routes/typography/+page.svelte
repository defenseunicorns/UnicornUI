<script>
  import Typography from '$lib/Typography/typography.svelte';
  import Variant from '../../website-components/Variant.svelte';
  import CustomTypography from '../../website-components/theme/theme-typography?raw';
</script>

<Variant
  title="Typography"
  code={`
https://material.io/develop/web/guides/typography

Props (extends BoxProps):
  variant: TypographyVariant = 'body1';
  color: TextColors = '';
  
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
<Variant title="Custom Typography Variant" code={CustomTypography}>
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
