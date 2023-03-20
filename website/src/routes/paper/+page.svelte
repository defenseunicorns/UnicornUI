<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Typography, Paper } from '@uui';
</script>

<DocPage>
  <Typography variant="h2">Paper</Typography>
  <Typography variant="body1">Basic element for applying elevation to wrapped contents.</Typography>
  <Typography variant="h3">Props</Typography>

  <VariantExample
    code={`
    export type PaperVariant = 'elevation' | 'outlined' | string;
export interface PaperProps<T extends EventTarget> extends BoxProps<T> {
  variant?: PaperVariant;
  elevation?: number;
  square?: boolean;
}
  `}
  />

  <Typography variant="h4">Square</Typography>
  <Typography variant="body1">Default is rounded.</Typography>

  <div class="paper-example">
    <div>
      <Typography variant="subtitle1">False</Typography>
      <Paper elevation={10}>10dp</Paper>
    </div>
    <div>
      <Typography variant="subtitle1">True</Typography>
      <Paper square elevation={10}>10dp</Paper>
    </div>
  </div>

  <Typography variant="h4">Outlined</Typography>
  <Typography variant="body1">
    If the variant is outlined, elevation will automatically be set to 0. You cannot have an
    elevated outlined component.
  </Typography>

  <div class="paper-example">
    <div>
      <Typography variant="subtitle1">False</Typography>
      <Paper elevation={0}>0dp</Paper>
    </div>
    <div>
      <Typography variant="subtitle1">True</Typography>
      <Paper variant="outlined" elevation={10}>0dp</Paper>
    </div>
  </div>

  <Typography variant="h4">Elevation</Typography>
  <Typography variant="body1">Accepted elevation values range from 0 - 24.</Typography>

  <div class="paper-example">
    <Paper elevation={0}>0dp</Paper>
    <Paper elevation={1}>1dp</Paper>
    <Paper elevation={2}>2dp</Paper>
    <Paper elevation={3}>3dp</Paper>
    <Paper elevation={4}>4dp</Paper>
    <Paper elevation={5}>5dp</Paper>
    <Paper elevation={6}>6dp</Paper>
    <Paper elevation={7}>7dp</Paper>
    <Paper elevation={8}>8dp</Paper>
    <Paper elevation={9}>9dp</Paper>
    <Paper elevation={10}>10dp</Paper>
    <Paper elevation={11}>11dp</Paper>
    <Paper elevation={12}>12dp</Paper>
    <Paper elevation={13}>13dp</Paper>
    <Paper elevation={14}>14dp</Paper>
    <Paper elevation={15}>15dp</Paper>
    <Paper elevation={16}>16dp</Paper>
    <Paper elevation={17}>17dp</Paper>
    <Paper elevation={18}>18dp</Paper>
    <Paper elevation={19}>19dp</Paper>
    <Paper elevation={20}>20dp</Paper>
    <Paper elevation={21}>21dp</Paper>
    <Paper elevation={22}>22dp</Paper>
    <Paper elevation={23}>23dp</Paper>
    <Paper elevation={24}>24dp</Paper>
  </div>

  <VariantExample
    code={`
<Paper  elevation={10}>10dp</Paper>
<Paper  square elevation={10}>10dp</Paper>
<Paper  elevation={10}>10dp</Paper>
<Paper  variant="outlined" elevation={10}>10dp</Paper>
<Paper  elevation={0}>0dp</Paper>
<Paper  elevation={1}>1dp</Paper>
<Paper  elevation={2}>2dp</Paper>
<Paper  elevation={3}>3dp</Paper>
<Paper  elevation={4}>4dp</Paper>
<Paper  elevation={5}>5dp</Paper>
<Paper  elevation={6}>6dp</Paper>
<Paper  elevation={7}>7dp</Paper>
<Paper  elevation={8}>8dp</Paper>
<Paper  elevation={9}>9dp</Paper>
<Paper  elevation={10}>10dp</Paper>
<Paper  elevation={11}>11dp</Paper>
<Paper  elevation={12}>12dp</Paper>
<Paper  elevation={13}>13dp</Paper>
<Paper  elevation={14}>14dp</Paper>
<Paper  elevation={15}>15dp</Paper>
<Paper  elevation={16}>16dp</Paper>
<Paper  elevation={17}>17dp</Paper>
<Paper  elevation={18}>18dp</Paper>
<Paper  elevation={19}>19dp</Paper>
<Paper  elevation={20}>20dp</Paper>
<Paper  elevation={21}>21dp</Paper>
<Paper  elevation={22}>22dp</Paper>
<Paper  elevation={23}>23dp</Paper>
<Paper  elevation={24}>24dp</Paper>
  `}
  />
</DocPage>

<style lang="scss">
  .paper-example {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
  }
  .paper-example :global(.paper) {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
