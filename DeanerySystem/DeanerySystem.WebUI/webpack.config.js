﻿const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
    env = env || {};

    var config = {
        entry: {
            bundle: path.resolve(__dirname, 'scripts/admin/dashboard.tsx'),
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'wwwroot/dist')
        },
        mode: env.NODE_ENV, 
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader'
                    //exclude: /node_modules/
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new webpack.ProgressPlugin({
                $: "jquery",
                jQuery: "jquery",
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
            })
        ]
    }

    return config;
};