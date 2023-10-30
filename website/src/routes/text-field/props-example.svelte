<script lang="ts">
  import { Box, TextField, Typography } from '@uui';
</script>

<Box class="text-field-example">
  <div class="labeled-example">
    <Typography variant="subtitle1">Required:</Typography>
    <TextField required label="Label" variant="outlined" color="primary" />
  </div>

  <div class="labeled-example">
    <Typography variant="subtitle1">Helper Text:</Typography>
    <TextField label="Label" variant="outlined" color="primary" helperText="supporting text" />
  </div>

  <div class="labeled-example">
    <Typography variant="subtitle1">Character Counter:</Typography>
    <TextField
      label="Label"
      variant="outlined"
      color="primary"
      characterCounter
      inputProps={{ maxlength: 60 }}
    />
  </div>
  <div class="labeled-example">
    <Typography variant="subtitle1">Disabled:</Typography>
    <TextField label="Label" variant="outlined" color="primary" value="Value" disabled />
  </div>
  <div class="labeled-example">
    <Typography variant="subtitle1">Error:</Typography>
    <TextField error label="Label" variant="outlined" color="primary" value="Value" />
  </div>
</Box>

<style lang="scss">
  .labeled-example {
    display: flex;
    flex-direction: column;
    height: 7rem;
    justify-content: space-between;
  }
</style>
