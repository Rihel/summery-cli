const webpackBaseConfig = require('./webpack.config.base');
const {merge, r, rootPath} = require('./util');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = merge(webpackBaseConfig, {
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'commons'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'scss-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: r(rootPath, 'manifest.json')
    }),
    new htmlWebpackPlugin({
      title: '博客',
      filename: 'index.html',
      template: r(rootPath, './index.prod.html')
    })
  ]
});
module.exports = config;
