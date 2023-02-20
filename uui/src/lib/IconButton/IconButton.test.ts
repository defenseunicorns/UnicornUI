import IconButton from './IconButton.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

describe('IconButton states', () => {
  it('renders icon button as on based on props', () => {
    render(IconButton, { props: { toggleable: true, toggled: true } });
    expect(screen.getByRole('button')).toHaveClass('mdc-icon-button--on');
  });
});
