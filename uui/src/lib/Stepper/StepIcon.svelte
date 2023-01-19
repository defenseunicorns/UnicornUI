<script lang="ts">
  import type { StepVariant } from './stepper.types';
  import Check from '../shared/assets/svg/check.svelte';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import Exclamation from '../shared/assets/svg/exclamation.svelte';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';
  import Typography from '../Typography/typography.svelte';
  import { jsToCSS } from '../shared/theme/config/theme-config.utils';

  // Types
  type IconContent = typeof Exclamation | typeof Check;

  // Props
  export let title = '';
  export let disabled = false;
  export let variant: StepVariant = 'primary';
  export let color: ThemeColors = `on-${variant}`;
  export let backgroundColor: ThemeColors = variant;

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

<div
  {title}
  class={wrapperClass}
  style="--background-color: {makeThemeColor(backgroundColor)}; --color: {makeThemeColor(color)};"
>
  <Typography
    variant="body2"
    style={jsToCSS({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 'initial'
    })}
  >
    <slot>
      <svelte:component this={innerIcon} />
    </slot>
  </Typography>
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
    color: var(--color);
    background-color: var(--background-color);
    fill: var(--color);
  }
  .step-icon.disabled {
    color: var(--mdc-theme-on-disabled);
    background-color: var(--mdc-theme-disabled);
    fill: var(--mdc-theme-on-disabled);
  }
  .step-icon.info {
    transform: rotate(0.5turn);
  }
</style>
