<script lang="ts">
  import type { ScopedStyles } from '@uui';
  import ExampleComponent from './example-component.svelte';
  const scopedStyle: ScopedStyles = {
    $self: {
      textAlign: 'center',
      padding: '16px',
      backgroundColor: 'var(--surface)',
      color: 'var(--on-surface)',
      '&:hover': {
        color: 'var(--on-primary)',
        backgroundColor: 'var(--primary)'
      },
      '& .child': {
        padding: '16px',
        '&:hover': {
          color: 'var(--on-secondary)',
          backgroundColor: 'var(--secondary)'
        }
      }
    }
  };
</script>

<ExampleComponent {scopedStyle} class="h4">
  Example Component
  <ExampleComponent class="child h5">Child Component</ExampleComponent>
</ExampleComponent>
