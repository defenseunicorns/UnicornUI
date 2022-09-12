<script lang="ts">
	import { Accordion } from '$lib';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant
	title="Accordion"
	code={`<Accordion>
    <span slot="headerContent">Accordion</span>
    <div slot="content">I am open</div>
</Accordion>

<Accordion>
    <span slot="headerContent">Accordion</span>
    <div slot="content">Content</div>
</Accordion>`}
>
	<div class="accordions">
		<Accordion>
			<span slot="headerContent">Accordion</span>
			<div slot="content">I am open</div>
		</Accordion>
		<Accordion>
			<span slot="headerContent">Accordion</span>
			<div slot="content">Content</div>
		</Accordion>
	</div>
</Variant>

<style lang="scss" global>
	.accordion {
		width: 100%;
	}
	.accordions {
		min-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
</style>
