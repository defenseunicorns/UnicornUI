<script lang="ts">
  import { Box, Button, TextField, Typography } from '@uui';
  let formValue = '';
</script>

<Box class="text-field-example">
  <form
    on:submit={() => {
      alert(`you submitted ${formValue}`);
      formValue = '';
    }}
  >
    <div class="labeled-example">
      <Typography variant="subtitle1">Validate:</Typography>
      <TextField
        bind:value={formValue}
        required
        inputProps={{ pattern: '.+@.+.com', maxlength: 20, minlength: 8 }}
        variant="outlined"
        label="Email"
        helperText="Email format"
        characterCounter
      />
    </div>
    <Button style={'margin-top: 2px;'} type="submit" variant="text">Submit</Button>
  </form>
</Box>

<style>
  .labeled-example {
    display: flex;
    flex-direction: column;
    height: 7rem;
    justify-content: space-between;
  }
</style>
