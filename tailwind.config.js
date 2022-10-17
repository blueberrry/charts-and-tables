/** @type {import('tailwindcss').Config} */

// TODO: Change to TS

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // colours with contrast strength value 50 - 900
      'primary-100': 'var(--theme-primary-100)',
      'primary-400': 'var(--theme-primary-400)',
      'primary-700': 'var(--theme-primary-700)',
      'secondary-100': 'var(--theme-secondary-100)',
      'secondary-400': 'var(--theme-secondary-400)',
      'secondary-700': 'var(--theme-secondary-700)',
      'success-100': 'var(--theme-success-100)',
      'success-400': 'var(--theme-success-400)',
      'success-700': 'var(--theme-success-700)',
      'error-100': 'var(--theme-error-100)',
      'error-400': 'var(--theme-error-400)',
      'error-700': 'var(--theme-error-700)',
      'info-100': 'var(--theme-info-100)',
      'info-400': 'var(--theme-info-400)',
      'info-700': 'var(--theme-info-700)',
      'warning-100': 'var(--theme-warning-100)',
      'warning-400': 'var(--theme-warning-400)',
      'warning-700': 'var(--theme-warning-700)',
      // text colours
      'body-100': 'var(--theme-body-100)',
      'body-400': 'var(--theme-body-400)',
      'body-700': 'var(--theme-body-700)',
    },
    extend: {},
  },
  plugins: [],
};
