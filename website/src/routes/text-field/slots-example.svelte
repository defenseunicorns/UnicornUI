<script lang="ts">
  import { Box, TextField, TextFieldIcon, Typography } from '@uui';
</script>

<Box class="text-field-example">
  <div class="labeled-example">
    <Typography variant="subtitle1">Leading Icon:</Typography>
    <TextField label="Label" variant="outlined" color="primary">
      <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
        search
      </TextFieldIcon>
    </TextField>
  </div>
  <div class="labeled-example">
    <Typography variant="subtitle1">Trailing Icon:</Typography>
    <TextField label="Label" variant="outlined" color="primary">
      <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined">
        close
      </TextFieldIcon>
    </TextField>
  </div>
  <div class="labeled-example">
    <Typography variant="subtitle1">Both Icons:</Typography>
    <TextField label="Label" variant="outlined" color="primary">
      <TextFieldIcon variant="leading" slot="leadingIcon" class="material-symbols-outlined">
        search
      </TextFieldIcon>
      <TextFieldIcon variant="trailing" slot="trailingIcon" class="material-symbols-outlined">
        close
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
