<script lang="ts">
  import { Button, Dialog, DialogTitle, DialogActions, Typography } from '@uui';
  import Variant from '$lib/Variant.svelte';

  // Vars
  let toggleDialog: () => void;
</script>

<Variant
  title="Dialog"
  code={`Props Extends PaperProps:
  open: boolean = false;
  // Set to false to prevent clickAway closing. 
  clickAway: boolean = true;
  // Paper props apply to the .dialog-surface class
  // This prop allows ssx to be added to the .dialog-container class
  containerSSX: SSX = {};


Slots: 
  title (use DialogTitle or add dialog-title class to wrapper to gain the dialog-title styles)
  content
  actions (Use DialogActions or add dialog-actions class to wrapper to gain the dialog styles)
  
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
