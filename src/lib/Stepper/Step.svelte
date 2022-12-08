<script lang="ts">
  import type { StepOrientation, StepVariant } from './stepper.types';
  import StepIcon from './StepIcon.svelte';

  // Props
  export let title = '';
  export let subtitle = '';
  export let disabled = false;
  export let iconContent = '';
  export let variant: StepVariant = 'primary';
  export let orientation: StepOrientation = 'vertical';
  export let wrapperClass = '';

  $: fullClass = `step step-${orientation} ${variant} ${wrapperClass}`;
</script>

<div class={fullClass}>
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
  }
  .step-vertical {
    gap: 16px;
    flex-direction: column;
    text-align: center;
  }
  .step-horizontal {
    gap: 8px;
    align-items: flex-start;
  }
  .step .step-captions {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
  .step.primary .step-captions span {
    color: var(--mdc-theme-on-primary);
  }
  .step.secondary .step-captions span {
    color: var(--mdc-theme-on-secondary);
  }
  .step.success .step-captions span {
    color: var(--mdc-theme-success, #2e7d32);
  }
  .step.error .step-captions span {
    color: var(--mdc-theme-error, #d32f2f);
  }
  .step.warning .step-captions span {
    color: var(--mdc-theme-warning, #ed6c02);
  }
  .step.info .step-captions span {
    color: var(--mdc-theme-info, #0288d1);
  }
  .step.disabled .step-captions span {
    color: var(--mdc-theme-light-on-disabled, rgba(0, 0, 0, 0.38));
  }
</style>
