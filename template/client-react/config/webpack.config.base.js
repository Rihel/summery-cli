const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');
const {r, projectPath, buildPath} = require('./util');
module.exports = {
  entry: {
    app: r(projectPath, './index.js')
  },
  output: {
    filename: 'js/[name].js',
    path: buildPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'img/', // 图片输出的路径
            limit: 5 * 1024,
          }
        }
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)\w*/,
				use:[
					{
						loader: 'url-loader',
						options:{
							limit:10 * 1024,
						}
					}
				]
			},
    ]
  },
  resolve:{
		extensions: [ '.js', '.json', '.css','.jsx','.scss'],
		alias:{
			'img':r(projectPath,'./assets/img'),
			'@':r(projectPath,'./components'),
			'service':r(projectPath,'./service'),
		}
  },
  plugins: [new MiniCssExtractPlugin({filename: "css/[name].css", chunkFilename: "css/[name].[hash].css"})]
}