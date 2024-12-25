const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#6C737F',
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D2D6DB',
          400: '#9DA4AE',
          500: '#6C737F',
          600: '#4D5761',
          700: '#384250',
          800: '#1F2A37',
          900: '#111927',
        },
        yellow: {
          40: '#FAB12F',
        },
        orange: {
          40: '#FA812F',
        },
        peach: {
          60: '#C7253E',
        },
      },
      boxShadow: {
        wb: '3px 4px 16px 0px rgba(0,0,0,0.16)',
        wt: '0px -4px 16px 0px rgba(0,0,0,0.16)',
        tb: '0px 2px 6px 0px rgba(0,0,0,0.08)',
        tt: '0px -2px 6px 0px rgba(0,0,0,0.08)',
      },
      borderColor: '#CACDCD',
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    function ({ addBase, theme }) {
      function hexToRgb(hex) {
        const value = hex.charAt(0) === '#' ? hex.substring(1, 7) : hex;

        return [
          parseInt(value.substring(0, 2), 16),
          parseInt(value.substring(2, 4), 16),
          parseInt(value.substring(4, 6), 16),
        ].join(',');
      }

      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable =
            colorKey === 'DEFAULT'
              ? `--color${colorGroup}`
              : `--color${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? {
                  [cssVariable]: value,
                  [`${cssVariable}-rgb`]: hexToRgb(value),
                }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
