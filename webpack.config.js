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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, // https://github.com/webpack/webpack/issues/684
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'url-loader?limit=8192' },
                    { loader: 'img-loader' },
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader',
            },
        ]
    },
}