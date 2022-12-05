import type { Palettes } from '$lib/shared/theme/palette/palette.types';

const palettes: Palettes = [
	{
		name: 'dark',
		primary: '#68c4ff',
		secondary: '#787ff6',
		surface: '#244a8f',
		background: '#0a0e2e',
		success: '#2e7d32',
		warning: '#ed6c02',
		info: '#0288d1',
		error: '#b00020',
		on: {
			primary: 'black',
			secondary: 'white',
			surface: '#ffffff',
			background: '#ffffff',
			success: 'white',
			warning: 'white',
			info: 'white',
			error: 'white'
		},
		text: {
			primary: {
				dark: 'white',
				light: 'rgb(0,0,0, 0.87)',
				background: 'rgb(255, 255, 255, 0.87)'
			},
			secondary: {
				light: 'rgb(0,0,0, 0.54)',
				dark: 'rgba(255, 255, 255, 0.7)',
				background: 'rgba(255, 255, 255, 0.7)'
			},
			hint: {
				light: 'rgba(0, 0, 0, 0.38)',
				dark: 'rgba(255, 255, 255, 0.5)',
				background: 'rgba(255, 255, 255, 0.5)'
			},
			disabled: {
				light: 'rgba(0, 0, 0, 0.38)',
				dark: 'rgba(255, 255, 255, 0.5)',
				background: 'rgba(255, 255, 255, 0.5)'
			},
			icon: {
				light: 'rgba(0, 0, 0, 0.38)',
				dark: 'rgba(255, 255, 255, 0.5)',
				background: 'rgba(255, 255, 255, 0.5)'
			}
		}
	},
	{
		name: 'light',
		primary: '#68c4ff',
		secondary: '#787ff6',
		surface: '#244a8f',
		background: '#ffffff',
		success: '#2e7d32',
		warning: '#ed6c02',
		info: '#0288d1',
		error: '#b00020',
		on: {
			primary: 'black',
			secondary: 'white',
			surface: '#ffffff',
			background: 'black',
			success: 'white',
			warning: 'white',
			info: 'white',
			error: 'white'
		},
		text: {
			primary: {
				light: 'rgb(0,0,0, 0.87)',
				dark: 'white',
				background: 'rgb(0,0,0, 0.87)'
			},
			secondary: {
				light: 'rgb(0,0,0, 0.54)',
				dark: 'rgba(255, 255, 255, 0.7)',
				background: 'rgb(0,0,0, 0.54)'
			},
			hint: {
				light: 'rgba(0, 0, 0, 0.38)',
				dark: 'rgba(255, 255, 255, 0.5)',
				background: 'rgba(0, 0, 0, 0.38)'
			},
			disabled: {
				light: 'rgba(0, 0, 0, 0.38)',
				dark: 'rgba(255, 255, 255, 0.5)',
				background: 'rgba(0, 0, 0, 0.38)'
			},
			icon: {
				light: 'rgba(0, 0, 0, 0.38)',
				dark: 'rgba(255, 255, 255, 0.5)',
				background: 'rgba(0, 0, 0, 0.38)'
			}
		}
	}
];

export default palettes;
