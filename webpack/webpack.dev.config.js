const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, "../dist/js/"),
    filename: "[name].js"
  },
  performance: {
    hints: false
  },
  devtool: "source-map",
  plugins: [
    // if imports are found in more than 2 .ts files, they will be moved into a vendor-bundle.js file which needs to be included on the page as well
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor/vendor.js",
      minChunks: function(module, count) {
        if (module.resource && /node_modules/.test(module.resource)) {
          return true;
        }
        return count >= 2;
      }
    }),
    new HardSourceWebpackPlugin()
  ]
});