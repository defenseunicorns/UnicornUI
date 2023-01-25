<script lang="ts">
  import Box from '../Box/box.svelte';
  import StepIcon from './StepIcon.svelte';
  import Typography from '../Typography/typography.svelte';
  import { makeThemeColor } from '../shared/utils/makeThemeColor';
  import { jsToCSS } from '../shared/theme/config/theme-config.utils';
  import type { StepOrientation, StepProps, StepVariant } from './stepper.types';
  import type { ThemeColors } from '../shared/theme/default-colors/colors.types';

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
      <StepIcon {variant} {disabled} {title}>
        {iconContent}
      </StepIcon>
    {:else}
      <StepIcon {variant} {disabled} {title} />
    {/if}
  </slot>
  <Box
    element="div"
    class="step-captions"
    style={jsToCSS({ display: 'flex', flexDirection: 'column', justifyContent: 'center' })}
  >
    <Typography variant="body2" style="">{title}</Typography>
    <Typography element="p" variant="caption" style="">{subtitle}</Typography>
  </Box>
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
</style>
