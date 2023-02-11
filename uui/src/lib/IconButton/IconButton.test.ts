import IconButton from './IconButton.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

let host: HTMLElement;

describe('vitest and jsdom manually', () => {
  beforeEach(() => {
    host = document.createElement('div');
    host.setAttribute('id', 'host');
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('it is toggled on', () => {
    new IconButton({ target: host, props: { toggleable: true, toggled: true } });

    expect(host.querySelector('button')?.getAttribute('class')).toContain('mdc-icon-button--on');
  });
});

describe('using @testing-library/svelte', () => {
  it('renders icon button', () => {
    render(IconButton, { props: { toggleable: true, toggled: true } });

    expect(screen.getByRole('button')).toHaveClass('mdc-icon-button--on');
  });
});
