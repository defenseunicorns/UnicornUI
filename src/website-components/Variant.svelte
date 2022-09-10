<script lang="ts">
	export let title = '';
	export let code = '';
</script>

<section class="variant">
	<h1>{title}</h1>
	<pre>{`${code.trim()}`}</pre>
	<div class="preview">
		<slot />
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
