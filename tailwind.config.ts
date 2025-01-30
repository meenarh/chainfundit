import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			futura: ['Futura', 'sans-serif'],
			source: ['Source Sans Pro', 'sans-serif'],
			dmSans: ['DM Sans', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif']
		},
  		colors: {
			chainGreen: '#104901',
			springGreen: '#007A5A',
			isabelline: '#EEE5E5',
			oldGold: '#BAB700',
			xanthous: '#ECB22E',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  boxShadow: {
			'3xl':'0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
			'4xl': '0px 5px 15px rgba(0, 0, 0, 0.35)',
			'5xl': '7px 7px 0px rgba(55, 65, 81, 1)',
			custom: '0 10px 20px rgba(0, 0, 0, 0.5)',
		 },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
