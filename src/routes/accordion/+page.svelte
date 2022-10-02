<script lang="ts">
	import { Accordion } from '$lib';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant
	title="Accordion"
	code={`
Props (with defaults):
  id = '';
  isOpen = false;
  headerClass = '';
  contentClass = '';
  wrapperClass = '';

Slots:
  icon (replaces the default IconButton)
  headerContent (nested in .accordian-header)
  content (nested in .accordian-content)
	`}
>
	<div class="accordions" style="width: 100%">
		<Accordion
			id="accordian-1"
			wrapperClass="myAccordian"
			contentClass="accordian-1-content"
			isOpen={true}
		>
			<span slot="headerContent" class="mdc-typography--headline6">Accordion</span>
			<div slot="content" class="mdc-typography--body1">Default to open</div>
		</Accordion>
		<Accordion id="accordian-2" wrapperClass="myAccordian" contentClass="accordian-2-content">
			<span slot="headerContent" class="mdc-typography--headline6">Expand for example html</span>
			<div slot="content">
				<pre>{`<Accordion 
  id="accordian-2" 
  wrapperClass="myAccordian" 
  contentClass="accordian-2-content"
>
  <span slot="headerContent">Expand for Example Code</span>
  <div slot="content">{...}</div>
</Accordion>

/* Style
.accordian-2-content {
  color: var(--mdc-theme-primary);
  background-color: black;
}
.accordian-2-content pre {
	color: var(--mdc-theme-primary);
	background-color: black;
	padding: 8px;
}
*/`}</pre>
			</div>
		</Accordion>
	</div>
</Variant>

<style lang="scss" global>
	.accordian-1-content {
		background-color: var(--mdc-theme-secondary);
		color: var(--mdc-theme-on-secondary);
	}
	.accordian-2-content pre {
		color: var(--mdc-theme-primary);
		background-color: black;
		padding: 8px;
	}
	.accordions {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
</style>
