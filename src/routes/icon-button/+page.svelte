<script lang="ts">
	import IconButton from '$lib/IconButton/IconButton.svelte';
	import Cube from '../../website-components/assets/svg/Cube.svelte';
	import Variant from '../../website-components/Variant.svelte';
	let toggled: boolean[];
	$: toggled = [];
	let toggle = (index: number) => () => {
		while (toggled[index] === undefined) {
			toggled.push(false);
		}
		toggled[index] = !toggled[index];
	};
</script>

<Variant
	title="Icon Button"
	code={`
Props (extends HTMLButtonElement | HTMLAnchorElement):

  toggleable: boolean = false;
  toggled: boolean = false;

  iconClass: string;
  iconContent: string;
  iconColor: IconButtonColor = 'inherit';

  toggledIconClass: string;
  toggledIconContent: string;
  toggledIconColor: IconButtonColor = 'inherit';

Slots:
  icon: optional;
  toggleIcon: optional;

Wrapping Component:
  href is defined:
	HTMLAnchorElement
  default:
	HTMLButtonElement
`}
/>
<Variant
	title="Icon Button Color Variants"
	code={`	<IconButton iconClass="material-symbols-outlined" iconContent="settings" />
<IconButton iconClass="material-symbols-outlined" iconContent="settings" iconColor="primary" />
<IconButton iconClass="material-symbols-outlined" iconContent="settings" iconColor="secondary" />
<IconButton iconClass="material-symbols-outlined" iconContent="settings" iconColor="secondary" disabled />`}
>
	<IconButton iconClass="material-symbols-outlined" iconContent="settings" />
	<IconButton iconClass="material-symbols-outlined" iconContent="settings" iconColor="primary" />
	<IconButton iconClass="material-symbols-outlined" iconContent="settings" iconColor="secondary" />
	<IconButton
		iconClass="material-symbols-outlined"
		iconContent="settings"
		iconColor="secondary"
		disabled
	/>
</Variant>
<Variant
	title="Icon Button Link"
	code={`// Not toggleable. Supports Anchor(<a/>) props
<IconButton iconClass="material-symbols-outlined" iconContent="settings" href="/button-icon" />

<IconButton
	iconClass="material-symbols-outlined"
	iconContent="settings"
	iconColor="primary"
	href="/icon-button"
/>

<IconButton
	iconClass="material-symbols-outlined"
	iconContent="settings"
	iconColor="secondary"
	href="/icon-button"
/>`}
>
	<IconButton iconClass="material-symbols-outlined" iconContent="settings" href="/icon-button" />
	<IconButton
		iconClass="material-symbols-outlined"
		iconContent="settings"
		iconColor="primary"
		href="/icon-button"
	/>
	<IconButton
		iconClass="material-symbols-outlined"
		iconContent="settings"
		iconColor="secondary"
		href="/icon-button"
	/>
</Variant>
<Variant
	title="Icon Button Toggle"
	code={`<IconButton
	toggleable
	on:click={toggle(0)}
	toggled={toggled.at(0)}
	iconContent="toggle_off"
	toggledIconContent="toggle_on"
	iconClass="material-symbols-outlined"
	toggledIconClass="material-symbols-outlined"
/>

<IconButton
	toggleable
	on:click={toggle(1)}
	toggled={toggled.at(1)}
	iconContent="toggle_off"
	toggledIconColor="primary"
	toggledIconContent="toggle_on"
	iconClass="material-symbols-outlined"
	toggledIconClass="material-symbols-outlined"
/>

<IconButton
	toggleable
	iconColor="secondary"
	on:click={toggle(2)}
	toggled={toggled.at(2)}
	iconContent="toggle_off"
	toggledIconColor="primary"
	toggledIconContent="toggle_on"
	iconClass="material-symbols-outlined"
	toggledIconClass="material-symbols-outlined"
/>

<IconButton
	toggleable
	on:click={toggle(3)}
	iconColor="secondary"
	iconContent="settings"
	toggled={toggled.at(3)}
	toggledIconColor="inherit"
	iconClass="material-symbols-outlined"
/>`}
>
	<IconButton
		toggleable
		on:click={toggle(0)}
		toggled={toggled.at(0)}
		iconContent="toggle_off"
		toggledIconContent="toggle_on"
		iconClass="material-symbols-outlined"
		toggledIconClass="material-symbols-outlined"
	/>
	<IconButton
		toggleable
		on:click={toggle(1)}
		toggled={toggled.at(1)}
		iconContent="toggle_off"
		toggledIconColor="primary"
		toggledIconContent="toggle_on"
		iconClass="material-symbols-outlined"
		toggledIconClass="material-symbols-outlined"
	/>
	<IconButton
		toggleable
		iconColor="secondary"
		on:click={toggle(2)}
		toggled={toggled.at(2)}
		iconContent="toggle_off"
		toggledIconColor="primary"
		toggledIconContent="toggle_on"
		iconClass="material-symbols-outlined"
		toggledIconClass="material-symbols-outlined"
	/>
	<IconButton
		toggleable
		on:click={toggle(3)}
		iconColor="secondary"
		iconContent="settings"
		toggled={toggled.at(3)}
		toggledIconColor="inherit"
		iconClass="material-symbols-outlined"
	/>
</Variant>
<Variant
	title="Icon Button Slotted Icons"
	code={`// Where Cube is an svg svelte component

<IconButton iconColor="primary" iconClass="primaryCube">
	<Cube slot="icon" />
</IconButton>

<IconButton
	toggleable
	on:click={toggle(4)}
	toggled={toggled.at(4)}
	iconColor="secondary"
	iconClass="secondaryCube"
	toggledIconColor="primary"
	toggledIconClass="primaryCube"
>
	<Cube slot="icon" />
	<Cube slot="toggledIcon" />
</IconButton>

/* Style
.primaryCube path {
	stroke: var(--mdc-theme-primary);
}
.secondaryCube path {
	stroke: var(--mdc-theme-secondary);
}
*/`}
>
	<IconButton iconColor="primary" iconClass="primaryCube">
		<Cube slot="icon" />
	</IconButton>
	<IconButton
		toggleable
		on:click={toggle(4)}
		toggled={toggled.at(4)}
		iconColor="secondary"
		iconClass="secondaryCube"
		toggledIconColor="primary"
		toggledIconClass="primaryCube"
	>
		<Cube slot="icon" />
		<Cube slot="toggledIcon" />
	</IconButton>
	<style lang="scss">
		.primaryCube path {
			stroke: var(--mdc-theme-primary);
		}
		.secondaryCube path {
			stroke: var(--mdc-theme-secondary);
		}
	</style>
</Variant>
