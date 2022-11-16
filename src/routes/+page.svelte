<script>
	import Variant from '../website-components/Variant.svelte';
	import Button from '$lib/Button/Button.svelte';
	import ButtonIcon from '$lib/Button/ButtonIcon.svelte';
</script>

<Variant title="Installation" code={`npm i @defense-unicorns/unicorn-ui`}>
	<Button href="https://github.com/defenseunicorns/UnicornUI" target="_blank" variant="raised"
		>Github
		<ButtonIcon slot="leadingIcon" class="material-symbols-outlined">open_in_new</ButtonIcon>
	</Button>
</Variant>
<Variant
	title="Theming"
	code={`/* 
* app.css (or main css file for svelte) 
* - Uses mdc theme css variables
*/
:root {
	--mdc-theme-primary: #4adede;
	--mdc-theme-on-primary: black;
	--mdc-theme-secondary: #787ff6;
	--mdc-theme-on-secondary: white;
	--mdc-theme-success: #2e7d32;
	--mdc-theme-on-success: white;
	--mdc-theme-warning: #ed6c02;
	--mdc-theme-on-warning: white;
	--mdc-theme-info: #0288d1;
	--mdc-theme-on-info: white;
	--mdc-theme-error: #d32f2f;
	--mdc-theme-on-error: white;
}`}
/>
