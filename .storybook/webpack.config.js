const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@storybook/addons': path.resolve(
        __dirname,
        '..',
        'node_modules',
        '@storybook',
        'addons'
      ),
    },
  },
};
