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
@import 'normalize.css/normalize.css';
@import '@material/theme/dist/mdc.theme.min.css';
@import '@material/typography/dist/mdc.typography.min.css';

:root {
	--mdc-theme-primary: #68c4ff;
	--mdc-theme-on-primary: black;
	--mdc-theme-secondary: #787ff6;
	--mdc-theme-on-secondary: white;
	--mdc-theme-surface: #244a8f;
	--mdc-theme-background: #0a0e2e;
	--mdc-theme-on-background: #ffffff;
	--mdc-theme-on-surface: #ffffff;
	--mdc-theme-success: #2e7d32;
	--mdc-theme-on-success: white;
	--mdc-theme-warning: #ed6c02;
	--mdc-theme-on-warning: white;
	--mdc-theme-info: #0288d1;
	--mdc-theme-on-info: white;
	--mdc-theme-error: #d32f2f;
	--mdc-theme-on-error: white;
	/* body3 */
	--mdc-typography-body3-font-style: normal;
	--mdc-typography-body3-font-weight: 400;
	--mdc-typography-body3-font-size: 0.875em;
	--mdc-typography-body3-line-height: 143%;
	--mdc-typography-body3-letter-spacing: 0.17px;

	font-family: var(--mdc-typography-font-family);
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

pre {
	margin: 0;
}

/* Custom Typography */
.mdc-typography--body3 {
	font-family: var(--mdc-typography-font-family);
	font-style: var(--mdc-typography-body3-font-style);
	font-weight: var(--mdc-typography-body3-font-weight);
	font-size: var(--mdc-typography-body3-font-size);
	line-height: var(--mdc-typography-body3-line-height);
	letter-spacing: var(--mdc-typography-body3-letter-spacing);
}`}
/>
