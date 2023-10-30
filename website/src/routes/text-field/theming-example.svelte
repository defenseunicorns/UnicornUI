<script lang="ts">
  import { Box, TextField, TextFieldIcon, Typography } from '@uui';
</script>

<Box class="text-field-example">
  <div class="labeled-example">
    <Typography variant="subtitle1">Override Focus:</Typography>
    <TextField
      variant="outlined"
      label="Label"
      color="secondary"
      value="Value"
      helperText="Click me: color is secondary"
    />
  </div>
  <div class="labeled-example">
    <Typography variant="subtitle1">Override Icon:</Typography>
    <TextField
      label="Label"
      variant="outlined"
      color="primary"
      helperText="icon color is overridden by custom style prop"
    >
      <TextFieldIcon
        variant="leading"
        slot="leadingIcon"
        class="material-symbols-outlined"
        style="color: pink !important;"
      >
        search
      </TextFieldIcon>
    </TextField>
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
