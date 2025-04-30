// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}' // Adjust as needed
	],
	theme: {
		extend: {
			colors: {
				sage: {
					500: '#a8c686'
				},
				navy: {
					500: '#1d3557'
				},
				gold: {
					500: '#ffc300'
				},
				background: '#f5f5f5',
				text: '#333333'
			}
		}
	},
	plugins: []
}
