const path = require('path');
const webpack = require('webpack');

const settings = require('./settings.js');

module.exports = {
    entry: {
        vendor: ['lodash'],
    },
    output: {
        path: settings.dllDirectory,
        filename: 'dll.[name].js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            context: './',
            name: '[name]',
            path: path.join(settings.dllDirectory, '[name]-manifest.json'),
        }),
    ],
    resolve: {
        modules: ['node_modules'],
    },
};
