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
			},
			fontFamily: {
				// 	poppins: ['poppins', 'sans-serif'],
				// 	sb: ['sb', 'serif'],
				handlee: ["Handlee"],
				poppins: ["Poppins"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
