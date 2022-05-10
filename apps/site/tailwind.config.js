const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind.preset')],
};
