<script>
  import { Button, ButtonIcon } from '@uui';
  import Variant from '$lib/Variant.svelte';
  function onClick() {
    alert('Clicked me');
  }
</script>

<Variant
  title="Button"
  code={`
Props (extends HTMLButtonElement | HTMLAnchorElement):
  color: ButtonColor = 'primary';
  shape: ButtonShape = 'squared';
  variant: ButtonVariant = 'text';

Slots:
  leadingIcon: optional
  trailingIcon: optional
`}
>
  <Button>Default</Button>
  <Button variant="outlined" />
  <Button variant="raised" />
  <Button variant="flat" />
  <Button variant="raised" shape="rounded">Raised Rounded</Button>
</Variant>
<Variant
  title="Rounded"
  code={`<Button shape="rounded" />
<Button shape="rounded" variant="outlined" />
<Button shape="rounded" variant="raised" />
<Button shape="rounded" variant="flat" />`}
>
  <Button shape="rounded" />
  <Button shape="rounded" variant="outlined" />
  <Button shape="rounded" variant="raised" />
  <Button shape="rounded" variant="flat" />
</Variant>
<Variant
  title="Text (default)"
  code={`<Button on:click={onClick} />

<Button on:click={onClick}>
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    custom
</Button>

<Button on:click={onClick}>
    <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
</Button>
`}
>
  <Button on:click={onClick} />
  <Button on:click={onClick}>
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    custom
  </Button>
  <Button on:click={onClick}>
    <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
  </Button>
</Variant>
<Variant
  title="Outlined"
  code={`<Button on:click={onClick} variant="outlined" />

<Button on:click={onClick} variant="outlined">
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    Custom Content
</Button>

<Button on:click={onClick} variant="outlined">
    <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
</Button>`}
>
  <div class="preview">
    <Button on:click={onClick} variant="outlined" />
    <Button on:click={onClick} variant="outlined">
      <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
      Custom Content
    </Button>
    <Button on:click={onClick} variant="outlined">
      <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    </Button>
  </div>
</Variant>
<Variant
  title="Raised"
  code={`<Button on:click={onClick} variant="raised" />

<Button on:click={onClick} variant="raised">
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
</Button>

<Button on:click={onClick} variant="raised">
    <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
</Button>`}
>
  <div class="preview">
    <Button on:click={onClick} variant="raised" />
    <Button on:click={onClick} variant="raised">
      <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    </Button>
    <Button on:click={onClick} variant="raised">
      <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    </Button>
  </div>
</Variant>
<Variant
  title="Flat"
  code={`<Button on:click={onClick} variant="flat" />
s
<Button on:click={onClick} variant="flat">
    <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
</Button>

<Button on:click={onClick} variant="flat">
    <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
</Button>`}
>
  <div class="preview">
    <Button on:click={onClick} variant="flat" />
    <Button on:click={onClick} variant="flat">
      <ButtonIcon slot="leadingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    </Button>
    <Button on:click={onClick} variant="flat">
      <ButtonIcon slot="trailingIcon" class="material-symbols-outlined">bookmark</ButtonIcon>
    </Button>
  </div>
</Variant>
<Variant
  title="Link"
  code={`<Button href="/" />
<Button href="/" variant="outlined" />
<Button href="/" variant="raised" />
<Button href="/" variant="flat" />`}
>
  <div class="preview">
    <Button href="/" />
    <Button href="/" variant="outlined" />
    <Button href="/" variant="raised" />
    <Button href="/" variant="flat" />
  </div>
</Variant>
<Variant
  title="Secondary"
  code={`<Button on:click={onClick} color="secondary" />
<Button on:click={onClick} variant="outlined" color="secondary" />
<Button on:click={onClick} variant="raised" color="secondary" />
<Button on:click={onClick} variant="flat" color="secondary" />`}
>
  <div class="preview">
    <Button on:click={onClick} color="secondary" />
    <Button on:click={onClick} variant="outlined" color="secondary" />
    <Button on:click={onClick} variant="raised" color="secondary" />
    <Button on:click={onClick} variant="flat" color="secondary" />
  </div>
</Variant>
<Variant
  title="Disabled"
  code={`<Button on:click={onClick} disabled={true} />
<Button on:click={onClick} disabled={true} variant="outlined" />
<Button on:click={onClick} disabled={true} variant="raised" />
<Button on:click={onClick} disabled={true} variant="flat" />`}
>
  <div class="preview">
    <Button on:click={onClick} disabled={true} />
    <Button on:click={onClick} disabled={true} variant="outlined" />
    <Button on:click={onClick} disabled={true} variant="raised" />
    <Button on:click={onClick} disabled={true} variant="flat" />
  </div>
</Variant>

<style>
  .preview {
    display: flex;
    gap: 32px;
  }
</style>
