import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
        'black': { DEFAULT: '#08090a', 100: '#020202', 200: '#040405', 300: '#050607', 400: '#070809', 500: '#08090a', 600: '#353b42', 700: '#606c78', 800: '#929da8', 900: '#c9ced3' }, 
        'rose_quartz': { DEFAULT: '#a7a2a9', 100: '#222022', 200: '#434045', 300: '#655f67', 400: '#878089', 500: '#a7a2a9', 600: '#b9b5ba', 700: '#cac7cc', 800: '#dcdadd', 900: '#edecee' }, 
        'seasalt': { DEFAULT: '#f4f7f5', 100: '#29392e', 200: '#52725d', 300: '#82a48d', 400: '#bacdc1', 500: '#f4f7f5', 600: '#f6f8f6', 700: '#f8faf9', 800: '#fafcfb', 900: '#fdfdfd' }, 
        'davys_gray': { DEFAULT: '#575a5e', 100: '#111213', 200: '#222425', 300: '#333538', 400: '#45474a', 500: '#575a5e', 600: '#767a7f', 700: '#989ba0', 800: '#babcbf', 900: '#dddedf' }, 
        'eerie_black': { DEFAULT: '#222823', 100: '#070807', 200: '#0e110e', 300: '#151916', 400: '#1c211d', 500: '#222823', 600: '#4b584d', 700: '#738776', 800: '#a1afa4', 900: '#d0d7d1' },
        'blue': {50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554'},
        'lime': {300: '#bef264', 400: '#a3e635', 500: '#84cc16'}
        
    }
  },
  plugins: [],
};
export default config;
