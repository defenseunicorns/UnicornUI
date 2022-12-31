<script lang="ts">
  import Step from './Step.svelte';
  import type { StepOrientation, StepProps } from './stepper.types';

  // Props
  export let steps: StepProps[] = [
    { title: 'Replace Defaults', subtitle: `I need Steps`, iconContent: '1' }
  ];
  export let orientation: StepOrientation = 'horizontal';
  export let verticalGap = '50px';

  // Watch
  $: stepperClass = `stepper stepper-${orientation}`;
</script>

<ol class={stepperClass} style="--vertical-gap: {verticalGap}">
  {#each steps as step}
    <li class="stepper-item" >
      <Step {...step} orientation="horizontal" />
      <div class="divider-{orientation}"/>
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
  .stepper-vertical .stepper-item {
    display: flex;
    flex-direction: column;
  }
  .stepper-vertical .stepper-item:not(:last-child) {
    position: relative;
    padding-bottom: var(--vertical-gap);
  }
  .stepper-vertical .stepper-item:not(:last-child) .divider-vertical {
    position: absolute;
    transform: translate(12px, 12px);
    left:0;
    top: 20px;
    bottom: 20px;
    border-color: #bdbdbd;
    border-left-style: solid;
    border-left-width: 2px;
  }

  .stepper-horizontal .stepper-item {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  .stepper-horizontal .stepper-item:not(:last-child) .divider-horizontal {
    display: flex;
    flex: 1 1 auto;
    border-color: #bdbdbd;
    border-top-style: solid;
    border-top-width: 2px;
    margin: 8px;
  }
</style>
