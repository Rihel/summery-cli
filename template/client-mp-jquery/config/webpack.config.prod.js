const webpackBaseConfig = require('./webpack.config.base');
const {merge, r, rootPath,projectPath,buildPath} = require('./util');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clearDir = require('clean-webpack-plugin');
const config = merge(webpackBaseConfig, {
	devtool: 'source-map',
	output: {
    filename: 'js/[name].[hash].js',
    path: buildPath,
    publicPath: '/'
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
					{
						loader: 'sass-loader',
						options: {
							includePaths: [r(projectPath, './assets/scss')]
						}
					},
          'postcss-loader'
        ]
      }
    ]
	},
	plugins:[
		new clearDir([r(rootPath,'./dist')]),
	]
});
module.exports = config;
