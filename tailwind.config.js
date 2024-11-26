/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#FCF5F7',
          100: '#F9ECF0',
          200: '#F2D5DD',
          300: '#EBBECA',
          400: '#DD8FA4',
          500: '#CF607E',
          600: '#BA3657',
          700: '#8E2942',
          800: '#5F1B2C',
          900: '#2F0E16',
        },
        brand: {
          orange: '#FF6B35',
          orangeLight: '#FF8B5E',
          orangeDark: '#E85A2C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: '1.125rem',
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};