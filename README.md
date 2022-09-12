# 🦄 Unicorn UI

## Installation
```npm i -S @defense-unicorns/unicorn-ui```

## Website
https://unicorn-ui.netlify.app/

## Usage Example
### Theming
```css
/* 
 * app.css (or main css file for svelte) 
 * - Uses mdc theme css variables
 */
:root {
    --mdc-theme-primary: purple;
    --mdc-theme-on-primary: white;
    --mdc-theme-secondary: green;
    --mdc-theme-on-secondary: white;
}
```

### Components
```html
<--! example.svelte -->
<script lang="ts">
    import { Button } from '@defense-unicorns/unicorn-ui'
    function onClick() {
        alert('Clicked');
    }
</script>
<Button 
    on:click={onClick} 
    shape="rounded" 
    color="primary" 
    variant="raised"
>
Primary Raised
</Button>
<Button 
    on:click={onClick} 
    shape="rounded" 
    color="secondary" 
    variant="flat"
>
Secondary Flat
</Button>
```