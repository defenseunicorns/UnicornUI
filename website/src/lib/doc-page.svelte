<script lang="ts">
  import { type SSX, Box, type BoxProps } from '@uui';

  type T = $$Generic<EventTarget>;

  type $$Props = BoxProps<T>;

  const wrapper: SSX = {
    $self: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 0',
      gap: '2rem',
      '& ul li': {
        paddingTop: '1rem'
      }
    },
    $xs: {
      $self: {
        margin: '0rem 2rem'
      }
    },
    $md: {
      $self: {
        margin: '0rem 15%'
      }
    },
    '$self a': {
      color: 'var(--primary)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      },
      '&:-webkit-any-link': {
        color: 'var(--primary)'
      }
    }
  };

  $: $$restProps.ssx = { ...wrapper, ...$$restProps.ssx };
</script>

<Box element="section" class="elevation-4" {...$$restProps}>
  <slot />
</Box>
