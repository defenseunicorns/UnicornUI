<script>
    import Variant from '../website-components/Variant.svelte';
	import Button from '$lib/Button/Button.svelte';
</script>

<Variant title="Installation" code={`npm i @defense-unicorns/unicorn-ui`}>
	<Button href="https://github.com/defenseunicorns/UnicornUI" target="_blank" variant="raised"
		>Github</Button
	>
</Variant>
<Variant
	title="Theming"
	code={`/* 
* app.css (or main css file for svelte) 
* - Uses mdc theme css variables
*/
:root {
    --mdc-theme-primary: purple;
    --mdc-theme-on-primary: white;
    --mdc-theme-secondary: green;
    --mdc-theme-on-secondary: white;
    --mdc-theme-surface: white;
}`}
/>

