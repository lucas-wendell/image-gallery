/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xsm: "350px",
			},
			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
			},
			gridTemplateRows: {
				"auto-fill": "repeat(auto-fill, minmax(270px, 1fr))",
			},
			colors: {
				pink: "#ea4c89",
				"dark-blue": "#0d0c22",
				"medium-gray": "#3d3d4e",
				gray: "#aaa9a9",
				"main-gray": "#6e6d7a",
				"light-gray": "#f3f3f4",
				"transparent-bg": "rgba(13,12,34,0.05)",
			},
			fontFamily: {
				openSans: ["'Open Sans'", "sans-serif"],
			},
			boxShadow: {
				formShadow: "0px 8px 20px rgba(0,0,0,0.06)",
			},
			spacing: {
				"87px": "87px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
