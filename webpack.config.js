const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './app/index.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: [],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0']
                    }
                }
            }
        ]
    }
};