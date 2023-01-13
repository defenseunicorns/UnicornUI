<script lang="ts">
  import { Accordion, AccordionGroup } from '@defense-unicorns/unicorn-ui/src/lib';
  import Variant from '$lib/Variant.svelte';
</script>

<Variant
  title="Accordion"
  code={`Theme (default): 
  background-color: --mdc-theme-surface
  color: --mdc-theme-on-surface

Props (extends HTMLDivElement):
  isOpen = false;
  headerClass = '';
  contentClass = '';

Slots:
  icon (replaces the default IconButton)
  headerContent (nested in .accordian-header)
  content (nested in .accordian-content)
	`}
>
  <AccordionGroup>
    <Accordion
      id="accordian-1"
      class="myAccordian"
      contentClass="accordian-1-content"
      isOpen={true}
    >
      <span slot="headerContent" class="mdc-typography--headline6">Accordion</span>
      <div slot="content" class="mdc-typography--body1">Default to open</div>
    </Accordion>
    <Accordion id="accordian-2" class="myAccordian" contentClass="accordian-2-content">
      <span slot="headerContent" class="mdc-typography--headline6">Expand for example html</span>
      <div slot="content">
        <pre class="variant-code">{`<Accordion 
  id="accordian-2" 
  class="myAccordian" 
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
  </AccordionGroup>
</Variant>

<style lang="scss" global>
  .accordian-1-content {
    background-color: var(--mdc-theme-secondary);
    color: var(--mdc-theme-on-secondary);
  }
</style>
