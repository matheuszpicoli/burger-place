/**
	@type {
		import("tailwindcss").Config
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
		},
		rotate: {
			"0": "0",
			"180": "180deg"
		},
		animation: {
			"modal": "modal 150ms linear 1",
			"fade-in": "fade-in 500ms ease-out"
		},
		keyframes: {
			"modal": {
				"from": {
					opacity: "0",
					transform: "translateY(100vh)"
				},
				"to": {
					opacity: "1",
					transform: "translateY(0)"
				}
			},
			"fade-in": {
				"from": {
					opacity: "0",
					transform: "translateY(10vh)"
				},
				"to": {
					opacity: "1",
					transform: "translateY(0)"
				}
			}
		},
		transitionProperty: {
			"height": "height",
			"spacing": "margin, padding",
		},
	},
	variants: {
		extend: {
			transitionProperty: [
				"responsive",
				"motion-safe",
				"motion-reduce"
			],
		},
	},
}

export const plugins = [
	require("tailwindcss")
]
