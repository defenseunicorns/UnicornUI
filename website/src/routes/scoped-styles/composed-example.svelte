<script lang="ts">
  import type { SSX } from '@uui';
  import ExampleComponent from './example-component.svelte';
  const ssx: SSX = {
    $dark: {
      '& $self': {
        color: 'violet'
      }
    },
    $light: {
      '& $self': {
        color: 'purple'
      }
    },
    $self: {
      textAlign: 'center',
      padding: '16px',
      backgroundColor: 'var(--surface)',
      '&:hover': {
        // Important required to override theme selector
        color: 'var(--on-primary) !important',
        backgroundColor: 'var(--primary)',
        '& .child': {
          color: 'var(--on-primary)'
        }
      },
      '& .child': {
        padding: '16px',
        color: 'var(--on-surface)',
        '&:hover': {
          color: 'var(--on-secondary)',
          backgroundColor: 'var(--secondary)'
        }
      }
    }
  };
</script>

<ExampleComponent {ssx} class="h4">
  Example Component
  <ExampleComponent class="child h5">Child Component</ExampleComponent>
</ExampleComponent>
