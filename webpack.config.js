const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const settings = require('./settings.js');

module.exports = {
    entry: {
        main: [path.join(settings.srcDirectory, 'main.js')],
    },
    output: {
        path: settings.buildDirectory,
        publicPath: '/',
        filename: '[name].js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.join(
                settings.dllDirectory,
                'vendor-manifest.json'
            )),
        }),

        // Скопирует ваши dll в папку с бандлами
        new CopyWebpackPlugin(
            [
                {
                    context: settings.dllDirectory,
                    from: '*',
                },
            ],
            {
                ignore: ['vendor-manifest.json'],
            }
        ),
    ],
};
