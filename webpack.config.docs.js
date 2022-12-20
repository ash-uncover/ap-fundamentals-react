/* eslint-disable */

const { merge } = require('webpack-merge')
const base = require('./webpack.config.base.js')

const path = require('path')

const DIR_DOCS = path.resolve(__dirname, 'docs')
const DIR_SRC = path.resolve(__dirname, 'src')

const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  entry: path.resolve(DIR_SRC, 'index-docs.tsx'),

  output: {
    clean: true,
    path: DIR_DOCS,
    filename: 'docs.bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '_redirects'), to: '.' },
        { from: path.resolve(__dirname, 'public'), to: '.' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index-docs.html',
      title: 'Fundamentals React',
      publicPath: '/ap-fundamentals-react'
    }),
  ],
})
