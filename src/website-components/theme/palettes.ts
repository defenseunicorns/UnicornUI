import type { Palettes } from '$lib/shared/theme/palette/palette.types';

const palettes: Palettes = {
	shared: {
		primary: '#68c4ff',
		secondary: '#787ff6',
		surface: '#244a8f',
		success: '#2e7d32',
		warning: '#ed6c02',
		info: '#0288d1',
		error: '#b00020',
		on: {
			primary: 'black',
			secondary: 'white',
			surface: '#ffffff',
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
	dark: {
		background: '#0a0e2e',
		on: {
			background: '#ffffff'
		}
	},
	light: {
		background: '#ffffff',
		surface: '#ffffff',
		on: {
			background: 'black',
			surface: 'black'
		}
	}
};

export default palettes;
