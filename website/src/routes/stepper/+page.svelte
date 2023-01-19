<script lang="ts">
  import Variant from '$lib/Variant.svelte';
  import VariantExample from '$lib/VariantExample.svelte';
  import CustomStep from './custom-step.svelte';
  import CUSTOM_STEP_TEXT from './custom-step.svelte?raw';
  import {
    Step,
    Typography,
    type StepProps,
    Stepper,
    StepIcon,
    Accordion,
    AccordionGroup
  } from '@uui';
  import { currentTheme } from '$lib/theme/theme-store';

  let currentThemeVal: string;

  currentTheme.subscribe((value) => {
    currentThemeVal = value;
  });

  const steps: StepProps[] = [
    {
      title: 'Validate Configuration',
      subtitle: 'Replace all package variables'
    },
    {
      title: 'Deploy K3s & Initialize Cluster'
    },
    {
      title: 'Deploy Zarf Injector'
    },
    {
      title: 'Deploy Zarf Seed - Registry'
    },
    {
      title: 'Deploy Zarf Registry',
      iconContent: '5'
    },
    {
      title: 'Deploy Zarf Agent',
      iconContent: '6',
      disabled: true
    }
  ];
</script>

<Variant
  title="Stepper"
  code={`
Props:
  // Overrides the divider color and sets the step color (can be overridden in provided step props). 
  color?: ThemeColors = 'on-primary'
  verticalGap?: string = '50px';
  steps?: StepProps[] | CustomSteps[] = [];
  orientation?: StepOrientation = 'horizontal';
  
Slots:
 none

Notes:
  - Stepper ignores individual step orientation.
`}
>
  <AccordionGroup>
    <!--Sub Components-->
    <Accordion>
      <Typography slot="headerContent" variant="h6">Stepper Vertical</Typography>
      <div slot="content">
        <VariantExample
          code={`<Stepper orientation="vertical" steps={[...steps]} color="on-surface" />`}
        />
        <div
          style="display: flex; justify-content: center; width: 50%; margin-left: auto; margin-right: auto;"
        >
          <Stepper orientation="vertical" steps={[...steps]} color="on-surface" />
        </div>
      </div>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Stepper Horizontal</Typography>
      <div slot="content">
        <VariantExample
          code={`<Stepper orientation="horizontal" steps={[...steps]} color="on-surface" />`}
        />
        <Stepper
          orientation="horizontal"
          color="on-surface"
          steps={[
            {
              title: 'Validate Configuration',
              subtitle: 'Replace all package variables'
            },
            {
              title: 'Deploy K3s & Initialize Cluster'
            },
            {
              title: 'Deploy Zarf Injector'
            }
          ]}
        />
      </div>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Stepper (Custom Steps)</Typography>
      <div slot="content">
        <VariantExample code={CUSTOM_STEP_TEXT} />
        <br />
        <VariantExample
          code={`
<Stepper
  orientation="vertical"
  color={currentThemeVal === 'dark' ? 'white' : 'error'}
  steps={steps.map((s) => ({ props: s, element: CustomStep }))}
/>
`}
        />
        <div
          style="display: flex; justify-content: center; width: 50%; margin-left: auto; margin-right: auto;"
        >
          <Stepper
            orientation="vertical"
            color={currentThemeVal === 'dark' ? 'white' : 'error'}
            steps={steps.map((s) => ({ props: s, element: CustomStep }))}
          />
        </div>
      </div>
    </Accordion>
    <Accordion class="step-icon-accordian" contentClass="step-icon-accordian-content">
      <Typography slot="headerContent" variant="h6">StepIcon</Typography>
      <div slot="content">
        <VariantExample
          code={`
Props:
  // Hover title (optional).
  title?: string = "";
  variant?: StepVariant = 'primary';
  // Overridable fill/content color
  color?: ThemeColor = \`on-$\{variant}\`;
  // Overridable background-color
  backgroundColor?: ThemeColor = variant;
  
  Slots:
  unnamed: (replaces default content)
  
  Examples:
  <StepIcon />
  <StepIcon>2</StepIcon>
  <StepIcon variant="secondary">4</StepIcon>
  <StepIcon variant="success" />
  <StepIcon variant="warning" />
  <StepIcon variant="error" />
  <StepIcon variant="info" />
  <StepIcon disabled />
  <StepIcon disabled>3</StepIcon>
`}
        />
        <div class="step-icons">
          <StepIcon />
          <StepIcon>2</StepIcon>
          <StepIcon variant="secondary">4</StepIcon>
          <StepIcon variant="success" />
          <StepIcon variant="warning" />
          <StepIcon variant="error" />
          <StepIcon variant="info" />
          <StepIcon disabled />
          <StepIcon disabled>3</StepIcon>
        </div>
      </div>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Step</Typography>
      <div slot="content">
        <VariantExample
          code={`
Props (with defaults):
  disabled = false;
  title: string = "";
  subtitle: string = "";
  variant: StepVariant = 'primary';
  iconContent = "";
  orientation: StepOrientation = 'horizontal';
  // Overrides the title & subtitle colors. 
  color?: ThemeColor = \`on-$\{variant}\`

Slots:
  iconContent (replaces StepIcon default)

Examples:
  <Step title="Vertical" subtitle="step" />
  <Step 
  title="Horizontal" 
  subtitle="step" 
  variant="success" 
  color="on-surface"
  orientation="horizontal" />

`}
        />
        <div class="step-icons">
          <Step title="Vertical" subtitle="step" orientation="vertical" />
          <Step title="Horizontal" subtitle="step" variant="success" color="on-surface" />
        </div>
      </div>
    </Accordion>
  </AccordionGroup>
</Variant>

<style>
  .step-icons {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
