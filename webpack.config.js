const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './app/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    plugins: [],
    resolve: {
        extensions: ['.js']
    },
    externals: [
        {
            "redux": "Redux",
            "superagent": "superagent"
        }
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};