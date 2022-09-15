<script>
	import Step from '$lib/Stepper/Step.svelte';
	import StepIcon from '$lib/Stepper/StepIcon.svelte';
	import Accordion from '$lib/Accordion/accordion.svelte';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant title="Stepper" code="Coming very soon...">
	<div>
		<Accordion wrapperClass="step-icon-accordian" contentClass="step-icon-accordian-content">
			<h6 slot="headerContent" class="mdc-typography--headline6">StepIcon</h6>

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
			<h6 slot="headerContent" class="mdc-typography--headline6">Step</h6>
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
	:global(.step-icon-accordian) {
		min-width: 500px;
	}
	:global(.step-icon-accordian-content) {
		min-height: 100px;
	}
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
