<script lang="ts">
  import { Paper, Radio, Box } from '@uui';

  const paperSSX = {
    $self: {
      display: 'flex',
      'flex-direction': 'column',
      gap: '.5rem',
      padding: '.5em',
      width: '200px'
    }
  };
</script>

<Box
  ssx={{
    $self: {
      width: '100%',
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      gap: '2rem'
    }
  }}
>
  <Paper elevation={20} ssx={paperSSX}>
    <Radio id="radio-1" name="radio-1" label="Option 1" checked />
    <Radio id="radio-2" name="radio-1" label="Option 2" />
  </Paper>

  <Paper elevation={20} ssx={paperSSX}>
    <Radio id="radio-4" name="radio-2" label="Disabled Option 1" disabled />
    <Radio id="radio-5" name="radio-2" label="Disabled Option 2" disabled checked />
  </Paper>

  <Paper elevation={20} ssx={paperSSX}>
    <Radio id="radio-7" name="radio-3" label="Option 1" color="primary" checked />
    <Radio id="radio-8" name="radio-3" label="Option 2" color="primary" />
  </Paper>
</Box>
