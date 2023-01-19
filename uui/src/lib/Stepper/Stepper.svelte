<script lang="ts">
  import Step from './Step.svelte';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import type { CustomSteps, CustomStep, StepOrientation, StepProps } from './stepper.types';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

  // Props
  export let steps: StepProps[] | CustomSteps = [];
  export let orientation: StepOrientation = 'horizontal';
  export let verticalGap = '50px';
  export let color: ThemeColors = 'on-primary';
  // Watch
  $: stepperClass = `stepper stepper-${orientation}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function instanceOfCustomSteps(object: any): object is CustomStep {
    return 'element' in object && 'props' in object;
  }
</script>

<ol class={stepperClass} style="--vertical-gap: {verticalGap}; --color: {makeThemeColor(color)}">
  {#each steps as step}
    <li class="stepper-item">
      {#if instanceOfCustomSteps(step)}
        <svelte:component this={step.element} {...step.props} />
      {:else}
        <Step {color} {...step} orientation="horizontal" />
      {/if}
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
  .stepper-vertical .stepper-item:not(:last-child) .divider-vertical {
    height: var(--vertical-gap);
    width: 2px;
    background-color: var(--color);
    margin-left: 11px;
    margin-top: 4px;
    margin-bottom: 4px;
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
    border-color: var(--color);
    border-top-style: solid;
    border-top-width: 2px;
    margin: 8px;
  }
</style>
