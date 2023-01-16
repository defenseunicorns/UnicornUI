<script lang="ts">
  import Step from './Step.svelte';
  import type { StepOrientation, StepProps } from './stepper.types';

  // Props
  export let steps: StepProps[] = [];
  export let orientation: StepOrientation = 'horizontal';
  export let verticalGap = '50px';

  // Watch
  $: stepperClass = `stepper stepper-${orientation}`;
</script>

<ol class={stepperClass} style="--vertical-gap: {verticalGap}">
  {#each steps as step}
    <li class="stepper-item">
      <Step {...step} orientation="horizontal" />
      <div class="divider-{orientation}" />
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
    left: 12px;
    top: 40%;
    bottom: 10%;
    border-color: var(--mdc-theme-on-primary);
    border-left-style: solid;
    border-left-width: 2px;
  }

  .stepper-horizontal .stepper-item {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
  }
  .stepper-horizontal .stepper-item:not(:last-child) .divider-horizontal {
    display: flex;
    flex: 1 1 auto;
    border-color: var(--mdc-theme-on-primary);
    border-top-style: solid;
    border-top-width: 2px;
    margin: 8px;
  }
</style>
