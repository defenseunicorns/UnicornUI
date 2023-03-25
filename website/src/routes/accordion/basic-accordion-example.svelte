<script lang="ts">
  import { Accordion, Typography } from '@uui';
</script>

<Accordion>
  <Typography slot="headerContent" variant="h6">Basic Accordion</Typography>
  <Typography slot="content">
    There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when
    ready. What? You’re far too trusting. Dantooine is too remote to make an effective
    demonstration. But don’t worry. We will deal with your Rebel friends soon enough. No! Commence
    primary ignition.
  </Typography>
</Accordion>
<Accordion isOpen square>
  <Typography slot="headerContent" variant="h6">Default to Open</Typography>
  <Typography slot="content"
    >It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much
    bigger than two meters. Man your ships! And may the Force be with you! Orbiting the planet at
    maximum velocity.</Typography
  >
</Accordion>
