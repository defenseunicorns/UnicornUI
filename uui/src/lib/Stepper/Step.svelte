<script lang="ts">
  import type { StepOrientation, StepProps, StepVariant } from './stepper.types';
  import StepIcon from './StepIcon.svelte';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';

  // Props
  type $$Props = StepProps;
  export let title = '';
  export let subtitle = '';
  export let disabled = false;
  export let iconContent = '';
  export let variant: StepVariant = 'primary';
  export let orientation: StepOrientation = 'horizontal';
  export let wrapperClass = '';
  export let color: ThemeColors = `on-${variant}`;

  $: fullClass = `step step-${orientation} ${variant} ${wrapperClass}`;
</script>

<div class={fullClass} style="--color: {makeThemeColor(color)}">
  <slot name="step-icon">
    {#if iconContent}
      <StepIcon {variant} {disabled} {title}>{iconContent}</StepIcon>
    {:else}
      <StepIcon {variant} {disabled} {title} />
    {/if}
  </slot>
  <div class="step-captions">
    <span class="mdc-typography--body2">{title}</span>
    <span class="mdc-typography--caption">{subtitle}</span>
  </div>
</div>

<style lang="scss">
  .step {
    display: flex;
    align-items: center;
    color: var(--color);
  }
  .step-vertical {
    gap: 16px;
    flex-direction: column;
    text-align: center;
  }
  .step-horizontal {
    gap: 8px;
  }
  .step .step-captions {
    display: flex;
    flex-direction: column;
  }
</style>
