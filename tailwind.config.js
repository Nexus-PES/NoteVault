/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
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
		},
		fontFamily: {
			// 	poppins: ['poppins', 'sans-serif'],
			// 	sb: ['sb', 'serif'],
			handlee: ["Handlee"],
			poppins: ["Poppins"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
