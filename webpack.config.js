var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
          { test: /.ts$/, use: 'ts-loader' },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
    }, 
    resolve: {
      fallback: {
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
      },
    }, 
};