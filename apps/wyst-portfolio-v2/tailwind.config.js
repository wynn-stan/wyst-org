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
  theme: {
    extend: {
      colors: {
        green: {
          10: '#DDF0E6',
        },
        yellow: {
          10: '#FFF6DB',
        },
        black: {
          DEFAULT: '#000000',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
        blue: {
          5: '#EBF3FF',
          80: '#2460BA',
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function hexToRgb(hex) {
        const value = hex.charAt(0) === '#' ? hex.substring(1, 7) : hex;

        return [
          parseInt(value.substring(0, 2), 16),
          parseInt(value.substring(2, 4), 16),
          parseInt(value.substring(4, 6), 16),
        ].join(',');
      }

      function extractColorsToVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce(
          (total_hex_and_rgb_variables, current_color_key) => {
            const value = colorObj[current_color_key];
            const cssVariable =
              current_color_key === 'DEFAULT'
                ? `--color${colorGroup}`
                : `--color${colorGroup}-${current_color_key}`;

            const new_hex_and_rgb_variables =
              typeof value === 'string'
                ? {
                    [cssVariable]: value,
                    [`${cssVariable}-rgb`]: hexToRgb(value),
                  }
                : extractColorsToVars(value, `-${current_color_key}`);

            return {
              ...total_hex_and_rgb_variables,
              ...new_hex_and_rgb_variables,
            };
          },
          {}
        );
      }

      addBase({
        ':root': extractColorsToVars(theme('colors')),
      });
    },
  ],
};
