<script lang="ts">
	import Typography from '$lib/Typography/typography.svelte';

	export let title = '';
	export let code = '';
</script>

<section class="variant">
	<Typography variant="h4">{title}</Typography>
	<Typography variant="body1" element="pre" class="variant-code">{`${code.trim()}`}</Typography>
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
		gap: 1rem;
	}

	:global(.variant-code) {
		display: flex;
		flex-direction: column;
		color: cyan;
		background-color: black;
		padding: 16px;
	}
</style>
