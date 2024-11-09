import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        'dark': '#22223B',
        'fuchsia': {
					'50': '#f2f7fd',
					'100': '#e4ecfa',
					'200': '#c2d9f5',
					'300': '#8cb9ed',
					'400': '#4f95e1',
					'500': '#2878cf',
					'600': '#1a5fb4',
					'700': '#164b8e',
					'800': '#164076',
					'900': '#183762',
					'950': '#102341',
				},
      
      },
      fontFamily: {
				important: ['Abyss', 'Roboto', 'sans-serif'],
			},
    },
  },
  darkMode: true,
  plugins: [],
} satisfies Config;
