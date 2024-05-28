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
	screens: {
		"sm": {
			"max": "767px"
		},
		"md": {
			"min": "768px",
			"max": "1023px"
		},
		"lg": {
			"min": "1024px",
			"max": "1279px"
		},
		"xl": {
			"min": "1280px",
			"max": "1535px"
		},
		"2xl": {
			"min": "1536px"
		},
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
			"fade-in": "fade-in 500ms ease-out",
			"shake": "shake 600ms linear 3"
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
			},
			"shake": {
				"0%": {
					transform: "rotate(0deg)"
				},
				"25%": {
					transform: "rotate(15deg)"
				},
				"50%": {
					transform: "rotate(0deg)"
				},
				"75%": {
					transform: "rotate(-15deg)"
				},
				"100%": {
					transform: "rotate(0deg)"
				}
			},
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
