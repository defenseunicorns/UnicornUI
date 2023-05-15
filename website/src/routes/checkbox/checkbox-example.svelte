<script lang="ts">
  import { Box, Checkbox, Paper } from '@uui';

  let formFieldsSSX = {
    $self: { display: 'flex', 'align-items': 'center', margin: '.5rem' }
  };

  const checkboxes = [
    { label: 'Inactive', checked: false, indeteriminate: false, id: 'checkbox-1', disabled: false },
    { label: 'Checked', checked: true, indeteriminate: false, id: 'checkbox-2', disabled: false },
    {
      label: 'Indeteriminate',
      checked: false,
      indeteriminate: true,
      id: 'checkbox-3',
      disabled: false
    },
    { label: 'Disabled', checked: false, indeteriminate: false, id: 'checkbox-4', disabled: true },
    {
      label: 'Disabled Checked',
      checked: false,
      indeteriminate: false,
      id: 'checkbox-5',
      disabled: true
    },
    {
      label: 'Stroke Color',
      checked: true,
      indeteriminate: false,
      id: 'checkbox-6',
      disabled: false,
      color: 'red'
    },
    {
      label: 'Background Color',
      checked: true,
      indeteriminate: false,
      id: 'checkbox-7',
      disabled: false,
      backgroundColor: 'red'
    }
  ];
</script>

<Paper
  elevation={16}
  ssx={{ $self: { padding: '1rem', display: 'flex', 'justify-content': 'space-around' } }}
>
  <form>
    {#each checkboxes as checkbox}
      <Box ssx={formFieldsSSX}>
        <Checkbox
          id={checkbox.id}
          label={checkbox.label}
          disabled={checkbox.disabled}
          checked={checkbox.checked}
          indeterminate={checkbox.indeteriminate}
          color={checkbox.color}
          backgroundColor={checkbox.backgroundColor}
        />
      </Box>
    {/each}
  </form>
  <form>
    {#each checkboxes as checkbox}
      <Box ssx={formFieldsSSX}>
        <Checkbox
          id={checkbox.id}
          disabled={checkbox.disabled}
          checked={checkbox.checked}
          indeterminate={checkbox.indeteriminate}
          color={checkbox.color}
          backgroundColor={checkbox.backgroundColor}
        />
      </Box>
    {/each}
  </form>
</Paper>
