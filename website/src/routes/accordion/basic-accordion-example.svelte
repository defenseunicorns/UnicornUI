<script lang="ts">
  import { Accordion, Typography } from '@uui';
</script>

<Typography variant="subtitle1">Default Accordion</Typography>
<Accordion>
  <Typography slot="headerContent" variant="h6">Accordion 1</Typography>
  <Typography slot="content">
    There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when
    ready. What? You’re far too trusting. Dantooine is too remote to make an effective
    demonstration. But don’t worry. We will deal with your Rebel friends soon enough. No! Commence
    primary ignition.
  </Typography>
</Accordion>
<Typography variant="subtitle1">isOpen</Typography>
<Accordion isOpen>
  <Typography slot="headerContent" variant="h6">Accordion 2</Typography>
  <Typography slot="content"
    >It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much
    bigger than two meters. Man your ships! And may the Force be with you! Orbiting the planet at
    maximum velocity.</Typography
  >
</Accordion>
<Typography variant="subtitle1">square</Typography>
<Accordion square>
  <Typography slot="headerContent" variant="h6">Accordion 3</Typography>
  <Typography slot="content"
    >It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much
    bigger than two meters. Man your ships! And may the Force be with you! Orbiting the planet at
    maximum velocity.</Typography
  >
</Accordion>
<Typography variant="subtitle1">Custom Coloring</Typography>
<Accordion color="on-secondary" backgroundColor="secondary" hoverColor="black">
  <Typography slot="headerContent" variant="h6">Accordion 4</Typography>
  <Typography slot="content"
    >It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much
    bigger than two meters. Man your ships! And may the Force be with you! Orbiting the planet at
    maximum velocity.</Typography
  >
</Accordion>
<Typography variant="subtitle1">Outlined</Typography>
<Accordion variant="outlined">
  <Typography slot="headerContent" variant="h6">Accordion 4</Typography>
  <Typography slot="content"
    >It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much
    bigger than two meters. Man your ships! And may the Force be with you! Orbiting the planet at
    maximum velocity.</Typography
  >
</Accordion>
