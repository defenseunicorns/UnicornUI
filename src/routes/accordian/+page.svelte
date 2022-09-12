<script lang="ts">
	import { Accordian } from '$lib';
	import Variant from '../../website-components/Variant.svelte';
</script>

<Variant
	title="Accordian"
	code={`<Accordian>
    <span slot="headerContent">Accordian</span>
    <div slot="content">I am open</div>
</Accordian>

<Accordian>
    <span slot="headerContent">Accordian</span>
    <div slot="content">Content</div>
</Accordian>`}
>
	<div class="accordians">
		<Accordian>
			<span slot="headerContent">Accordian</span>
			<div slot="content">I am open</div>
		</Accordian>
		<Accordian>
			<span slot="headerContent">Accordian</span>
			<div slot="content">Content</div>
		</Accordian>
	</div>
</Variant>

<style lang="scss" global>
	.accordian {
		width: 100%;
	}
	.accordians {
		min-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
</style>
