const path = require('path');
const webpack = require('webpack');

const dirPath = path.resolve(__dirname, '../');

const config = {
    entry: ['./src/Index.js', 'webpack-hot-middleware/client'],
    output: {
        path: dirPath,
        filename: 'App.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: dirPath,
        port: 9000,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

// config.plugins.unshift(new ReactRefreshPlugin());

module.exports = config;