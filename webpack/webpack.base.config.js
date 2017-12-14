/// <binding />
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HardSource = require("hard-source-webpack-plugin");

module.exports = {
  entry: {
    index: ["./src/ts/index.ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader",
            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000000 //~75mb
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".vue", ".js", ".scss", ".css", ".html"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      jquery: "jquery/src/jquery"
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    stats: {
      children: false
    }
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  plugins: [
    new HardSource(),

    // The ProvicePlugin plugin is used to automatically load modules instead of having to import or require them everywhere
    // Bootstrap needs jquery, and if we include it here, we don't need to import jquery in a specific bootstrap bundle -  adds "global scope" to libraries like bootstrap
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
