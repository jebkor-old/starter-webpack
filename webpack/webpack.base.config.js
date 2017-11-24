/// <binding />
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: {
        'index': ['./src/ts/index.ts']
    },
    module: {
        rules: [
            {
                test: require.resolve('numeral'),
                use: [{
                    loader: 'expose-loader',
                    options: 'numeral'
                }]
            },
            {
                test: require.resolve('moment'),
                use: [{
                    loader: 'expose-loader',
                    options: 'moment'
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                }
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [__dirname + '/node_modules'],
                            outputStyle: "compressed"
                        }
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.vue', '.js', '.scss', '.css', '.html'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery': 'jquery/src/jquery'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        stats: {
            children: false
        },
    },
    performance: {
        hints: false
    },
    stats: {
        children: false
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]-bundle.css',
            disable: false,
            allChunks: true,

        }),

        // The ProvicePlugin plugin is used to automatically load modules instead of having to import or require them everywhere
        // Bootstrap needs jquery, and if we include it here, we don't need to import jquery in a specific bootstrap bundle -  adds "global scope" to libraries like bootstrap
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}