<script lang="ts">
  import { Box, type SSX } from '@uui';

  const style: SSX = {
    $self: {
      backgroundColor: 'var(--primary)',
      color: 'var(--on-primary)',
      textAlign: 'center',
      padding: '1rem'
    },
    '@media (min-width: $xs) and (max-width: $md)': {
      $self: {
        backgroundColor: 'var(--secondary)',
        color: 'var(--on-secondary)'
      }
    }
  };
</script>

<Box class="h6" ssx={style}>Shrink and Expand window to see me change colors.</Box>
