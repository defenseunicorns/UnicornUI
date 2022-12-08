<script lang="ts">
  import Exclamation from '$lib/shared/assets/svg/exclamation.svelte';
  import Check from '../shared/assets/svg/check.svelte';
  import type { StepVariant } from './stepper.types';

  // Types
  type IconContent = typeof Exclamation | typeof Check;

  // Props
  export let variant: StepVariant = 'primary';
  export let title = '';
  export let disabled = false;

  // Functions
  function getStepContent(stepVariant: StepVariant): IconContent {
    switch (stepVariant) {
      case 'warning':
      case 'info':
      case 'error':
        return Exclamation;
      default:
        return Check;
    }
  }

  // Watch
  $: innerIcon = getStepContent(variant);
  $: wrapperClass = `step-icon mdc-typography--caption ${variant} ${disabled ? 'disabled' : ''}`;
</script>

<div {title} class={wrapperClass}>
  <slot>
    <svelte:component this={innerIcon} />
  </slot>
</div>

<style lang="scss">
  .step-icon {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
    border-radius: 100%;
    color: white;
  }

  .step-icon.primary {
    background: var(--mdc-theme-primary);
    color: var(--mdc-theme-on-primary);
  }
  .step-icon.secondary {
    background: var(--mdc-theme-secondary);
    color: var(--mdc-theme-on-secondary);
    fill: var(--mdc-theme-on-secondary);
  }
  .step-icon.success {
    background: var(--mdc-theme-success, #2e7d32);
    fill: var(--mdc-theme-on-success, white);
  }
  .step-icon.error {
    background: var(--mdc-theme-error, #d32f2f);
    fill: var(--mdc-theme-on-error, white);
  }
  .step-icon.warning {
    background: var(--mdc-theme-warning, #ed6c02);
    fill: var(--mdc-theme-on-warning, white);
  }
  .step-icon.disabled {
    background: var(--mdc-theme-light-on-disabled, rgba(0, 0, 0, 0.38));
    color: var(--mdc-theme-text-on-disabled, white);
    fill: var(--mdc-theme-text-on-disabled, white);
  }
  .step-icon.info {
    background: var(--mdc-theme-info, #0288d1);
    fill: var(--mdc-theme-on-info, white);
    transform: rotate(0.5turn);
  }
</style>
