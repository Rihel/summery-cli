const webpackBaseConfig = require('./webpack.config.base');
const {merge,r,rootPath,projectPath} = require('./util');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',
  devServer:{
    inline:true,
		port:3000
  },
  module:{
    rules:[
      {
        test: /\.(css|scss)$/,
        use: [
					MiniCssExtractPlugin.loader, 
					"css-loader", 
				{
					loader: 'sass-loader',
					options: {
						includePaths: [r(projectPath, './assets/scss')]
					}
				}, 'postcss-loader']
      }
    ]
  },
})
