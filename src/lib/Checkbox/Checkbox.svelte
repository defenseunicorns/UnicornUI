<script lang="ts">
	import { MDCFormField } from '@material/form-field';
	import { MDCCheckbox } from '@material/checkbox';
	import { onMount } from 'svelte';

	// Vars
	let mdcCheckbox: MDCCheckbox;
	let checkboxRef: HTMLInputElement;
	let mdcFormField: MDCFormField;
	let formFieldRef: HTMLDivElement;

	// Props
	export let checked = false;
	export let indeterminate: boolean | undefined = undefined;
	export let label = '';
	// Lifecycle
	onMount(() => {
		mdcCheckbox = new MDCCheckbox(checkboxRef);
		mdcFormField = new MDCFormField(formFieldRef);
		mdcFormField.input = mdcCheckbox;
	});

	$: dataIndeterminate = !checked && indeterminate;
</script>

<div bind:this={formFieldRef} class="mdc-form-field">
	<div class="mdc-checkbox">
		<input
			bind:this={checkboxRef}
			bind:checked
			type="checkbox"
			class="mdc-checkbox__native-control"
			id={label}
			data-indeterminate={dataIndeterminate}
		/>
		<div class="mdc-checkbox__background">
			<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
				<path
					class="mdc-checkbox__checkmark-path"
					fill="none"
					d="M1.73,12.91 8.1,19.28 22.79,4.59"
				/>
			</svg>
			<div class="mdc-checkbox__mixedmark" />
		</div>
		<div class="mdc-checkbox__ripple" />
		<div class="mdc-checkbox__focus-ring" />
	</div>
	<label for={label}>{label}</label>
</div>

<style lang="scss">
	@use '@material/checkbox';
	@use '@material/form-field';

	@include checkbox.core-styles;
	@include form-field.core-styles;
</style>
