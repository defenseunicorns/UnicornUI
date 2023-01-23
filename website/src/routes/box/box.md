# Box

General use unstyled border-box element that allows all default events, props,
and elements supported by svelte:element without block-margins.

## Props

| name             | Type                     | Default   | Description                                                                |
| ---------------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| element          | string                   | 'div'     | desired html element                                                       |
| ref              | Element                  | undefined | bound element reference (bind:this={ref})                                  |
| additionalEvents | string[]                 | []        | Add additional events supported by svelte.                                 |
| eventComponent   | typeof current_component | undefined | Pass svelte internal "current_component" to allow simple event forwarding. |

## Slots

| Name             |
| ---------------- |
| unamed (default) |

## Examples

```html
<Box element="a" href="/box">link</Box>

<Box
    bind:ref={myElementRef}
	style="display: flex; padding: 16px; justify-content: center; align-content: center"
	on:mouseover={() => (hovering = true)}
	on:mouseout={() => (hovering = false)}
	class={hoverClass}
>
	div (default)
</Box>

<Box element="button">Button</Box>
```
