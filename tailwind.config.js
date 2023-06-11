/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pink: "#ea4c89",
				"dark-blue": "#0d0c22",
				"medium-gray": "#3d3d4e",
				gray: "#aaa9a9",
				"main-gray": "#6e6d7a",
				"light-gray": "#f3f3f4",
			},
			fontFamily: {
				openSans: ["'Open Sans'", "sans-serif"],
			},
			boxShadow: {
				formShadow: "0px 8px 20px rgba(0,0,0,0.06)",
			},
			spacing: {
				"34px": "34px",
			},
		},
	},
	plugins: [],
};
