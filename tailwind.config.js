/**
	@type {
		import('tailwindcss').Config
	}
*/

export const content = [
	"./src/**/*.{js,jsx,ts,tsx}",
]

export const theme = {
	container: {
		center: true
	},
	extend: {
		colors: {
			"black-70": "rgba(0, 0, 0, 0.7)"
		}
	},
}

export const plugins = [
	require("tailwindcss")
]
