const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');
const {r, projectPath, buildPath} = require('./util');
const  { enters ,views } = require('../pages')
module.exports = {
  entry: {
		...enters,
		commons:[r(projectPath,'./common/index.js'),'jquery']
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
      },{
				test: /\.(ts)$/,
				loader:'ts-loader'
			}, {
				test:/\.(pug|jade)$/,
				loader:'pug-loader'
			},{
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
  resolve:{
		extensions: [ '.js', '.json', '.css','.jsx','.scss'],
		alias:{
			'img':r(projectPath,'./assets/img'),
			'@':r(projectPath,'./components'),
			'service':r(projectPath,'./service'),
		}
	},
	
	plugins: [new MiniCssExtractPlugin({filename: "css/[name].css", chunkFilename: "css/[name].[hash].css"}),...views,
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery"
	})]
}