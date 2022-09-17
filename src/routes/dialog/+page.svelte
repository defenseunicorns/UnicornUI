<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import Dialog from '$lib/Dialog/Dialog.svelte';
	import DialogTitle from '$lib/Dialog/DialogTitle.svelte';
	import DialogActions from '$lib/Dialog/DialogActions.svelte';
	import Variant from '../../website-components/Variant.svelte';

	// Vars
	let toggleDialog: () => void;
</script>

<Variant
	title="Dialog"
	code={`Props (with defaults):
  open: boolean = false

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
	<span slot="content">Dialog Content</span>
	<DialogActions slot="actions">
		<Button shape="squared" on:click={toggleDialog}>Close</Button>
	</DialogActions>
</Dialog>
<Button variant="raised" shape="rounded" on:click={toggleDialog}>Open Dialog</Button>`}
>
	<Dialog bind:toggleDialog>
		<DialogTitle slot="title">Dialog Title</DialogTitle>
		<span slot="content">{`You opened a dialog!`}</span>
		<DialogActions slot="actions">
			<Button shape="squared" on:click={toggleDialog} color="secondary">Close</Button>
		</DialogActions>
	</Dialog>
	<Button variant="raised" shape="rounded" on:click={toggleDialog}>Open Dialog</Button>
</Variant>
