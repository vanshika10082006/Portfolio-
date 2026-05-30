/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#6366F1',
        accent: '#A78BFA',
        dark: '#0A0A0F',
        'dark-card': '#12121A',
        'dark-border': '#1E1E2E',
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'purple-glow': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'purple': '0 0 30px rgba(139,92,246,0.3)',
        'purple-lg': '0 0 60px rgba(139,92,246,0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
