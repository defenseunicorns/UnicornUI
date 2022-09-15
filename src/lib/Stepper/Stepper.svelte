<script lang="ts">
	import Step from './Step.svelte';
	import type { StepOrientation, StepProps } from './stepper.types';

	// Props
	export let steps: StepProps[] = [
		{ title: 'Replace Defaults', subtitle: `I need Steps`, iconContent: '1' }
	];
	export let orientation: StepOrientation = 'horizontal';
	export let verticalGap = '50px';

	// vars
	let stepOrientation: StepOrientation;

	// Watch
	$: stepperClass = `stepper stepper-${orientation}`;
	$: stepOrientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';
</script>

<ol class={stepperClass} style="--vertical-gap: {verticalGap}">
	{#each steps as step}
		<li class="stepper-item">
			<Step {...step} orientation={stepOrientation} />
		</li>
	{/each}
</ol>

<style lang="scss" global>
	.stepper {
		display: flex;
		z-index: 0;
	}
	.stepper-vertical {
		flex-direction: column;
	}
	.stepper-item {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.stepper-vertical .stepper-item:not(:last-child) {
		position: relative;
		padding-bottom: var(--vertical-gap);
	}
	.stepper-vertical .stepper-item:not(:last-child):before {
		content: '';
		position: absolute;
		left: 0;
		top: 20px;
		bottom: 20px;
		transform: translate(12px, 12px);
		width: 2px;
		background-color: #bdbdbd;
	}

	.stepper-horizontal .stepper-item:not(:last-child):after {
		content: '';
		position: relative;
		top: 12px;
		height: 2px;
		max-height: 2px;
		left: calc(50% + 12px + 12px);
		z-index: -1;
		width: calc(100% - 24px - calc(24px));
		order: -1;
		background-color: #bdbdbd;
	}
</style>
