<script lang="ts">
	export let title = '';
	export let code = '';
</script>

<section class="variant">
	<h1 class="mdc-typography--headline4">{title}</h1>
	<pre>{`${code.trim()}`}</pre>
	<div class="preview">
		<slot />
	</div>
</section>

<style>
	:global(section) {
		padding: 32px;
		box-sizing: border-box;
		display: flex;
	}
	.preview {
		display: flex;
		width: 80%;
		gap: 32px;
		justify-content: center;
	}

	.variant {
		display: flex;
		flex-direction: column;
		width: 100vw;
		align-content: center;
		align-items: center;
	}
</style>
