<script lang="ts">
	import Step from '$lib/Stepper/Step.svelte';
	import StepIcon from '$lib/Stepper/StepIcon.svelte';
	import Accordion from '$lib/Accordion/accordion.svelte';
	import type { StepProps } from '$lib';
	import Variant from '../../website-components/Variant.svelte';
	import Stepper from '$lib/Stepper/Stepper.svelte';
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
`}
>
	<div style="width: 100%;gap: 2px; display: flex; flex-direction: column;">
		<!--Sub Components-->
		<Accordion>
			<span slot="headerContent" class="mdc-typography--headline6">Stepper Vertical</span>
			<div slot="content">
				<pre>
					{`<div
  style="display: flex; justify-content: center; width: 50%; margin-left: auto; margin-right: auto;"
>
  <Stepper orientation="vertical" steps={[...steps]} />
</div>`}
</pre>
				<div
					style="display: flex; justify-content: center; width: 50%; margin-left: auto; margin-right: auto;"
				>
					<Stepper orientation="vertical" steps={[...steps]} />
				</div>
			</div>
		</Accordion>
		<Accordion>
			<span slot="headerContent" class="mdc-typography--headline6">Stepper Horizontal</span>
			<div slot="content">
				<Stepper orientation="horizontal" steps={[...steps]} />
			</div>
		</Accordion>
		<Accordion wrapperClass="step-icon-accordian" contentClass="step-icon-accordian-content">
			<span slot="headerContent" class="mdc-typography--headline6">StepIcon</span>

			<div slot="content">
				<pre>
{`Props (with defaults):
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
                </pre>
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
			<span slot="headerContent" class="mdc-typography--headline6">Step</span>
			<div slot="content">
				<pre>
{`
Props (with defaults):
  disabled = false;
  title: string = '';
  subtitle: string = '';
  variant: StepVariant = 'primary';
  iconContent = '';
  orientation: StepOrientation = 'vertical';

Slots:
  iconContent (replaces StepIcon default)

Examples:
  <Step title="Vertical" subtitle="step" />
  <Step 
    title="Horizontal" 
    subtitle="step" 
    variant="success" 
    orientation="horizontal" />

`.trim()}
                </pre>
				<div class="step-icons">
					<Step title="Vertical" subtitle="step" />
					<Step title="Horizontal" subtitle="step" variant="success" orientation="horizontal" />
				</div>
			</div>
		</Accordion>
	</div>
</Variant>

<style>
	.step-icons {
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	pre {
		background: black;
		color: var(--mdc-theme-primary);
		padding: 16px;
	}
</style>