/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				wave: {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
			},
			animation: {
				"waving-hand": "wave 2s linear infinite",
			},
			fontSize: {
				"clamp-heading": "clamp(54px, 10vw, 150px)",
				"clamp-subheading": "clamp(1.5rem, 5vw, 2.16rem)",
				"clamp-hero": "clamp(18px, 1rem + 4vw, 48px)",
				"clamp-notes-greeting": "clamp(24px, 1rem + 4vw, 48px)",
			},
			colors: {
				dark: {
					100: "#292929",
					200: "#121212",
				},
				text: {
					100: "#CECECE",
					200: "#676161",
				},
				background: "#1D1D1D",
				primary: "#E40000",
				secondary: "#FF5416",
				secondary: {
					100: "rgb(255, 221, 208)",
					200: "rgb(255, 193, 171)",
					300: "rgb(255, 166, 134)",
					400: "rgb(255, 139, 97)",
					500: "rgb(255, 111, 59)",
					600: "rgb(242, 84, 22)",
					700: "rgb(217, 71, 19)",
					800: "rgb(217, 71, 19)",
					900: "rgb(204, 67, 18)",
				},
			},
			fontFamily: {
				handlee: ["Handlee"],
				poppins: ["Poppins"],
			},
			typography: (theme) => ({
				custom: {
					css: {
						"--tw-prose-body": theme("colors.white"),
						"--tw-prose-headings": theme("colors.white"),
						"--tw-prose-lead": theme("colors.secondary[600]"),
						"--tw-prose-links": theme("colors.secondary[600]"),
						"--tw-prose-bold": theme("colors.white"),
						"--tw-prose-counters": theme("colors.slate[500]"),
						"--tw-prose-bullets": theme("colors.slate[500]"),
						"--tw-prose-hr": theme("colors.slate[500]"),
						"--tw-prose-quotes": theme("colors.white"),
						"--tw-prose-quote-borders": theme("colors.secondary[600]"),
						"--tw-prose-captions": theme("colors.secondary[700]"),
						"--tw-prose-code": theme("colors.slate[900]"),
						"--tw-prose-pre-code": theme("colors.text[100]"),
						"--tw-prose-pre-bg": theme("colors.background"),
						"--tw-prose-th-borders": theme("colors.secondary[300]"),
						"--tw-prose-td-borders": theme("colors.secondary[200]"),
						"--tw-prose-invert-body": theme("colors.secondary[200]"),
						"--tw-prose-invert-headings": theme("colors.white"),
						"--tw-prose-invert-lead": theme("colors.secondary[300]"),
						"--tw-prose-invert-links": theme("colors.white"),
						"--tw-prose-invert-bold": theme("colors.white"),
						"--tw-prose-invert-counters": theme("colors.secondary[600]"),
						"--tw-prose-invert-bullets": theme("colors.secondary[600]"),
						"--tw-prose-invert-hr": theme("colors.secondary[700]"),
						"--tw-prose-invert-quotes": theme("colors.white"),
						"--tw-prose-invert-quote-borders":
							theme("colors.secondary[700]"),
						"--tw-prose-invert-captions": theme("colors.secondary[400]"),
						"--tw-prose-invert-code": theme("colors.white"),
						"--tw-prose-invert-pre-code": theme("colors.secondary[300]"),
						"--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
						"--tw-prose-invert-th-borders":
							theme("colors.secondary[600]"),
						"--tw-prose-invert-td-borders":
							theme("colors.secondary[600]"),
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
