<script>
	import { Button } from '$lib';
	import ButtonIcon from '$lib/Button/ButtonIcon.svelte';
	import Variant from '../../website-components/Variant.svelte';
	function onClick() {
		alert('Clicked me');
	}
</script>

<Variant
	title="Button"
	code={`
Props (with defaults):
# Shared:
  id = '';
  className = '';
  disabled = false;
  color: ButtonColor = 'primary';
  shape: ButtonShape = 'squared';
  variant: ButtonVariant = 'text';

# Button (when href is undefined)
  on:click;

# Link (when href is defined)
  href: string | undefined = undefined;
  ping: string | undefined = undefined;
  rel: LinkRel | undefined = undefined;
  media: string | undefined = undefined;
  download: string | undefined = undefined;
  hreflang: string | undefined = undefined;
  target: LinkTarget | undefined = undefined;
  referrerpolicy: LinkReferrerPolicy | undefined = undefined;

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
    <ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
    custom
</Button>

<Button on:click={onClick}>
    <ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
</Button>
`}
>
	<Button on:click={onClick} />
	<Button on:click={onClick}>
		<ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
		custom
	</Button>
	<Button on:click={onClick}>
		<ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
	</Button>
</Variant>
<section class="variant">
	<h1>Outlined</h1>
	<pre>{`<Button on:click={onClick} variant="outlined" />

<Button on:click={onClick} variant="outlined">
    <ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
    Custom Content
</Button>

<Button on:click={onClick} variant="outlined">
    <ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
</Button>`}</pre>
	<div class="preview">
		<Button on:click={onClick} variant="outlined" />
		<Button on:click={onClick} variant="outlined">
			<ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
			Custom Content
		</Button>
		<Button on:click={onClick} variant="outlined">
			<ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
		</Button>
	</div>
</section>
<section class="variant">
	<h1>Raised</h1>
	<pre>{`<Button on:click={onClick} variant="raised" />

<Button on:click={onClick} variant="raised">
    <ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
</Button>

<Button on:click={onClick} variant="raised">
    <ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
</Button>`}</pre>
	<div class="preview">
		<Button on:click={onClick} variant="raised" />
		<Button on:click={onClick} variant="raised">
			<ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
		</Button>
		<Button on:click={onClick} variant="raised">
			<ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
		</Button>
	</div>
</section>
<section class="variant">
	<h1>Flat</h1>
	<pre>{`<Button on:click={onClick} variant="flat" />

<Button on:click={onClick} variant="flat">
    <ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
</Button>

<Button on:click={onClick} variant="flat">
    <ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
</Button>`}</pre>
	<div class="preview">
		<Button on:click={onClick} variant="flat" />
		<Button on:click={onClick} variant="flat">
			<ButtonIcon slot="leadingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
		</Button>
		<Button on:click={onClick} variant="flat">
			<ButtonIcon slot="trailingIcon" className="material-symbols-outlined">bookmark</ButtonIcon>
		</Button>
	</div>
</section>
<section class="variant">
	<h1>Link</h1>
	<pre>{`<Button href="/" />
<Button href="/" variant="outlined" />
<Button href="/" variant="raised" />
<Button href="/" variant="flat" />`}</pre>
	<div class="preview">
		<Button href="/" />
		<Button href="/" variant="outlined" />
		<Button href="/" variant="raised" />
		<Button href="/" variant="flat" />
	</div>
</section>
<section class="variant">
	<h1>Secondary</h1>
	<pre>{`<Button on:click={onClick} color="secondary" />
<Button on:click={onClick} variant="outlined" color="secondary" />
<Button on:click={onClick} variant="raised" color="secondary" />
<Button on:click={onClick} variant="flat" color="secondary" />`}</pre>
	<div class="preview">
		<Button on:click={onClick} color="secondary" />
		<Button on:click={onClick} variant="outlined" color="secondary" />
		<Button on:click={onClick} variant="raised" color="secondary" />
		<Button on:click={onClick} variant="flat" color="secondary" />
	</div>
</section>
<section class="variant">
	<h1>Disabled</h1>
	<pre>{`<Button on:click={onClick} disabled={true} />
<Button on:click={onClick} disabled={true} variant="outlined" />
<Button on:click={onClick} disabled={true} variant="raised" />
<Button on:click={onClick} disabled={true} variant="flat" />`}</pre>
	<div class="preview">
		<Button on:click={onClick} disabled={true} />
		<Button on:click={onClick} disabled={true} variant="outlined" />
		<Button on:click={onClick} disabled={true} variant="raised" />
		<Button on:click={onClick} disabled={true} variant="flat" />
	</div>
</section>

<style>
	section {
		margin-top: 32px;
		margin-bottom: 32px;
	}
	.preview {
		display: flex;
		gap: 32px;
	}
	pre {
		display: flex;
		max-width: fit-content;
		flex-direction: column;
		color: cyan;
		background-color: black;
		padding: 16px;
		box-sizing: border-box;
		font-weight: 600;
	}
	.variant {
		display: flex;
		flex-direction: column;
		width: 100vw;
		align-content: center;
		align-items: center;
	}
</style>
