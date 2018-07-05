const path = require('path');

module.exports = {
    name: 'coup-challenge-app',
    context: path.join(__dirname, 'src'),
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
    },
    entry: {
        'coup-challenge-app': path.join(__dirname, 'src/index.js'),
    },
    output: {
        path: path.join(__dirname),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader',
            },
        ]
    },
}