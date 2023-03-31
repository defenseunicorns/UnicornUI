<script lang="ts">
  import { Typography, Box } from '@uui';
  import DocPage from '$lib/doc-page.svelte';
  import InlineCode from '$lib/inline-code.svelte';
  import VariantExample from '$lib/VariantExample.svelte';
  import AccordionTypesCode from '@uui/Accordion/accordion.types.d.ts?raw';
  import BasicAccordion from './basic-accordion-example.svelte';
  import BasicAccordionText from './basic-accordion-example.svelte?raw';
  import AccordionGroupExample from './accordion-group-example.svelte';
  import AccordionGroupExampleText from './accordion-group-example.svelte?raw';
  import AccordionControlledExample from './controled-accordion-example.svelte';
  import AccordionControlledExampleText from './controled-accordion-example.svelte?raw';
  const AccordionInterface = AccordionTypesCode.split('\n\n')[1] ?? '';
  const AccordionGroupType = AccordionTypesCode.split('\n\n').pop() ?? '';
</script>

<DocPage>
  <Typography variant="h2">Accordion</Typography>
  <Typography>
    The <InlineCode>Accordion</InlineCode> component may be use individually or wrapped in an
    <InlineCode>AccordionGroup</InlineCode> to hide and display sections of content on a page.
  </Typography>

  <Typography variant="h3">Props</Typography>
  <Typography>
    Accordion extends all props and behavior from the
    <Typography element="a" href="/paper">Paper</Typography>
    component as well as the following:
  </Typography>
  <Box element="ul">
    <Box element="li">
      <Typography>
        <InlineCode>isOpen: boolean</InlineCode>&nbsp;controls the shrinking and expanding of the
        accordion content (optional, defaults to false).
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>headerClass: string</InlineCode>
        adds user class string to the accordion header box (optional)
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>contentClass: string</InlineCode>
        adds user class string to the accordion content box (optional)
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>elevation: string</InlineCode>
        overrides the paper default with a value of 2 (optional)
      </Typography>
    </Box>
  </Box>
  <VariantExample code={AccordionInterface} />

  <Typography variant="h3">Slots</Typography>
  <Typography>Acccordion supports the following slots:</Typography>
  <Box element="ul">
    <Box element="li">
      <Typography>
        <InlineCode>icon</InlineCode>
        replaces the default&nbsp;
        <Typography element="a" href="/icon-button">IconButton</Typography>
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>headerContent</InlineCode>
        adds content to the right of the icon within the header box.
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>content</InlineCode>
        adds content to the accordions content box.
      </Typography>
    </Box>
  </Box>

  <Typography variant="h3">CSS Classes</Typography>
  <Typography>Accordion supports the following css classes:</Typography>
  <Box element="ul">
    <Box element="li">
      <Typography>
        <InlineCode>.accordion</InlineCode>
        added to the top level&nbsp;
        <Typography element="a" href="Paper">Paper</Typography>
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>.accordion-open</InlineCode>
        added to the top level&nbsp;
        <Typography element="a" href="Paper">Paper</Typography>
        &nbsp;when
        <InlineCode>isOpen = true</InlineCode>
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>.accordion-header-wrapper</InlineCode>
        targets the header container.
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>.accordion-toggle</InlineCode>
        targets the default expansion&nbsp;
        <Typography element="a" href="/icon-button">IconButton</Typography>
        &nbsp;if the
        <InlineCode>icon</InlineCode>
        slot is unused.
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>.accordion-header</InlineCode>
        targets the
        <InlineCode>headerContent</InlineCode>
        slot container.
      </Typography>
    </Box>
    <Box element="li">
      <Typography>
        <InlineCode>.accordion-content</InlineCode>
        targets the
        <InlineCode>content</InlineCode>
        slot container.
      </Typography>
    </Box>
  </Box>

  <Typography variant="h3">Examples</Typography>
  <Typography variant="h4">Basic Accordion</Typography>
  <BasicAccordion />
  <VariantExample code={BasicAccordionText} />

  <Typography variant="h4">Controlled Accordions</Typography>
  <AccordionControlledExample />
  <VariantExample code={AccordionControlledExampleText} />

  <Typography variant="h2">Accordion Group</Typography>
  <Typography>
    Multiple accordions can be grouped together in a pre-styled
    <InlineCode>AccordionGroup</InlineCode>
    component which wraps and extends the
    <Typography element="a" href="/paper">Paper</Typography>
    component with a default
    <InlineCode>elevation</InlineCode>
    of
    <InlineCode>2</InlineCode>
    and the class
    <InlineCode>.accordion-group</InlineCode>
  </Typography>
  <VariantExample code={AccordionGroupType} />

  <Typography variant="h3">Example</Typography>
  <AccordionGroupExample />
  <VariantExample code={AccordionGroupExampleText} />
</DocPage>
