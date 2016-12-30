var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/main.js',
    devtool: 'source-map',

    output: {
        path: __dirname + '/dist/assets',
        filename: 'bundle.js',
        publicPath: 'assets'
    },

    devServer: {
        port: 5000,
        inline: true,
        contentBase: __dirname + '/dist'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    }
};