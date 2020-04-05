const postcssImport = require("postcss-import");
const postcssCustomProperties = require("postcss-custom-properties");
const postcssCustomMedia = require("postcss-custom-media");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const plugins = [
  postcssImport(),
  postcssCustomProperties({ preserve: true }),
  postcssCustomMedia(),
  autoprefixer(),
  cssnano()
];

module.exports = {
  plugins
};
