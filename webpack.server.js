const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/require.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.css?$/,
      use: [
        'isomorphic-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        }]
    },
    {
      test: /\.less?$/,
      exclude: [/node_modules/],
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      },
        'less-loader'
      ]
    },
    {
      test: /\.less?$/,
      exclude: [/src/],
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      },
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              'primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          }
        }
      ]
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: "file-loader",
      options: {
        publicPath: '/',
        outputPath: '../public/',
      }
    },
    {
      test: /\.json?$/,
      loader: "json-loader",
    },
    {
      test: /\.(png|jpeg|jpg|gif|svg)?$/,
      loader: 'url-loader',
      options: {
        limit: 8000,
        outputPath: '../public/',
        publicPath: '/'
      }
    }]
  }
};

module.exports = merge(config, serverConfig);