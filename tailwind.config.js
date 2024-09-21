/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			maxWidth: {
				'small-container': '100%',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addComponents }) {
			addComponents({
				'.small-container': {
					maxWidth: '1000px',  // Default for larger screens
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: '1rem',  // Optional padding
					paddingRight: '1rem', // Optional padding
				},
				'@media (max-width: 640px)': {
					'.small-container': {
						maxWidth: '100%', // Adjust for small screens (sm)
					},
				},
				'@media (min-width: 640px) and (max-width: 768px)': {
					'.small-container': {
						maxWidth: '100%', // Adjust for medium screens (md)
					},
				},
				'@media (min-width: 1024px)': {
					'.small-container': {
						maxWidth: '100%'
					}
				},
				'@media (min-width: 1280px)': {
					'.small-container': {
						maxWidth: '1280px'
					}
				}
			});
		},
	],
}

