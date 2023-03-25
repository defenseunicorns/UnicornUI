<script lang="ts">
  import { Accordion, Typography } from '@uui';
  let currentAccordion = '';
  function handleChange(accordionName: string): void {
    currentAccordion = currentAccordion === accordionName ? '' : accordionName;
  }
</script>

<Accordion isOpen={currentAccordion === 'accordion1'} on:change={() => handleChange('accordion1')}>
  <Typography slot="headerContent" variant="h6">Accordion 1</Typography>
  <Typography slot="content">
    There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when
    ready. What? You’re far too trusting. Dantooine is too remote to make an effective
    demonstration. But don’t worry. We will deal with your Rebel friends soon enough. No! Commence
    primary ignition.
  </Typography>
</Accordion>
<Accordion isOpen={currentAccordion === 'accordion2'} on:change={() => handleChange('accordion2')}>
  <Typography slot="headerContent" variant="h6">Accordion 2</Typography>
  <Typography slot="content"
    >It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much
    bigger than two meters. Man your ships! And may the Force be with you! Orbiting the planet at
    maximum velocity.</Typography
  >
</Accordion>
