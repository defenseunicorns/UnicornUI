<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Typography, Paper } from '@uui';

  import { currentTheme } from '$lib/theme/theme-store';

  let currentThemeVal: string;
  let themeMode: string;

  currentTheme.subscribe((value) => {
    currentThemeVal = value;
  });

  $: themeMode = currentThemeVal;
</script>

<DocPage>
  <Typography variant="h2">Paper</Typography>

  <Typography variant="h4">Square</Typography>
  <div class="paper-container">
    <div>
      <Typography variant="subtitle1">False</Typography>
      <Paper class="paper" {themeMode} elevation={10}>10dp</Paper>
    </div>
    <div>
      <Typography variant="subtitle1">True</Typography>
      <Paper class="paper" {themeMode} square elevation={10}>10dp</Paper>
    </div>
  </div>

  <Typography variant="h4">Outlined</Typography>
  <div class="paper-container">
    <div>
      <Typography variant="subtitle1">False</Typography>
      <Paper class="paper" {themeMode} elevation={10}>10dp</Paper>
    </div>
    <div>
      <Typography variant="subtitle1">True</Typography>
      <Paper class="paper" {themeMode} variant="outlined" elevation={10}>10dp</Paper>
    </div>
  </div>

  <Typography variant="h4">Elevation</Typography>

  <div class="paper-container">
    <Paper class="paper" {themeMode} elevation={0}>0dp</Paper>
    <Paper class="paper" {themeMode} elevation={1}>1dp</Paper>
    <Paper class="paper" {themeMode} elevation={2}>2dp</Paper>
    <Paper class="paper" {themeMode} elevation={3}>3dp</Paper>
    <Paper class="paper" {themeMode} elevation={4}>4dp</Paper>
    <Paper class="paper" {themeMode} elevation={5}>5dp</Paper>
    <Paper class="paper" {themeMode} elevation={6}>6dp</Paper>
    <Paper class="paper" {themeMode} elevation={7}>7dp</Paper>
    <Paper class="paper" {themeMode} elevation={8}>8dp</Paper>
    <Paper class="paper" {themeMode} elevation={9}>9dp</Paper>
    <Paper class="paper" {themeMode} elevation={10}>10dp</Paper>
    <Paper class="paper" {themeMode} elevation={11}>11dp</Paper>
    <Paper class="paper" {themeMode} elevation={12}>12dp</Paper>
    <Paper class="paper" {themeMode} elevation={13}>13dp</Paper>
    <Paper class="paper" {themeMode} elevation={14}>14dp</Paper>
    <Paper class="paper" {themeMode} elevation={15}>15dp</Paper>
    <Paper class="paper" {themeMode} elevation={16}>16dp</Paper>
    <Paper class="paper" {themeMode} elevation={17}>17dp</Paper>
    <Paper class="paper" {themeMode} elevation={18}>18dp</Paper>
    <Paper class="paper" {themeMode} elevation={19}>19dp</Paper>
    <Paper class="paper" {themeMode} elevation={20}>20dp</Paper>
    <Paper class="paper" {themeMode} elevation={21}>21dp</Paper>
    <Paper class="paper" {themeMode} elevation={22}>22dp</Paper>
    <Paper class="paper" {themeMode} elevation={23}>23dp</Paper>
    <Paper class="paper" {themeMode} elevation={24}>24dp</Paper>
  </div>

  <VariantExample
    code={`
    <Paper class="paper" elevation={0}>0dp</Paper>
<Paper class="paper" elevation={1}>1dp</Paper>
<Paper class="paper" elevation={2}>2dp</Paper>
<Paper class="paper" elevation={3}>3dp</Paper>
<Paper class="paper" elevation={4}>4dp</Paper>
<Paper class="paper" elevation={5}>5dp</Paper>
<Paper class="paper" elevation={6}>6dp</Paper>
<Paper class="paper" elevation={7}>7dp</Paper>
<Paper class="paper" elevation={8}>8dp</Paper>
<Paper class="paper" elevation={9}>9dp</Paper>
<Paper class="paper" elevation={10}>10dp</Paper>
<Paper class="paper" elevation={11}>11dp</Paper>
<Paper class="paper" elevation={12}>12dp</Paper>
<Paper class="paper" elevation={13}>13dp</Paper>
<Paper class="paper" elevation={14}>14dp</Paper>
<Paper class="paper" elevation={15}>15dp</Paper>
<Paper class="paper" elevation={16}>16dp</Paper>
<Paper class="paper" elevation={17}>17dp</Paper>
<Paper class="paper" elevation={18}>18dp</Paper>
<Paper class="paper" elevation={19}>19dp</Paper>
<Paper class="paper" elevation={20}>20dp</Paper>
<Paper class="paper" elevation={21}>21dp</Paper>
<Paper class="paper" elevation={22}>22dp</Paper>
<Paper class="paper" elevation={23}>23dp</Paper>
<Paper class="paper" elevation={24}>24dp</Paper>
  `}
  />
</DocPage>

<style lang="scss" global>
  .paper-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
  }
  .paper {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
