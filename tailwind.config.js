/** @type {import('tailwindcss').Config} */

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

      'neutral-100': 'var(--theme-neutral-100)',
      'neutral-400': 'var(--theme-neutral-400)',
      'neutral-700': 'var(--theme-neutral-700)',

      'highlight-100': 'var(--theme-highlight-100)',
      'highlight-400': 'var(--theme-highlight-400)',
      'highlight-700': 'var(--theme-highlight-700)',

      success: 'var(--theme-success)',

      error: 'var(--theme-error)',

      info: 'var(--theme-info)',

      warning: 'var(--theme-warning)',

      // main bg
      canvas: 'var(--theme-canvas)',

      // text colours
      'body-100': 'var(--theme-body-100)',
      'body-400': 'var(--theme-body-400)',
      'body-700': 'var(--theme-body-700)',
      'body-inverse': 'var(--theme-body-inverse)',
    },
    extend: {},
  },
  plugins: [],
};
