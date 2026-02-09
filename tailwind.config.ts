import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - rbovetti.com family
        primary: {
          DEFAULT: '#1b365d', // accent-cold
          light: '#2d4a75',
          dark: '#0f1e3d',
        },
        accent: {
          DEFAULT: '#8b2635', // accent-warm
          light: '#a33043',
          dark: '#75202d',
        },
        // Background colors
        background: {
          DEFAULT: '#fafaf8',
          light: '#ffffff',
          dark: '#f0f0ee',
        },
        // Text colors
        text: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
          light: '#6a6a6a',
          white: '#ffffff',
        },
        // Semantic colors
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
        info: '#17a2b8',
        // Border
        border: {
          DEFAULT: 'rgba(27, 54, 93, 0.12)',
          light: 'rgba(27, 54, 93, 0.08)',
          dark: 'rgba(27, 54, 93, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': '5rem',
        'section-mobile': '3rem',
      },
      borderRadius: {
        'card': '1rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
