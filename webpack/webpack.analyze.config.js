const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const baseConfig = require("./webpack.base.config.js");

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, "../dist/js/analyze"),
        filename: "[name].js"
    },
    performance: {
        hints: false
    },
    plugins: [
        // if imports are found in more than 2 .ts files, they will be moved into a vendor-bundle.js file which needs to be included on the page as well
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.min.js",
            minChunks: function(module, count) {
                if (module.resource && /node_modules/.test(module.resource)) {
                    return true;
                }
                return count >= 2;
            }
        }),
        new BundleAnalyzerPlugin({
            reportFilename: "report.html",
            statsFilename: "stats.json"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            sourceMap: false,
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
});