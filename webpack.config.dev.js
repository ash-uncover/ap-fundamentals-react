/* eslint-disable */

const { merge } = require('webpack-merge')
const base = require('./webpack.config.base.js')

const path = require('path')

const DIR_DIST = path.resolve(__dirname, 'dist-dev')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_PUBLIC = path.resolve(__dirname, 'public')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  entry: path.resolve(DIR_SRC, 'index.tsx'),

  output: {
    clean: true,
    path: DIR_DIST,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'React Fundamentals',
    }),
  ],

  devtool: 'source-map',

  devServer: {
    static: {
      directory: DIR_PUBLIC,
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
})
