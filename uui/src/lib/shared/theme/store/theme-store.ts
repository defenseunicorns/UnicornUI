import { writable } from 'svelte/store';
import type { SupportedThemes } from '../palette/palette.types';

export const currentTheme = writable<SupportedThemes>('light');
