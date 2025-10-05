module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Darker Blue
        primary: {
          DEFAULT: "#2563eb", // darker blue-600
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        // Secondary Colors - Light Jordy Blue
        secondary: {
          DEFAULT: "#aeceff", // light-jordy-blue
          50: "#f5f8ff", // light-jordy-blue-50
          100: "#ebf2ff", // light-jordy-blue-100
          200: "#d6e5ff", // light-jordy-blue-200
          300: "#c1d8ff", // light-jordy-blue-300
          400: "#aeceff", // light-jordy-blue-400
          500: "#9bc4ff", // light-jordy-blue-500
          600: "#88baff", // light-jordy-blue-600
          700: "#75b0ff", // light-jordy-blue-700
          800: "#62a6ff", // light-jordy-blue-800
          900: "#4f9cff", // light-jordy-blue-900
        },
        // Accent Colors - Pale Jordy Blue
        accent: {
          DEFAULT: "#c7e4ff", // pale-jordy-blue
          50: "#f9fcff", // pale-jordy-blue-50
          100: "#f3f9ff", // pale-jordy-blue-100
          200: "#e7f2ff", // pale-jordy-blue-200
          300: "#dbebff", // pale-jordy-blue-300
          400: "#c7e4ff", // pale-jordy-blue-400
          500: "#b3ddff", // pale-jordy-blue-500
          600: "#9fd6ff", // pale-jordy-blue-600
          700: "#8bcfff", // pale-jordy-blue-700
          800: "#77c8ff", // pale-jordy-blue-800
          900: "#63c1ff", // pale-jordy-blue-900
        },
        // Background Colors
        background: "#ffffff", // white
        surface: {
          DEFAULT: "#f8faff", // ghost-white
          50: "#fafbff", // ghost-white-50
          100: "#f5f7ff", // ghost-white-100
          200: "#f0f3ff", // ghost-white-200
          300: "#ebefff", // ghost-white-300
          400: "#e6ebff", // ghost-white-400
          500: "#e1e7ff", // ghost-white-500
        },
        // Text Colors
        text: {
          primary: "#1a1a1a", // gray-900
          secondary: "#4a5568", // gray-600
          muted: "#718096", // gray-500
          light: "#a0aec0", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          light: "#f1f5f9", // gray-100
          muted: "#cbd5e0", // gray-300
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      boxShadow: {
        'primary': '0 4px 12px rgba(146, 184, 255, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'light': '0 1px 4px rgba(0, 0, 0, 0.04)',
      },
      scale: {
        '102': '1.02',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}