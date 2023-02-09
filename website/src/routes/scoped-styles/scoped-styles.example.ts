import type { ScopedStyles } from '@uui';

export const exampleScopedStyle: ScopedStyles = {
  $self: {
    padding: '16px',
    '&:hover': {
      backgroundColor: 'var(--primary)',
      color: 'var(--on-primary)'
    },
    '& .child': {
      padding: '8px',
      '&:hover': {
        backgroundColor: 'var(--secondary)',
        color: 'var(--on-secondary)'
      }
    }
  }
};
