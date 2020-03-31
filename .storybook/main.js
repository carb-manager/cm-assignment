const path = require('path');
const root = path.resolve(__dirname, '../');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  styles: ['./storybook.scss'],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs'],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(root, 'src')
    };

    const fileLoader = config.module.rules.find((rule, i) => {
      return rule.loader && rule.loader.match(/file-loader/);
    });
    fileLoader.exclude = path.resolve('./src/assets/icons');

    config.module.rules.push({
      test: /\.svg$/,
      use: ['vue-svg-loader'],
      include: path.resolve(__dirname, '../src/assets/icons')
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: `@import "src/design/index.scss";`
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
  }
};
