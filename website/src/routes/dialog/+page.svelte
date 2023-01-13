<script lang="ts">
  import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    Typography
  } from '@uui';
  import Variant from '$lib/Variant.svelte';

  // Vars
  let toggleDialog: () => void;
</script>

<Variant
  title="Dialog"
  code={`Props (with defaults):
  open: boolean = false;
  // Set to false to prevent clickAway closing. 
  clickAway: boolean = true;

Slots: 
  title (use DialogTitle or add mdc-dialog__title class to wrapper)
  content
  actions (Use DialogActions or add mdc-dialog__actions class to wrapper
  
Bindable methods:
  toggleDialog(): void

Helper Components:
 DialogTitle
 DialogActions

Example:
<Dialog bind:toggleDialog>
  <DialogTitle slot="title">Dialog Title</DialogTitle>
  <Typography slot="content">You opened a dialog!</Typography>
  <DialogActions slot="actions">
	<Button on:click={toggleDialog}>Close</Button>
  </DialogActions>
</Dialog>
<Button variant="raised" color="secondary" on:click={toggleDialog}>Open Dialog</Button>`}
>
  <Dialog bind:toggleDialog>
    <DialogTitle slot="title">Dialog Title</DialogTitle>
    <Typography slot="content">You opened a dialog!</Typography>
    <DialogActions slot="actions">
      <Button on:click={toggleDialog}>Close</Button>
    </DialogActions>
  </Dialog>
  <Button variant="raised" color="secondary" on:click={toggleDialog}>Open Dialog</Button>
</Variant>
