<script lang="ts">
  import VariantExample from '../../lib/VariantExample.svelte';
  import DocPage from '../../lib/doc-page.svelte';
  import { Typography, Paper } from '@uui';
</script>

<DocPage>
  <Typography variant="h2">Paper</Typography>

  <Typography variant="h4">Square</Typography>
  <div class="paper-container">
    <div>
      <Typography variant="subtitle1">False</Typography>
      <Paper class="paper" elevation={10}>10dp</Paper>
    </div>
    <div>
      <Typography variant="subtitle1">True</Typography>
      <Paper class="paper" square elevation={10}>10dp</Paper>
    </div>
  </div>

  <Typography variant="h4">Outlined</Typography>
  <div class="paper-container">
    <div>
      <Typography variant="subtitle1">False</Typography>
      <Paper class="paper" elevation={10}>10dp</Paper>
    </div>
    <div>
      <Typography variant="subtitle1">True</Typography>
      <Paper class="paper" variant="outlined" elevation={10}>10dp</Paper>
    </div>
  </div>

  <Typography variant="h4">Elevation</Typography>

  <div class="paper-container">
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
  </div>

  <div class="paper-container dark">
    <Paper class="paper" themeMode="dark" elevation={0}>0dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={1}>1dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={2}>2dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={3}>3dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={4}>4dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={5}>5dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={6}>6dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={7}>7dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={8}>8dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={9}>9dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={10}>10dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={11}>11dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={12}>12dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={13}>13dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={14}>14dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={15}>15dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={16}>16dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={17}>17dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={18}>18dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={19}>19dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={20}>20dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={21}>21dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={22}>22dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={23}>23dp</Paper>
    <Paper class="paper" themeMode="dark" elevation={24}>24dp</Paper>
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

  .dark {
    background-color: #0a0e2e;
  }
  .paper {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
