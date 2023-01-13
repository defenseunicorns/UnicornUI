<script lang="ts">
  import Variant from '$lib/Variant.svelte';
  import VariantExample from '$lib/VariantExample.svelte';
  import {
    Step,
    Typography,
    type StepProps,
    Stepper,
    StepIcon,
    Accordion,
    AccordionGroup
  } from '@uui';

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
  code={`Props (with defaults):
  steps: StepProps[] = [];
  verticalGap: string = '50px';
  orientation: StepOrientation = 'horizontal';

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
        <VariantExample code={`<Stepper orientation="vertical" steps={[...steps]} />`} />
        <div
          style="display: flex; justify-content: center; width: 50%; margin-left: auto; margin-right: auto;"
        >
          <Stepper orientation="vertical" steps={[...steps]} />
        </div>
      </div>
    </Accordion>
    <Accordion>
      <Typography slot="headerContent" variant="h6">Stepper Horizontal</Typography>
      <div slot="content">
        <VariantExample code={`<Stepper orientation="horizontal" steps={[...steps]} />`} />
        <Stepper
          orientation="horizontal"
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
    <Accordion class="step-icon-accordian" contentClass="step-icon-accordian-content">
      <Typography slot="headerContent" variant="h6">StepIcon</Typography>
      <div slot="content">
        <VariantExample
          code={`Props (with defaults):
  variant: StepVariant = 'primary';
  // Hover title (optional).
  title: string = '';
  
  Slots:
  unnamed: (replaces default content)
  
  Examples:
  <StepIcon />
  <StepIcon>2</StepIcon>
  <StepIcon disabled>3</StepIcon>
  <StepIcon variant="secondary">4</StepIcon>
  <StepIcon variant="success" />
  <StepIcon variant="warning" />
  <StepIcon variant="error" />
  <StepIcon variant="info" />`}
        />
        <div class="step-icons">
          <StepIcon />
          <StepIcon>2</StepIcon>
          <StepIcon disabled>3</StepIcon>
          <StepIcon variant="secondary">4</StepIcon>
          <StepIcon variant="success" />
          <StepIcon variant="warning" />
          <StepIcon variant="error" />
          <StepIcon variant="info" />
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
  title: string = '';
  subtitle: string = '';
  variant: StepVariant = 'primary';
  iconContent = '';
  orientation: StepOrientation = 'horizontal';

Slots:
  iconContent (replaces StepIcon default)

Examples:
  <Step title="Vertical" subtitle="step" />
  <Step 
  title="Horizontal" 
  subtitle="step" 
  variant="success" 
  orientation="horizontal" />

`}
        />
        <div class="step-icons">
          <Step title="Vertical" subtitle="step" orientation="vertical" />
          <Step title="Horizontal" subtitle="step" variant="success" />
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
