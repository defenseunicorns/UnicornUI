<!--CustomStep-->
<script lang="ts">
  import { currentTheme, Step, StepIcon, type StepProps } from '@uui';
  let currentThemeVal: string;

  currentTheme.subscribe((value) => {
    currentThemeVal = value;
  });

  $: color = currentThemeVal === 'dark' ? 'error' : 'white';
  $: backgroundColor = currentThemeVal === 'dark' ? 'white' : 'error';
  type $$Props = StepProps;
</script>

<Step {...$$props} color={backgroundColor}>
  <StepIcon slot="step-icon" variant="error" {color} {backgroundColor} />
</Step>
