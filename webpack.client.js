const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');
const MIniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const clientConfig = {
  mode: 'production',
  entry: ['./src/client/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].bundle.js',
    // chunkFilename: "[name].[contenthash:8].chunck.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          "plugins": [
            [
              "@babel/plugin-syntax-dynamic-import"
            ],
            [
              "@babel/plugin-transform-runtime"
            ],
            [
              "@babel/plugin-proposal-decorators",
              {
                "legacy": true
              }
            ],
            [
              "@babel/plugin-proposal-class-properties",
              {
                "loose": false
              }
            ],
            ["import", {
              "libraryName": "antd",
              "libraryDirectory": "es",
              "style": true // `style: true` 会加载 less 文件
            }]
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          MIniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }]
      },
      {
        test: /\.css$/,
        include: [/node_modules/],
        use: [
          MIniCssExtractPlugin.loader,
          // 'style-loader',
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
        include: [/node_modules/],
        use: [
          MIniCssExtractPlugin.loader,
          {
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
                'primary-color': 'red',
              },
              javascriptEnabled: true,
            }
          }
        ]
      },
      {
        test: /\.less?$/,
        exclude: [/node_modules/],
        use: [
          MIniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          publicPath: '/'
        }
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)?$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          publicPath: '/'
        }
      }]
  },
  plugins: [
    new MIniCssExtractPlugin({     // 抽离css样式插件
      // 抽离后的文件名
      // 类似 webpackOptions.output里面的配置 可以忽略
      // filename: '[name][hash].css',
      filename: '[name].[hash].css'
    }),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      //每次编译都在文件名中插入一个不同的哈希值。
      template: path.resolve(__dirname, './src/index.html'),
      inject: true,
      filename: 'template.html'
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minChunks: 2,
  // cacheGroups: {
  //   commons: {
  //     test: /[\\/]node_modules[\\/]/,
  //     name: 'vendors',
  //     chunks: 'all',
  //     minChunks: 1,
  //     priority: 2
  //   },
  //   styles: {
  //     minSize: 30000,
  //     name: 'styles',
  //     test: /\/src\/components\/.*\.less|css$/,
  //     chunks: 'async',
  //     enforce: true,
  //     priority: 5
  //   }
  // }
  // }
  // },
};

module.exports = merge(config, clientConfig);