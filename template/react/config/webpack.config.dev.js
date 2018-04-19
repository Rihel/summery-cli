const webpackBaseConfig = require('./webpack.config.base');
const {merge,r,rootPath} = require('./util');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',
  entry: {
    commons: [
      'react',
      'react-router-dom',
      'react-dom',
      'redux',
      'react-redux',
      'axios'
    ]
  },
  devServer:{
    inline:true,
    port:3000
  },
  module:{
    rules:[
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'scss-loader', 'postcss-loader']
      }
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
  plugins:[
    new htmlWebpackPlugin({
      title: '博客',
      template: r(rootPath,'./index.html')
    })
  ]
})
